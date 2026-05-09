'use server'

import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

export async function createOrder(cartItems: any[], totalAmount: number) {
  const supabase = await createClient()
  
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      throw new Error('Not authenticated')
    }

    // Generate order number
    const orderNumber = `MLB-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Create order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        user_id: user.id,
        order_number: orderNumber,
        status: 'pending',
        payment_status: 'pending',
        subtotal: totalAmount,
        total: totalAmount,
      })
      .select()
      .single()

    if (orderError) throw orderError

    // Add order items
    for (const item of cartItems) {
      const { error: itemError } = await supabase
        .from('order_items')
        .insert({
          order_id: order.id,
          product_id: item.product_id,
          product_name: item.product_name,
          quantity: item.quantity,
          unit_price: item.unit_price,
        })

      if (itemError) throw itemError
    }

    // Clear cart
    await supabase
      .from('cart_items')
      .delete()
      .eq('user_id', user.id)

    return { success: true, order }
  } catch (error) {
    console.error('Error creating order:', error)
    throw error
  }
}

export async function updateOrderPaymentStatus(orderId: string, status: string, stripePaymentId: string) {
  const supabase = await createClient()
  
  try {
    const { error } = await supabase
      .from('orders')
      .update({
        payment_status: status,
        stripe_payment_id: stripePaymentId,
        status: status === 'completed' ? 'completed' : 'pending',
      })
      .eq('id', orderId)

    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Error updating order:', error)
    throw error
  }
}
