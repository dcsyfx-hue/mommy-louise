'use client'

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'The budget envelopes changed how our family handles money. We actually have savings now! The designs are so beautiful that I actually enjoy budgeting.',
      author: 'Maria S.',
      role: 'Mom of 3'
    },
    {
      quote: 'Finally, a budgeting system that works for busy moms. The templates are practical and the cash stuffing method keeps me accountable.',
      author: 'Ana R.',
      role: 'Working Mom'
    },
    {
      quote: 'I never thought budgeting could be this satisfying! Watching my envelopes fill up each month gives me so much motivation to keep going.',
      author: 'Grace L.',
      role: 'First-time Budgeter'
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-card relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-10">
        <svg viewBox="0 0 60 50" className="w-20 h-20 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 25C30 25 15 15 10 20C5 25 10 35 15 35C20 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 45 15 50 20C55 25 50 35 45 35C40 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 25 35 27 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 35 35 33 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <circle cx="30" cy="25" r="3" fill="currentColor"></circle>
        </svg>
      </div>

      <div className="absolute bottom-10 right-10 opacity-10 scale-x-[-1]">
        <svg viewBox="0 0 60 50" className="w-16 h-16 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <p className="text-primary font-medium">Testimonials</p>
            <svg viewBox="0 0 60 50" className="w-8 h-8 text-primary opacity-50 scale-x-[-1]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 25C30 25 15 15 10 20C5 25 10 35 15 35C20 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <path d="M30 25C30 25 45 15 50 20C55 25 50 35 45 35C40 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <path d="M30 25C30 25 25 35 27 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <path d="M30 25C30 25 35 35 33 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <circle cx="30" cy="25" r="3" fill="currentColor"></circle>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-sans text-foreground mb-4 text-balance">What Moms Are Saying</h2>
          <p className="text-muted-foreground leading-relaxed">Join hundreds of families who have transformed their finances with beautiful, personalized budget templates.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-2xl p-6 border-2 border-primary/10 hover:border-primary/30 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
