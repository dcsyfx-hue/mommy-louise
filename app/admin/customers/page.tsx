'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Mail, Calendar } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function CustomersPage() {
  const [customers, setCustomers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    fetchCustomers()
  }, [])

  const fetchCustomers = async () => {
    try {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })
      setCustomers(data || [])
    } catch (error) {
      console.error('Error fetching customers:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Customers</h1>
        <p className="text-slate-400 mt-2">View and manage customer accounts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-pink-600/20 p-3 rounded-lg">
                <Users className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Total Customers</p>
                <p className="text-2xl font-bold text-white">{customers.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          {loading ? (
            <div className="text-center text-slate-400">Loading...</div>
          ) : customers.length === 0 ? (
            <div className="text-center py-8 text-slate-400">No customers yet</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-700">
                  <tr className="text-slate-300">
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Email</th>
                    <th className="text-left py-3 px-4">Joined</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map(customer => (
                    <tr key={customer.id} className="border-b border-slate-800 hover:bg-slate-800 transition-colors">
                      <td className="py-3 px-4 text-white font-medium">{customer.full_name || 'N/A'}</td>
                      <td className="py-3 px-4 text-slate-300">{customer.email}</td>
                      <td className="py-3 px-4 text-slate-400">
                        {new Date(customer.created_at).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4">
                        <Button size="sm" variant="outline" className="border-slate-700 hover:bg-slate-700">
                          View Profile
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
