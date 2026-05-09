'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Edit2, Trash2, Zap } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function CouponsPage() {
  const [coupons, setCoupons] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    fetchCoupons()
  }, [])

  const fetchCoupons = async () => {
    try {
      const { data } = await supabase.from('coupons').select('*').order('created_at', { ascending: false })
      setCoupons(data || [])
    } catch (error) {
      console.error('Error fetching coupons:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Coupons & Discounts</h1>
          <p className="text-slate-400 mt-2">Create and manage discount codes</p>
        </div>
        <Button className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Coupon
        </Button>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          {loading ? (
            <div className="text-center text-slate-400">Loading...</div>
          ) : coupons.length === 0 ? (
            <div className="text-center py-8 text-slate-400">No coupons yet</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-700">
                  <tr className="text-slate-300">
                    <th className="text-left py-3 px-4">Code</th>
                    <th className="text-left py-3 px-4">Type</th>
                    <th className="text-left py-3 px-4">Value</th>
                    <th className="text-left py-3 px-4">Usage</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {coupons.map(coupon => (
                    <tr key={coupon.id} className="border-b border-slate-800 hover:bg-slate-800 transition-colors">
                      <td className="py-3 px-4 text-white font-mono font-bold">{coupon.code}</td>
                      <td className="py-3 px-4 text-slate-300 capitalize">{coupon.discount_type}</td>
                      <td className="py-3 px-4 text-white">
                        {coupon.discount_type === 'percentage' ? `${coupon.discount_value}%` : `$${coupon.discount_value}`}
                      </td>
                      <td className="py-3 px-4 text-slate-400">{coupon.used_count}/{coupon.max_uses}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          coupon.is_active ? 'bg-green-500/20 text-green-400' : 'bg-slate-500/20 text-slate-400'
                        }`}>
                          {coupon.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="py-3 px-4 flex items-center gap-2">
                        <Button size="sm" variant="outline" className="border-slate-700 hover:bg-slate-700">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-slate-700 hover:bg-red-900">
                          <Trash2 className="w-4 h-4 text-red-400" />
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
