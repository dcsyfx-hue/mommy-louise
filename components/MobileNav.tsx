'use client'

import Link from 'next/link'
import { Home, ShoppingCart, Users, User, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function MobileNav() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: 'Home', href: '/', active: pathname === '/' },
    { icon: ShoppingCart, label: 'Shop', href: '/shop', active: pathname.startsWith('/shop') },
    { icon: Users, label: 'Community', href: '/community/chat', active: pathname.startsWith('/community') },
    { icon: User, label: 'Account', href: '/dashboard', active: pathname.startsWith('/dashboard') },
  ]

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border/40 bg-background/95 backdrop-blur">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                item.active ? 'text-primary' : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
