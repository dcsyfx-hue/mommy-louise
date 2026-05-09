'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export default function TemplatesPage() {
  const templates = [
    { id: 1, name: 'Monthly Budget Planner', price: '$9.99', category: 'Budget' },
    { id: 2, name: '52-Week Savings Challenge', price: 'Free', category: 'Challenge' },
    { id: 3, name: 'Debt Payoff Tracker', price: '$4.99', category: 'Tracking' },
    { id: 4, name: 'Family Budget Sheet', price: '$12.99', category: 'Family' },
    { id: 5, name: 'Grocery Budget Planner', price: '$6.99', category: 'Groceries' },
    { id: 6, name: 'Savings Goal Tracker', price: 'Free', category: 'Tracking' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-12">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Budget Templates
          </h1>
          <p className="text-xl text-foreground/60">
            Choose from our collection of beautifully designed templates to start your budgeting journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gradient-to-br from-pink-200 to-orange-100"></div>
              <CardHeader>
                <CardTitle className="text-lg">{template.name}</CardTitle>
                <CardDescription>{template.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">{template.price}</span>
                  <Link href={`/shop?template=${template.id}`}>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <Plus className="w-4 h-4 mr-1" />
                      Get Template
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need Custom Templates?</h2>
          <p className="text-lg text-foreground/60 mb-6">
            Join our community to request custom templates and get feedback from other members.
          </p>
          <Link href="/community/chat">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Join the Community
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
