'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export const dynamic = 'force-dynamic'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Star, ShoppingCart } from 'lucide-react'
import { getProductById } from '@/lib/products'

interface Review {
  id: string
  rating: number
  title: string
  content: string
  user_id: string
  profiles: { full_name: string }
  created_at: string
}

export default function ProductDetail() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  
  const [product, setProduct] = useState<any>(null)
  const [reviews, setReviews] = useState<Review[]>([])
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const [addingToCart, setAddingToCart] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const { data: productData, error: productError } = await supabase
          .from('products')
          .select('*')
          .eq('slug', slug)
          .single()

        if (productError) throw productError
        setProduct(productData)

        // Load reviews
        const { data: reviewsData } = await supabase
          .from('product_reviews')
          .select('*, profiles(full_name)')
          .eq('product_id', productData.id)
          .order('created_at', { ascending: false })

        setReviews(reviewsData || [])
      } catch (error) {
        console.error('Error loading product:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [slug, supabase])

  const handleAddToCart = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/auth/login')
        return
      }

      setAddingToCart(true)

      const { error } = await supabase
        .from('cart_items')
        .upsert({
          user_id: user.id,
          product_id: product?.id,
          quantity: quantity
        })

      if (error) throw error
      
      // Show success and redirect to cart
      router.push('/cart')
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setAddingToCart(false)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (!product) {
    return <div className="flex items-center justify-center h-screen">Product not found</div>
  }

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 0

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/shop" className="text-pink-600 hover:text-pink-700 mb-8 inline-block">
          ← Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product images */}
          <div>
            {product.images && product.images[0] && (
              <div className="relative h-96 bg-pink-50 rounded-lg overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {product.images.slice(1).map((img, idx) => (
                  <div key={idx} className="relative h-20 bg-pink-50 rounded">
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold text-pink-900">{product.name}</h1>
                {product.is_digital && (
                  <span className="text-xs bg-pink-100 text-pink-900 px-3 py-1 rounded">Digital Product</span>
                )}
              </div>
              <p className="text-pink-700 text-lg mb-4">{product.category}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.round(parseFloat(averageRating as string)) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({reviews.length} reviews)</span>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>

            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="font-semibold text-pink-900 mb-3">Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-pink-600">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-pink-50 p-6 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Price</p>
              <p className="text-4xl font-bold text-pink-900 mb-6">${product.price.toFixed(2)}</p>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Quantity</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 border border-pink-300 rounded hover:bg-pink-100"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="flex-1 px-4 py-2 border border-pink-300 rounded text-center"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 border border-pink-300 rounded hover:bg-pink-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  disabled={addingToCart}
                  className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:from-pink-700 hover:to-rose-700 py-6 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  {addingToCart ? 'Adding to cart...' : 'Add to Cart'}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews section */}
        {reviews.length > 0 && (
          <div className="mt-16 border-t border-pink-200 pt-12">
            <h2 className="text-2xl font-bold text-pink-900 mb-6">Customer Reviews</h2>
            <div className="grid gap-6">
              {reviews.map(review => (
                <Card key={review.id} className="border-pink-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-pink-900">{review.title}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {review.profiles?.full_name || 'Anonymous'}
                        </CardDescription>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{review.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
