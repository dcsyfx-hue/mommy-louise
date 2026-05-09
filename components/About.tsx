'use client'

import { Wallet, Heart, PiggyBank, TrendingUp } from 'lucide-react'

export default function About() {
  const features = [
    {
      title: 'Custom Budget Envelopes',
      description: 'Beautifully designed envelopes for every category - groceries, bills, savings, and more.',
      icon: Wallet,
      color: 'bg-pink-100 border-pink-300'
    },
    {
      title: 'Family-Focused Planning',
      description: 'Templates designed with busy moms in mind. Simple, practical, and easy to maintain.',
      icon: Heart,
      color: 'bg-rose-100 border-rose-300'
    },
    {
      title: 'Visual Savings Tracking',
      description: 'Watch your savings grow with satisfying visual trackers and progress charts.',
      icon: PiggyBank,
      color: 'bg-amber-100 border-amber-300'
    },
    {
      title: 'Financial Freedom',
      description: 'Build healthy money habits that lead to debt-free living and financial peace.',
      icon: TrendingUp,
      color: 'bg-emerald-100 border-emerald-300'
    }
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-card relative overflow-hidden">
      <div className="absolute top-10 right-10 opacity-10">
        <svg viewBox="0 0 60 50" className="w-24 h-24 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 25C30 25 15 15 10 20C5 25 10 35 15 35C20 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 45 15 50 20C55 25 50 35 45 35C40 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 25 35 27 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 35 35 33 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <circle cx="30" cy="25" r="3" fill="currentColor"></circle>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <svg viewBox="0 0 60 50" className="w-8 h-8 text-primary opacity-50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 25C30 25 15 15 10 20C5 25 10 35 15 35C20 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <path d="M30 25C30 25 45 15 50 20C55 25 50 35 45 35C40 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <path d="M30 25C30 25 25 35 27 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <path d="M30 25C30 25 35 35 33 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <circle cx="30" cy="25" r="3" fill="currentColor"></circle>
            </svg>
            <p className="text-primary font-medium">About The Method</p>
            <svg viewBox="0 0 60 50" className="w-8 h-8 text-primary opacity-50 scale-x-[-1]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 25C30 25 15 15 10 20C5 25 10 35 15 35C20 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <path d="M30 25C30 25 45 15 50 20C55 25 50 35 45 35C40 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <path d="M30 25C30 25 25 35 27 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <path d="M30 25C30 25 35 35 33 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <circle cx="30" cy="25" r="3" fill="currentColor"></circle>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-sans text-foreground mb-4 text-balance">Why Cash Stuffing Works</h2>
          <p className="text-muted-foreground leading-relaxed">Cash stuffing is a hands-on budgeting method where you allocate physical cash into labeled envelopes for different spending categories. It makes budgeting tangible, visual, and incredibly satisfying.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className={`rounded-2xl p-6 border-2 ${feature.color} transition-all group hover:shadow-lg`}>
                <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 rounded-3xl p-8 md:p-12 text-center border-2 border-primary/20 relative overflow-hidden" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(236, 72, 153, 0.02) 10px, rgba(236, 72, 153, 0.02) 20px)', backgroundColor: 'rgba(255, 255, 255, 1)' }}>
          <blockquote className="text-xl md:text-2xl font-serif text-foreground italic mb-4 text-balance">
            &quot;Wealth gained hastily will dwindle. But whoever gathers little by little will increase it.&quot;
          </blockquote>
          <cite className="text-primary font-medium">— Proverbs 13:11</cite>
        </div>
      </div>
    </section>
  )
}
