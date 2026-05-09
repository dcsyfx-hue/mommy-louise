'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trash2, Ban, MessageSquare } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function ChatModerationPage() {
  const [messages, setMessages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const { data } = await supabase
        .from('chat_messages')
        .select('*, profiles(full_name)')
        .order('created_at', { ascending: false })
        .limit(50)
      setMessages(data || [])
    } catch (error) {
      console.error('Error fetching messages:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Chat Moderation</h1>
        <p className="text-slate-400 mt-2">Monitor and manage community messages</p>
      </div>

      <Card className="border-slate-800 bg-slate-900 mt-8">
        <CardContent className="p-6">
          {loading ? (
            <div className="text-center text-slate-400">Loading...</div>
          ) : messages.length === 0 ? (
            <div className="text-center py-8 text-slate-400">No messages</div>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {messages.map(msg => (
                <div key={msg.id} className="p-4 border border-slate-700 rounded-lg hover:border-slate-600 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-white font-medium">{msg.profiles?.full_name || 'Anonymous'}</p>
                      <p className="text-xs text-slate-400 mt-1">{msg.room}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="border-slate-700 hover:bg-slate-700">
                        <Ban className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-700 hover:bg-red-900">
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm">{msg.message}</p>
                  <p className="text-xs text-slate-500 mt-2">
                    {new Date(msg.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
