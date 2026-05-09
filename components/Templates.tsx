'use client'

import { Check } from 'lucide-react'

export default function Templates() {
  const templates = [
    {
      family: 'The Reyes Family',
      title: 'Family Budget Essentials',
      description: 'Complete household budget with out-of-town trips, insurance, utilities, and emergency fund tracking.',
      categories: ['Out of Town Trips', 'Insurance', 'Electric Bill', 'Water Bill', 'Mortgage'],
      color: 'bg-pink-100 border-pink-300'
    },
    {
      family: 'Cary Budget',
      title: 'Monthly Household Budget',
      description: 'Comprehensive monthly planning with groceries, utilities, transportation, and self-care categories.',
      categories: ['Market', 'Groceries', 'Transportation', 'Utilities', 'LPG'],
      color: 'bg-rose-100 border-rose-300'
    },
    {
      family: 'GLY Budget',
      title: 'Simple Savings Tracker',
      description: 'Focused budget template with essentials and dedicated savings and self-care allocations.',
      categories: ['Groceries', 'Food/Palengke', 'Shopping', 'Snacks/Eating Out', 'Buffer'],
      color: 'bg-amber-100 border-amber-300'
    },
    {
      family: 'Bethel Budget',
      title: 'Priority-Based Budget',
      description: 'High and low priority system for smart allocation with giving, health care, and education tracking.',
      categories: ['Groceries', 'Household Salaries', 'School Allowance', 'Giving/Tithing', 'Education'],
      color: 'bg-emerald-100 border-emerald-300'
    },
    {
      family: 'Sheryl Budget',
      title: 'Complete Family Planner',
      description: 'Full family budget with spouse allowances, market expenses, and dedicated savings "piggies".',
      categories: ['LPG', 'Hubby Allowance', 'Market', 'Groceries', 'Eat-out/Snacks'],
      color: 'bg-sky-100 border-sky-300'
    },
    {
      family: 'Dhez Budget',
      title: 'Essential Monthly Budget',
      description: 'Streamlined household budget focusing on everyday essentials and smart savings habits.',
      categories: ['Mineral Water', 'Insurance', 'Electric Bill', 'Water Bill', 'Mortgage'],
      color: 'bg-violet-100 border-violet-300'
    }
  ]

  return (
    <section id="portfolio" className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(236, 72, 153, 0.02) 10px, rgba(236, 72, 153, 0.02) 20px)' }}>
      <div className="absolute top-20 right-10 opacity-10">
        <svg viewBox="0 0 60 50" className="w-24 h-24 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 25C30 25 15 15 10 20C5 25 10 35 15 35C20 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 45 15 50 20C55 25 50 35 45 35C40 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 25 35 27 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 35 35 33 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <circle cx="30" cy="25" r="3" fill="currentColor"></circle>
        </svg>
      </div>

      <div className="absolute bottom-20 left-10 opacity-10 scale-x-[-1]">
        <svg viewBox="0 0 60 50" className="w-20 h-20 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <p className="text-primary font-medium">Sample Designs</p>
            <svg viewBox="0 0 60 50" className="w-8 h-8 text-primary opacity-50 scale-x-[-1]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 25C30 25 15 15 10 20C5 25 10 35 15 35C20 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <path d="M30 25C30 25 45 15 50 20C55 25 50 35 45 35C40 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <path d="M30 25C30 25 25 35 27 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <path d="M30 25C30 25 35 35 33 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <circle cx="30" cy="25" r="3" fill="currentColor"></circle>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-sans text-foreground mb-4 text-balance">Custom Budget Templates</h2>
          <p className="text-muted-foreground leading-relaxed">Every family is unique, and so are their budgets. Here are some examples of personalized budget templates created for real families.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <div key={index} className={`rounded-2xl border-2 ${template.color} p-6 transition-all duration-300 hover:shadow-lg cursor-pointer`}>
              <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{template.family}</span>
                <h3 className="font-semibold text-foreground text-lg mt-1">{template.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{template.description}</p>
              <div className="space-y-2">
                <p className="text-xs font-medium text-foreground uppercase tracking-wider">Categories included:</p>
                <div className="flex flex-wrap gap-1.5">
                  {template.categories.map((category, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1 text-xs bg-card/80 text-foreground px-2 py-1 rounded-full">
                      <Check className="h-3 w-3 text-primary" />
                      {category}
                    </span>
                  ))}
                  <span className="text-xs text-muted-foreground px-2 py-1">
                    +3 more
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
