'use client'

import { createClient } from '@/lib/supabase/client'
import { useCallback } from 'react'

export interface CartItem {
  product_id: string
  quantity: number
  product_name: string
  price: number
}

export function useCart() {
  const supabase = createClient()

  const addToCart = useCallback(
    async (productId: string, quantity: number = 1) => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()
        if (!user) throw new Error('Not authenticated')

        const { error } = await supabase
          .from('cart_items')
          .upsert(
            {
              user_id: user.id,
              product_id: productId,
              quantity,
            },
            { onConflict: 'user_id,product_id' }
          )

        if (error) throw error
        return true
      } catch (error) {
        console.error('Failed to add to cart:', error)
        return false
      }
    },
    [supabase]
  )

  const removeFromCart = useCallback(
    async (productId: string) => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()
        if (!user) throw new Error('Not authenticated')

        const { error } = await supabase
          .from('cart_items')
          .delete()
          .eq('user_id', user.id)
          .eq('product_id', productId)

        if (error) throw error
        return true
      } catch (error) {
        console.error('Failed to remove from cart:', error)
        return false
      }
    },
    [supabase]
  )

  const updateQuantity = useCallback(
    async (productId: string, quantity: number) => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()
        if (!user) throw new Error('Not authenticated')

        if (quantity <= 0) {
          return removeFromCart(productId)
        }

        const { error } = await supabase
          .from('cart_items')
          .update({ quantity })
          .eq('user_id', user.id)
          .eq('product_id', productId)

        if (error) throw error
        return true
      } catch (error) {
        console.error('Failed to update quantity:', error)
        return false
      }
    },
    [supabase, removeFromCart]
  )

  const clearCart = useCallback(
    async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()
        if (!user) throw new Error('Not authenticated')

        const { error } = await supabase
          .from('cart_items')
          .delete()
          .eq('user_id', user.id)

        if (error) throw error
        return true
      } catch (error) {
        console.error('Failed to clear cart:', error)
        return false
      }
    },
    [supabase]
  )

  return { addToCart, removeFromCart, updateQuantity, clearCart }
}
