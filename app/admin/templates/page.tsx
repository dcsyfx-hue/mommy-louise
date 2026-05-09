'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Edit2, Trash2, Download } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    fetchTemplates()
  }, [])

  const fetchTemplates = async () => {
    try {
      const { data } = await supabase.from('products').select('*').eq('is_digital', true).order('created_at', { ascending: false })
      setTemplates(data || [])
    } catch (error) {
      console.error('Error fetching templates:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Digital Templates</h1>
          <p className="text-slate-400 mt-2">Manage PDF templates and resources</p>
        </div>
        <Button className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Template
        </Button>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          {loading ? (
            <div className="text-center text-slate-400">Loading...</div>
          ) : templates.length === 0 ? (
            <div className="text-center py-8 text-slate-400">No templates yet</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-700">
                  <tr className="text-slate-300">
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Type</th>
                    <th className="text-left py-3 px-4">Price</th>
                    <th className="text-left py-3 px-4">Downloads</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {templates.map(template => (
                    <tr key={template.id} className="border-b border-slate-800 hover:bg-slate-800 transition-colors">
                      <td className="py-3 px-4 text-white font-medium">{template.name}</td>
                      <td className="py-3 px-4 text-slate-300">PDF Bundle</td>
                      <td className="py-3 px-4 text-white">${(template.price / 100).toFixed(2)}</td>
                      <td className="py-3 px-4 text-slate-400">0</td>
                      <td className="py-3 px-4 flex items-center gap-2">
                        <Button size="sm" variant="outline" className="border-slate-700 hover:bg-slate-700">
                          <Download className="w-4 h-4" />
                        </Button>
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
