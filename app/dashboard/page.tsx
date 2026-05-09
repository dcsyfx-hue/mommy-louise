'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export const dynamic = 'force-dynamic'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Dashboard() {
  const [profile, setProfile] = useState(null)
  const [stats, setStats] = useState({ orders: 0, spent: 0, points: 0 })
  const supabase = createClient()

  useEffect(() => {
    const loadDashboard = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        // Get profile
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()
        
        setProfile(profileData)

        // Get order stats
        const { data: ordersData, count: orderCount } = await supabase
          .from('orders')
          .select('total', { count: 'exact' })
          .eq('user_id', user.id)

        const totalSpent = ordersData?.reduce((sum, order) => sum + parseFloat(order.total), 0) || 0

        // Get loyalty points
        const { data: loyaltyData } = await supabase
          .from('loyalty_points')
          .select('available_points')
          .eq('user_id', user.id)
          .single()

        setStats({
          orders: orderCount || 0,
          spent: totalSpent,
          points: loyaltyData?.available_points || 0
        })
      }
    }

    loadDashboard()
  }, [supabase])

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-pink-900">Welcome back, {profile?.full_name || 'Friend'}!</h1>
        <p className="text-pink-700 mt-2">Manage your budget templates and track your progress</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-pink-200 bg-pink-50">
          <CardHeader>
            <CardTitle className="text-pink-900">Total Orders</CardTitle>
            <CardDescription className="text-pink-700">Purchases made</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-pink-900">{stats.orders}</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200 bg-pink-50">
          <CardHeader>
            <CardTitle className="text-pink-900">Amount Spent</CardTitle>
            <CardDescription className="text-pink-700">Total investment</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-pink-900">${stats.spent.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200 bg-pink-50">
          <CardHeader>
            <CardTitle className="text-pink-900">Loyalty Points</CardTitle>
            <CardDescription className="text-pink-700">Available to redeem</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-pink-900">{stats.points}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
