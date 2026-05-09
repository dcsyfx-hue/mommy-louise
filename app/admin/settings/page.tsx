'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Settings as SettingsIcon, Bell, Lock, Globe } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    storeName: 'Mommy Louise',
    email: 'admin@mommylouise.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, City, State 12345',
    currency: 'USD',
    taxRate: 8.5,
    shippingCost: 10.00,
  })

  const handleSave = () => {
    alert('Settings saved successfully!')
  }

  return (
    <div className="p-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-slate-400 mt-2">Manage admin panel and store settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
        {/* Sidebar */}
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors text-left">
            <SettingsIcon className="w-5 h-5" />
            General
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 transition-colors text-left">
            <Bell className="w-5 h-5" />
            Notifications
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 transition-colors text-left">
            <Lock className="w-5 h-5" />
            Security
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 transition-colors text-left">
            <Globe className="w-5 h-5" />
            Store Config
          </button>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Settings */}
          <Card className="border-slate-800 bg-slate-900">
            <CardHeader>
              <CardTitle className="text-white">General Settings</CardTitle>
              <CardDescription>Update your store information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Store Name</label>
                <Input
                  value={settings.storeName}
                  onChange={(e) => setSettings({...settings, storeName: e.target.value})}
                  className="mt-2 bg-slate-800 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Email</label>
                <Input
                  value={settings.email}
                  onChange={(e) => setSettings({...settings, email: e.target.value})}
                  className="mt-2 bg-slate-800 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Phone</label>
                <Input
                  value={settings.phone}
                  onChange={(e) => setSettings({...settings, phone: e.target.value})}
                  className="mt-2 bg-slate-800 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Address</label>
                <Input
                  value={settings.address}
                  onChange={(e) => setSettings({...settings, address: e.target.value})}
                  className="mt-2 bg-slate-800 border-slate-700 text-white"
                />
              </div>
            </CardContent>
          </Card>

          {/* Store Configuration */}
          <Card className="border-slate-800 bg-slate-900">
            <CardHeader>
              <CardTitle className="text-white">Store Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-300">Currency</label>
                  <Input
                    value={settings.currency}
                    onChange={(e) => setSettings({...settings, currency: e.target.value})}
                    className="mt-2 bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300">Tax Rate (%)</label>
                  <Input
                    type="number"
                    value={settings.taxRate}
                    onChange={(e) => setSettings({...settings, taxRate: parseFloat(e.target.value)})}
                    className="mt-2 bg-slate-800 border-slate-700 text-white"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Shipping Cost</label>
                <Input
                  type="number"
                  value={settings.shippingCost}
                  onChange={(e) => setSettings({...settings, shippingCost: parseFloat(e.target.value)})}
                  className="mt-2 bg-slate-800 border-slate-700 text-white"
                />
              </div>
            </CardContent>
          </Card>

          <Button
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}
