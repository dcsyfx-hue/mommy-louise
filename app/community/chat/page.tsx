'use client'

import { useEffect, useState, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send, MessageCircle } from 'lucide-react'

export const dynamic = 'force-dynamic'

const CHAT_ROOMS = [
  { id: 'general', name: 'General Chat', description: 'General discussions about budgeting' },
  { id: 'challenges', name: 'Challenges', description: 'Budget challenges and goals' },
  { id: 'tips', name: 'Tips & Tricks', description: 'Share your best budgeting tips' },
  { id: 'new-releases', name: 'New Releases', description: 'Latest product announcements' },
]

interface ChatMessage {
  id: string
  user_id: string
  room: string
  message: string
  created_at: string
  profiles: {
    full_name: string
    avatar_url: string
  }
}

export default function CommunityChat() {
  const [supabase, setSupabase] = useState<any>(null)
  const [currentRoom, setCurrentRoom] = useState('general')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [subscribed, setSubscribed] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sb = createClient()
    setSupabase(sb)
    checkAuth(sb)
  }, [])

  useEffect(() => {
    if (user && supabase) {
      loadMessages()
      subscribeToMessages()
    }
  }, [currentRoom, user, supabase])

  const checkAuth = async (sb: any) => {
    try {
      const {
        data: { user: currentUser },
      } = await supabase.auth.getUser()
      setUser(currentUser)
    } catch (error) {
      console.error('Auth check failed:', error)
    }
  }

  const loadMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*, profiles(full_name, avatar_url)')
        .eq('room', currentRoom)
        .order('created_at', { ascending: true })
        .limit(50)

      if (error) throw error
      setMessages(data || [])
      scrollToBottom()
    } catch (error) {
      console.error('Failed to load messages:', error)
    }
  }

  const subscribeToMessages = () => {
    const subscription = supabase
      .channel(`chat:${currentRoom}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `room=eq.${currentRoom}`,
        },
        payload => {
          if (payload.new) {
            setMessages(prev => [...prev, payload.new as ChatMessage])
            scrollToBottom()
          }
        }
      )
      .subscribe()

    setSubscribed(true)

    return () => {
      subscription.unsubscribe()
    }
  }

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newMessage.trim() || !user) return

    try {
      setLoading(true)

      const { error } = await supabase.from('chat_messages').insert({
        user_id: user.id,
        room: currentRoom,
        message: newMessage,
      })

      if (error) throw error
      setNewMessage('')
    } catch (error) {
      console.error('Failed to send message:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center p-4">
        <Card className="border-pink-200 w-full max-w-md">
          <CardContent className="p-8 text-center">
            <MessageCircle size={48} className="mx-auto mb-4 text-pink-600" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Join the Community</h3>
            <p className="text-gray-600 mb-6">Sign in to participate in community chats</p>
            <Button
              onClick={() => (window.location.href = '/auth/login')}
              className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700"
            >
              Sign In to Chat
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Community Chat</h1>
          <p className="text-gray-600 mt-2">Connect with fellow budgeters and share your journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Room Selection Sidebar */}
          <div className="space-y-3">
            {CHAT_ROOMS.map(room => (
              <button
                key={room.id}
                onClick={() => {
                  setCurrentRoom(room.id)
                  setMessages([])
                }}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  currentRoom === room.id
                    ? 'border-pink-600 bg-pink-50'
                    : 'border-pink-200 bg-white hover:border-pink-300'
                }`}
              >
                <h3 className="font-semibold text-gray-900">{room.name}</h3>
                <p className="text-xs text-gray-600 mt-1">{room.description}</p>
              </button>
            ))}
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="border-pink-200 h-[600px] flex flex-col">
              <CardHeader className="border-b border-pink-200">
                <CardTitle>
                  {CHAT_ROOMS.find(r => r.id === currentRoom)?.name}
                </CardTitle>
                <CardDescription>
                  {CHAT_ROOMS.find(r => r.id === currentRoom)?.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
                {messages.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <p>No messages yet. Be the first to start the conversation!</p>
                  </div>
                ) : (
                  <>
                    {messages.map(msg => (
                      <div key={msg.id} className="flex gap-3 animate-in fade-in">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                          {(msg.profiles?.full_name || 'U')[0].toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-baseline gap-2">
                            <p className="font-semibold text-gray-900">
                              {msg.profiles?.full_name || 'Anonymous'}
                            </p>
                            <p className="text-xs text-gray-500">
                              {new Date(msg.created_at).toLocaleTimeString()}
                            </p>
                          </div>
                          <p className="text-gray-700 mt-1">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </>
                )}
              </CardContent>

              {/* Message Input */}
              <div className="border-t border-pink-200 p-4 bg-pink-50">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                    disabled={loading}
                    className="flex-1 border-pink-200 focus:border-pink-600"
                  />
                  <Button
                    type="submit"
                    disabled={loading || !newMessage.trim()}
                    className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white"
                  >
                    <Send size={18} />
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
