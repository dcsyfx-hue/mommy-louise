'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t-2 border-primary/20 py-12" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(236, 72, 153, 0.02) 10px, rgba(236, 72, 153, 0.02) 20px)', backgroundColor: 'rgba(255, 255, 255, 1)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              alt="Mommy Louise's Budget PH"
              width={50}
              height={50}
              src="/images/logo.png"
              className="rounded-full border-2 border-primary/30 object-cover"
            />
            <div>
              <span className="text-foreground block leading-tight font-sans">Mommy Louise's</span>
              <span className="text-xs text-primary font-medium tracking-wider uppercase">Budget PH</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center">© 2026 Mommy Louise&apos;s Budget PH</p>

          <div className="flex gap-6">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
