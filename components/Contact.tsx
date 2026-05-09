'use client'

import { Send } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-card relative overflow-hidden" style={{ backgroundColor: 'rgba(255, 214, 214, 1)' }}>
      <div className="absolute top-20 left-10 opacity-10">
        <svg viewBox="0 0 60 50" className="w-16 h-16 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 25C30 25 15 15 10 20C5 25 10 35 15 35C20 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 45 15 50 20C55 25 50 35 45 35C40 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 25 35 27 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 35 35 33 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <circle cx="30" cy="25" r="3" fill="currentColor"></circle>
        </svg>
      </div>

      <div className="absolute bottom-20 right-10 opacity-10 scale-x-[-1]">
        <svg viewBox="0 0 60 50" className="w-20 h-20 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 25C30 25 15 15 10 20C5 25 10 35 15 35C20 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 45 15 50 20C55 25 50 35 45 35C40 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 25 35 27 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M30 25C30 25 35 35 33 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <circle cx="30" cy="25" r="3" fill="currentColor"></circle>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <svg viewBox="0 0 60 50" className="w-8 h-8 text-primary opacity-50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 25C30 25 15 15 10 20C5 25 10 35 15 35C20 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
                <path d="M30 25C30 25 45 15 50 20C55 25 50 35 45 35C40 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
                <path d="M30 25C30 25 25 35 27 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
                <path d="M30 25C30 25 35 35 33 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
                <circle cx="30" cy="25" r="3" fill="currentColor"></circle>
              </svg>
              <p className="text-primary font-medium">Get Started</p>
              <svg viewBox="0 0 60 50" className="w-8 h-8 text-primary opacity-50 scale-x-[-1]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 25C30 25 15 15 10 20C5 25 10 35 15 35C20 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
                <path d="M30 25C30 25 45 15 50 20C55 25 50 35 45 35C40 35 30 25 30 25Z" stroke="currentColor" strokeWidth="2" fill="none"></path>
                <path d="M30 25C30 25 25 35 27 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
                <path d="M30 25C30 25 35 35 33 45" stroke="currentColor" strokeWidth="2" fill="none"></path>
                <circle cx="30" cy="25" r="3" fill="currentColor"></circle>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-sans text-foreground mb-4 text-balance">Ready to Transform Your Finances?</h2>
            <p className="text-muted-foreground leading-relaxed">Let&apos;s create your personalized budget templates. Fill out the form below and I&apos;ll help you get started on your cash stuffing journey.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-6 md:p-8 border-2 border-primary/20 shadow-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Maria Santos"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border-2 border-primary/20 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all focus:scale-[1.01]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="maria@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border-2 border-primary/20 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all focus:scale-[1.01]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Tell me about your budget goals</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="I want to save for... My budget categories include..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-primary/20 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all focus:scale-[1.01]"
                />
              </div>

              <button
                type="submit"
                className="w-full h-10 px-6 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-all"
              >
                <Send className="h-4 w-4" />
                Start My Budget Journey
              </button>

              {submitted && (
                <div className="p-3 rounded-lg bg-green-100 border-2 border-green-300 text-green-800 text-sm">
                  Thank you! I&apos;ll be in touch soon with your personalized budget templates.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
