'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Users, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            About Mommy Louise
          </h1>
          <p className="text-xl text-foreground/60 max-w-3xl">
            We believe every mom deserves control over their finances and the confidence to make empowered decisions about money.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-lg text-foreground/60 mb-4">
              Mommy Louise started as a simple idea: create beautiful, easy-to-use budgeting templates for busy moms.
            </p>
            <p className="text-lg text-foreground/60 mb-4">
              What began as a personal project quickly grew into a movement. Today, thousands of women are transforming their finances using our templates and supporting each other in our community.
            </p>
            <p className="text-lg text-foreground/60">
              We&apos;re passionate about making financial planning accessible, beautiful, and fun for everyone.
            </p>
          </div>
          <div className="h-80 bg-gradient-to-br from-pink-200 to-orange-100 rounded-3xl"></div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <Heart className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Empowerment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/60">
                We empower moms to take control of their finances and build the life they deserve.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/60">
                Our community is the heart of Mommy Louise. Together, we achieve more.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lightbulb className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/60">
                We continuously innovate to bring you the best tools for budgeting success.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join the Mommy Louise Family
          </h2>
          <p className="text-lg text-foreground/60 mb-6">
            Start your financial journey today and discover what&apos;s possible.
          </p>
          <Link href="/auth/sign-up">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
