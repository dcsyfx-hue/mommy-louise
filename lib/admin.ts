import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export const ADMIN_ROLES = ['super_admin', 'admin']
export const MODERATOR_ROLES = ['super_admin', 'admin', 'moderator']

export async function getAdminRole() {
  try {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          },
        },
      }
    )

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    // Fetch admin role from profiles table
    const { data: profile } = await supabase
      .from('profiles')
      .select('admin_role')
      .eq('id', user.id)
      .single()

    return profile?.admin_role || null
  } catch (error) {
    console.error('Error fetching admin role:', error)
    return null
  }
}

export async function isAdmin() {
  const role = await getAdminRole()
  return ADMIN_ROLES.includes(role)
}

export async function isModerator() {
  const role = await getAdminRole()
  return MODERATOR_ROLES.includes(role)
}
