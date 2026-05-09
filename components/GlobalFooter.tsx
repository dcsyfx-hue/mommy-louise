'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Facebook, Instagram, Twitter, Lock } from 'lucide-react'

export default function GlobalFooter() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Shift + A to open admin
      if (e.shiftKey && e.key === 'A') {
        e.preventDefault()
        router.push('/admin/login')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [router])
  return (
    <footer className="border-t border-border/40 bg-muted/30 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-serif font-bold text-primary mb-4">Mommy Louise</h3>
            <p className="text-sm text-foreground/70">Transform your finances with beautiful cash stuffing templates and community support.</p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/shop" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/templates" className="hover:text-primary transition-colors">Templates</Link></li>
              <li><Link href="/shop?type=digital" className="hover:text-primary transition-colors">Digital Products</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/community/chat" className="hover:text-primary transition-colors">Chat</Link></li>
              <li><Link href="/challenges" className="hover:text-primary transition-colors">Challenges</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">&copy; 2024 Mommy Louise. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            {/* Hidden Admin Button */}
            <button
              onClick={() => router.push('/admin/login')}
              className="p-2 rounded-full hover:bg-muted transition-colors opacity-30 hover:opacity-70"
              title="Admin Access (Shift+A)"
              aria-label="Admin Access"
            >
              <Lock size={18} className="text-primary" />
            </button>

            <Link href="https://instagram.com" className="text-foreground/60 hover:text-primary transition-colors">
              <Instagram size={18} />
            </Link>
            <Link href="https://facebook.com" className="text-foreground/60 hover:text-primary transition-colors">
              <Facebook size={18} />
            </Link>
            <Link href="https://twitter.com" className="text-foreground/60 hover:text-primary transition-colors">
              <Twitter size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
