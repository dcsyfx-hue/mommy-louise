'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
      scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm' : 'bg-transparent'
    )}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16 sm:w-12 sm:h-12">
              <Image
                src="/images/logo.png"
                alt="Mommy Louise's Budget PH"
                fill
                className="rounded-full border-2 border-primary/30 object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-lg text-foreground block leading-tight">Mommy Louise's</span>
              <span className="text-xs text-primary font-medium tracking-wider uppercase">Budget PH</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</Link>
            <Link href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Templates</Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            <Link href="#contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 h-9 transition-all">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link href="#about" className="block text-muted-foreground hover:text-primary transition-colors px-4 py-2">About</Link>
            <Link href="#how-it-works" className="block text-muted-foreground hover:text-primary transition-colors px-4 py-2">How It Works</Link>
            <Link href="#portfolio" className="block text-muted-foreground hover:text-primary transition-colors px-4 py-2">Templates</Link>
            <Link href="#contact" className="block text-muted-foreground hover:text-primary transition-colors px-4 py-2">Contact</Link>
            <Link href="#contact" className="block text-center text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 transition-all">
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
