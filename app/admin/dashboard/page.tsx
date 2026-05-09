'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart, Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react'

export const dynamic = 'force-dynamic'

interface DashboardStats {
  totalOrders: number
  totalRevenue: number
  totalUsers: number
  totalProducts: number
  recentOrders: any[]
}

export default function AdminDashboard() {
  const [supabase, setSupabase] = useState<any>(null)
  const [stats, setStats] = useState<DashboardStats>({
    totalOrders: 0,
    totalRevenue: 0,
    totalUsers: 0,
    totalProducts: 0,
    recentOrders: [],
  })
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    // Initialize Supabase client only in browser
    const client = createClient()
    setSupabase(client)
    checkAdminAndFetchStats(client)
  }, [])

  const checkAdminAndFetchStats = async (client: any) => {
    try {
      const {
        data: { user },
      } = await client.auth.getUser()

      if (!user) {
        setLoading(false)
        return
      }

      // Check if user is admin (you'd implement this with a role check in real app)
      // For now, we'll allow all authenticated users to see admin dashboard
      setIsAdmin(true)

      // Fetch stats
      const [
        { data: ordersData },
        { data: usersData },
        { data: productsData },
        { data: recentOrdersData },
      ] = await Promise.all([
        client.from('orders').select('*', { count: 'exact' }),
        client.from('profiles').select('*', { count: 'exact' }),
        client.from('products').select('*', { count: 'exact' }),
        client
          .from('orders')
          .select('*, order_items(*)')
          .order('created_at', { ascending: false })
          .limit(5),
      ])

      const totalRevenue = (ordersData || []).reduce((sum: number, order: any) => sum + (order.total || 0), 0)

      setStats({
        totalOrders: ordersData?.length || 0,
        totalRevenue,
        totalUsers: usersData?.length || 0,
        totalProducts: productsData?.length || 0,
        recentOrders: recentOrdersData || [],
      })
    } catch (error) {
      console.error('Failed to fetch admin stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center">
        <Card className="border-pink-200 w-full max-w-md">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
            <p className="text-gray-600">You don&apos;t have permission to view this page</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your Mommy Louise store</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Orders */}
          <Card className="border-pink-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center justify-between">
                Total Orders
                <ShoppingCart size={20} className="text-pink-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-gray-900">{stats.totalOrders}</p>
              <p className="text-xs text-gray-500 mt-1">All time</p>
            </CardContent>
          </Card>

          {/* Total Revenue */}
          <Card className="border-pink-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center justify-between">
                Total Revenue
                <DollarSign size={20} className="text-green-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-gray-900">${(stats.totalRevenue / 100).toFixed(2)}</p>
              <p className="text-xs text-gray-500 mt-1">USD</p>
            </CardContent>
          </Card>

          {/* Total Users */}
          <Card className="border-pink-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center justify-between">
                Total Users
                <Users size={20} className="text-blue-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
              <p className="text-xs text-gray-500 mt-1">Registered</p>
            </CardContent>
          </Card>

          {/* Total Products */}
          <Card className="border-pink-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center justify-between">
                Products
                <BarChart size={20} className="text-purple-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-gray-900">{stats.totalProducts}</p>
              <p className="text-xs text-gray-500 mt-1">Active</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders */}
        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest transactions in your store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentOrders.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No orders yet</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b border-pink-200">
                      <tr>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Order #</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Items</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Total</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.recentOrders.map(order => (
                        <tr key={order.id} className="border-b border-pink-100 hover:bg-pink-50">
                          <td className="py-3 px-4 font-mono text-pink-600">{order.order_number?.slice(0, 8)}...</td>
                          <td className="py-3 px-4">{order.order_items?.length || 0}</td>
                          <td className="py-3 px-4 font-semibold">${(order.total / 100).toFixed(2)}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              order.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : order.status === 'pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-gray-100 text-gray-800'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-500">
                            {new Date(order.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Admin Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="text-lg">Products</CardTitle>
              <CardDescription>Manage your product catalog</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700">
                Manage Products
              </Button>
            </CardContent>
          </Card>

          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="text-lg">Orders</CardTitle>
              <CardDescription>View and manage all orders</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700">
                View Orders
              </Button>
            </CardContent>
          </Card>

          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="text-lg">Coupons</CardTitle>
              <CardDescription>Create discount codes</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700">
                Manage Coupons
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
