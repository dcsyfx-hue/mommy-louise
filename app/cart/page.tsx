'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react'
import Checkout from '@/app/components/checkout'
import { PRODUCTS, getProductById } from '@/lib/products'

export const dynamic = 'force-dynamic'

interface CartItem {
  id: string
  product_id: string
  quantity: number
  created_at: string
}

export default function CartPage() {
  const [supabase, setSupabase] = useState<any>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [showCheckout, setShowCheckout] = useState(false)

  useEffect(() => {
    const sb = createClient()
    setSupabase(sb)
    fetchCart(sb)
  }, [])

  const fetchCart = async (sb: any) => {
    try {
      const {
        data: { user },
      } = await sb.auth.getUser()
      if (!user) return

      const { data, error } = await sb
        .from('cart_items')
        .select('*')
        .eq('user_id', user.id)

      if (error) throw error
      setCartItems(data || [])
    } catch (error) {
      console.error('Failed to fetch cart:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleRemove = async (productId: string) => {
    if (!supabase) return
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return

      await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id)
        .eq('product_id', productId)

      setCartItems(items => items.filter(item => item.product_id !== productId))
    } catch (error) {
      console.error('Failed to remove item:', error)
    }
  }

  const handleUpdateQuantity = async (productId: string, quantity: number) => {
    if (!supabase) return
    if (quantity <= 0) {
      handleRemove(productId)
      return
    }

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return

      await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('user_id', user.id)
        .eq('product_id', productId)

      setCartItems(items =>
        items.map(item =>
          item.product_id === productId ? { ...item, quantity } : item
        )
      )
    } catch (error) {
      console.error('Failed to update quantity:', error)
    }
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = getProductById(item.product_id)
      return total + (product ? product.priceInCents * item.quantity : 0)
    }, 0)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your cart...</p>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/shop" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-8">
            <ArrowLeft size={20} />
            Back to Shop
          </Link>

          <div className="text-center py-12">
            <ShoppingBag size={48} className="mx-auto mb-4 text-gray-300" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
            <Button asChild className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const total = calculateTotal()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/shop" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-8">
          <ArrowLeft size={20} />
          Back to Shop
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => {
              const product = getProductById(item.product_id)
              if (!product) return null

              const itemTotal = product.priceInCents * item.quantity

              return (
                <Card key={item.id} className="border-pink-200">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">${(product.priceInCents / 100).toFixed(2)} each</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => handleUpdateQuantity(item.product_id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:text-gray-900"
                        >
                          −
                        </button>
                        <span className="px-4 py-1 border-l border-r border-gray-300">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.product_id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:text-gray-900"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right min-w-[120px]">
                        <p className="font-semibold text-gray-900">${(itemTotal / 100).toFixed(2)}</p>
                      </div>

                      <button
                        onClick={() => handleRemove(item.product_id)}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="border-pink-200 sticky top-4">
              <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50 border-b border-pink-200">
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${(total / 100).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">Calculated at checkout</span>
                  </div>
                </div>

                <div className="border-t border-pink-200 pt-4 flex justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-semibold text-gray-900">${(total / 100).toFixed(2)}</span>
                </div>

                {showCheckout ? (
                  <Checkout productId="cart-checkout" />
                ) : (
                  <Button
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white"
                  >
                    Proceed to Checkout
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
