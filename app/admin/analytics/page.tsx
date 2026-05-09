'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3, LineChart, TrendingUp } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Analytics</h1>
        <p className="text-slate-400 mt-2">View sales and traffic analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-600/20 p-3 rounded-lg">
                <BarChart3 className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Total Sales</p>
                <p className="text-2xl font-bold text-white">$12,540</p>
                <p className="text-xs text-green-400 mt-1">+12% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <LineChart className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Total Traffic</p>
                <p className="text-2xl font-bold text-white">8,420</p>
                <p className="text-xs text-blue-400 mt-1">+5% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-purple-600/20 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Conversion Rate</p>
                <p className="text-2xl font-bold text-white">3.2%</p>
                <p className="text-xs text-purple-400 mt-1">+0.3% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader>
          <CardTitle className="text-white">Sales Overview</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-64 flex items-center justify-center text-slate-400">
            Chart placeholder - integrate Recharts for analytics
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
