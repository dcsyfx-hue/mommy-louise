'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import AdminSidebar from '@/components/AdminSidebar'

export const dynamic = 'force-dynamic'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [supabase, setSupabase] = useState<any>(null)

  useEffect(() => {
    const sb = createClient()
    setSupabase(sb)
    checkAdminAccess(sb)
  }, [])

  const checkAdminAccess = async (sb: any) => {
    try {
      const { data: { user } } = await sb.auth.getUser()

      if (!user) {
        router.push('/admin/login')
        return
      }

      // Fetch user's admin role
      const { data: profile, error } = await sb
        .from('profiles')
        .select('admin_role')
        .eq('id', user.id)
        .single()

      if (error || !profile?.admin_role) {
        router.push('/admin/login?error=no_access')
        return
      }

      if (!['super_admin', 'admin'].includes(profile.admin_role)) {
        router.push('/admin/login?error=no_access')
        return
      }

      setIsAuthorized(true)
    } catch (error) {
      console.error('Auth check failed:', error)
      router.push('/admin/login')
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    if (supabase) {
      await supabase.auth.signOut()
    }
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-foreground/60">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthorized) {
    return null
  }

  // Don't show sidebar on login page
  if (pathname === '/admin/login') {
    return children
  }

  return (
    <div className="flex h-screen bg-slate-950">
      <AdminSidebar onSignOut={handleSignOut} />
      <main className="flex-1 overflow-auto bg-slate-950">
        {children}
      </main>
    </div>
  )
}
