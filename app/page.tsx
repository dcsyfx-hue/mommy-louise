'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingBag, Users, BookOpen, Award, ArrowRight } from 'lucide-react'

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Budget Planner Pro',
      price: '$29.99',
      image: 'bg-gradient-to-br from-pink-300 to-pink-100',
      description: 'Complete monthly cash stuffing planner'
    },
    {
      id: 2,
      name: 'Savings Challenge Kit',
      price: '$19.99',
      image: 'bg-gradient-to-br from-rose-300 to-pink-100',
      description: '52-week savings challenge tracker'
    },
    {
      id: 3,
      name: 'Digital Templates Bundle',
      price: '$14.99',
      image: 'bg-gradient-to-br from-pink-200 to-orange-100',
      description: 'Downloadable budget templates'
    },
  ]

  const communityRooms = [
    { name: 'General Chat', desc: '5.2k members', href: '/community/chat' },
    { name: 'Daily Challenges', desc: 'Join ongoing challenges', href: '/challenges' },
    { name: 'Success Stories', desc: '1.8k members', href: '/community/chat' },
    { name: 'Tips & Tricks', desc: 'Learn from the community', href: '/community/chat' },
  ]

  const blogPosts = [
    { title: 'How to Start Cash Stuffing', slug: 'cash-stuffing-guide', date: 'Jan 15' },
    { title: '5 Money-Saving Hacks for Busy Moms', slug: 'money-saving-hacks', date: 'Jan 12' },
    { title: 'Build Your First Emergency Fund', slug: 'emergency-fund', date: 'Jan 10' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                  Master Your Money with <span className="text-primary">Beautiful Design</span>
                </h1>
                <p className="text-xl text-foreground/70">
                  Join thousands of busy moms who transformed their finances with our cash stuffing templates and supportive community.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                    Shop Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/auth/sign-up">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Join Community
                  </Button>
                </Link>
              </div>

              <div className="flex gap-8 pt-6">
                <div>
                  <p className="text-2xl font-bold text-primary">5.2k+</p>
                  <p className="text-sm text-foreground/60">Active Members</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">200+</p>
                  <p className="text-sm text-foreground/60">Templates</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">$2M+</p>
                  <p className="text-sm text-foreground/60">Saved Together</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-pink-200 to-orange-100 rounded-3xl h-full flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <ShoppingBag className="w-24 h-24 text-primary/40 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-foreground/60">Your Financial Journey Starts Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              <ShoppingBag className="w-8 h-8 inline text-primary mr-3" />
              Featured Products
            </h2>
            <p className="text-lg text-foreground/60">Handpicked templates to transform your budgeting</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-48 ${product.image}`}></div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Link href={`/shop/${product.id}`}>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        View
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/shop">
              <Button variant="outline" size="lg">
                Browse All Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              <Users className="w-8 h-8 inline text-primary mr-3" />
              Join Our Community
            </h2>
            <p className="text-lg text-foreground/60">Connect, share, and grow with thousands of like-minded moms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {communityRooms.map((room, idx) => (
              <Link key={idx} href={room.href}>
                <Card className="cursor-pointer hover:shadow-lg transition-all hover:border-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      {room.name}
                    </CardTitle>
                    <CardDescription>{room.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Real Stories from Real Members</h3>
            <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
              &quot;Mommy Louise helped me save $5,000 in just 6 months. The community keeps me motivated!&quot;
            </p>
            <Link href="/community/chat">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              <BookOpen className="w-8 h-8 inline text-primary mr-3" />
              Latest Articles
            </h2>
            <p className="text-lg text-foreground/60">Learn budgeting tips from financial experts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {blogPosts.map((post, idx) => (
              <Link key={idx} href={`/blog/${post.slug}`}>
                <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow hover:border-primary">
                  <div className="h-32 bg-gradient-to-br from-pink-200 to-orange-100"></div>
                  <CardHeader>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/60">Read the full article →</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                Read All Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                <CardTitle>Premium Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/60">Access our complete library of professionally designed budget templates.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
                <CardTitle>Supportive Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/60">Connect with thousands of moms on their financial journey.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/60">Join the movement and start saving today.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Ready to Transform Your Finances?
            </h2>
            <Link href="/auth/sign-up">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
