import React from 'react'

export const ChatContext = React.createContext<{
  currentRoom: string
  setCurrentRoom: (room: string) => void
  messages: any[]
  setMessages: (messages: any[]) => void
  newMessage: string
  setNewMessage: (message: string) => void
  sendMessage: () => Promise<void>
  loading: boolean
  user: any
}>({
  currentRoom: 'general',
  setCurrentRoom: () => {},
  messages: [],
  setMessages: () => {},
  newMessage: '',
  setNewMessage: () => {},
  sendMessage: async () => {},
  loading: false,
  user: null,
})

export const useChatContext = () => {
  const context = React.useContext(ChatContext)
  if (!context) {
    throw new Error('useChatContext must be used within ChatProvider')
  }
  return context
}
