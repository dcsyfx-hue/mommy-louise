'use client'

import Link from 'next/link'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function GlobalNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Templates', href: '/templates' },
    { label: 'Challenges', href: '/challenges' },
    { label: 'Community', href: '/community/chat' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <header className="hidden md:block sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-primary">
            Mommy Louise
          </Link>
          
          <nav className="flex items-center gap-8 flex-1 mx-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-sm font-medium text-foreground/70 hover:text-primary">
              Sign in
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Button */}
      <div className="md:hidden sticky top-0 z-40 border-b border-border/40 bg-background/95 backdrop-blur px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-serif font-bold text-primary">
          ML
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-14 z-30 bg-background/95 backdrop-blur overflow-y-auto">
          <nav className="flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-foreground/70 hover:text-primary transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/auth/login"
              className="text-lg font-medium text-foreground/70 hover:text-primary transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
