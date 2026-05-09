'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'What is cash stuffing?',
      a: 'Cash stuffing is a budgeting method where you divide your income into envelopes based on spending categories. It helps you track spending, avoid overspending, and stay accountable to your budget.'
    },
    {
      q: 'How do I get started?',
      a: 'Start by creating an account, choosing a template that fits your needs, and following the step-by-step guide. Our community is here to help you along the way!'
    },
    {
      q: 'Are the templates digital or printable?',
      a: 'Our templates are available in both digital and printable formats. You can download, print, or use them digitally on your devices.'
    },
    {
      q: 'Can I customize the templates?',
      a: 'Absolutely! All our templates come in editable formats. Feel free to customize them to match your personal preferences and budget categories.'
    },
    {
      q: 'Is there a community I can join?',
      a: 'Yes! We have an active community with daily challenges, support groups, and members sharing their success stories. Join for free when you create an account.'
    },
    {
      q: 'Do you offer refunds?',
      a: 'We offer a 30-day money-back guarantee on all templates if you\'re not satisfied. No questions asked.'
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-12">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-foreground/60">
            Have questions? We\'ve got answers. Check out our FAQ below.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="cursor-pointer" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                </CardTitle>
              </CardHeader>
              {openIndex === index && (
                <CardContent className="text-foreground/70">
                  {faq.a}
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h2>
          <p className="text-foreground/60 mb-6">
            Our support team is here to help. Reach out to us anytime.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
