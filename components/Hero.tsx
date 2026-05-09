'use client'

import { Sparkles, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(236, 72, 153, 0.02) 10px, rgba(236, 72, 153, 0.02) 20px)' }}>
      <div className="absolute top-32 left-10 hidden lg:block opacity-20">
        <svg viewBox="0 0 60 50" className="w-16 h-16 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 25C30 25 15 15 10 20C5 25 10 35 15 35C20 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 45 15 50 20C55 25 50 35 45 35C40 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 25 35 27 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 35 35 33 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <circle cx="30" cy="25" r="3" fill="currentColor"></circle>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border-2 border-primary/20 shadow-sm mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Smart Money Mama Way</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight mb-6 text-balance">
              Take Control of Your Money with <span className="text-primary">Cash Stuffing</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Simple, visual, and satisfying. Learn how to budget with beautiful cash envelopes and watch your savings grow every single month.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full h-10 transition-all">
                <Sparkles className="h-4 w-4" />
                Start Your Journey
              </Link>
              <Link href="#portfolio" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-background shadow-xs hover:bg-accent/50 border-2 border-primary/30 text-foreground px-6 rounded-full h-10 transition-all">
                View Templates
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Happy Families</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Template Designs</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary">5 Star</p>
                <p className="text-sm text-muted-foreground">Client Reviews</p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 scale-110" style={{ transform: 'rotate(50deg)' }}></div>
              <Image
                alt="Mommy Louise's Budget PH"
                width={400}
                height={400}
                src="/images/logo.png"
                className="relative z-10 rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
