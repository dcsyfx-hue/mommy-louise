'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [supabase, setSupabase] = useState<any>(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const sb = createClient()
    setSupabase(sb)
    checkUserSession(sb)
  }, [])

  const checkUserSession = async (sb: any) => {
    const { data: { session } } = await sb.auth.getSession()
    if (!session) {
      router.push('/auth/login')
    } else {
      setUser(session.user)
    }
    setLoading(false)
  }

  const handleSignOut = async () => {
    if (supabase) {
      await supabase.auth.signOut()
      router.push('/')
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-pink-50 border-r border-pink-100 p-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-pink-900">Mommy Louise</h2>
          <p className="text-sm text-pink-700">Budget Hub</p>
        </div>

        <nav className="space-y-2">
          <Link href="/dashboard" className="block px-4 py-2 rounded-lg bg-pink-200 text-pink-900 font-medium">
            Dashboard
          </Link>
          <Link href="/dashboard/orders" className="block px-4 py-2 rounded-lg text-pink-700 hover:bg-pink-100">
            My Orders
          </Link>
          <Link href="/dashboard/cart" className="block px-4 py-2 rounded-lg text-pink-700 hover:bg-pink-100">
            Shopping Cart
          </Link>
          <Link href="/dashboard/downloads" className="block px-4 py-2 rounded-lg text-pink-700 hover:bg-pink-100">
            Downloads
          </Link>
          <Link href="/dashboard/loyalty" className="block px-4 py-2 rounded-lg text-pink-700 hover:bg-pink-100">
            Loyalty Points
          </Link>
          <Link href="/dashboard/profile" className="block px-4 py-2 rounded-lg text-pink-700 hover:bg-pink-100">
            My Profile
          </Link>
        </nav>

        <div className="mt-8 pt-8 border-t border-pink-200">
          <Button 
            onClick={handleSignOut}
            variant="outline"
            className="w-full border-pink-300 text-pink-900 hover:bg-pink-100"
          >
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
