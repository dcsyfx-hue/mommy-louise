'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function ShopPage() {
  const products = [
    { id: 1, name: 'Budget Planner Pro', price: 29.99, desc: 'Monthly budget template' },
    { id: 2, name: 'Savings Challenge', price: 19.99, desc: '52-week savings tracker' },
    { id: 3, name: 'Digital Templates', price: 14.99, desc: 'Printable templates' },
    { id: 4, name: 'Family Budget', price: 24.99, desc: 'Multi-person budgeting' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-12">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Shop Templates & Products
          </h1>
          <p className="text-xl text-foreground/60">
            Beautiful templates designed to help you take control of your finances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gradient-to-br from-pink-200 to-orange-100"></div>
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/60">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                  <Link href="/cart">
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to start your budgeting journey?
          </h2>
          <Link href="/auth/sign-up">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
