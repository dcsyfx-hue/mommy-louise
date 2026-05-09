'use client'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Categories',
      description: 'Select the budget categories that fit your family\'s needs - groceries, utilities, savings, self-care, and more.'
    },
    {
      number: '02',
      title: 'Get Your Templates',
      description: 'Receive beautifully designed, personalized budget envelopes and trackers tailored to your specific categories.'
    },
    {
      number: '03',
      title: 'Stuff Your Cash',
      description: 'When you receive your income, divide it into your labeled envelopes. Each envelope holds cash for its designated purpose.'
    },
    {
      number: '04',
      title: 'Watch Your Savings Grow',
      description: 'Track your progress, celebrate wins, and watch your financial goals become reality month after month.'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background relative overflow-hidden">
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
            <p className="text-primary font-medium">The Process</p>
            <svg viewBox="0 0 60 50" className="w-8 h-8 text-primary opacity-50 scale-x-[-1]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 25C30 25 15 15 10 20C5 25 10 35 15 35C20 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <path d="M30 25C30 25 45 15 50 20C55 25 50 35 45 35C40 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <path d="M30 25C30 25 25 35 27 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <path d="M30 25C30 25 35 35 33 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
              <circle cx="30" cy="25" r="3" fill="currentColor"></circle>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-sans text-foreground mb-4 text-balance">How Cash Stuffing Works</h2>
          <p className="text-muted-foreground leading-relaxed">A simple four-step process to transform your relationship with money and build lasting financial habits for your family.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10 -translate-x-4 origin-left"></div>
              )}
              <div className="relative bg-card rounded-2xl p-6 border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <span className="text-5xl font-bold text-primary/20 inline-block">{step.number}</span>
                <h3 className="font-semibold text-foreground text-lg mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
