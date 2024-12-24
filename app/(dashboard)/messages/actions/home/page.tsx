'use client'

import { useEffect, useRef, useState } from 'react'
import { useOptimistic } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Send } from 'lucide-react'
import { getMessages, Message, sendMessage } from '../types/chat'

export default function Chat() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[]>(
    messages,(state, newMessage: Message) => [...state, newMessage] )
  const scrollRef = useRef<HTMLDivElement>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    // Fetch initial messages
    getMessages().then(setMessages)

    // Poll for new messages every 3 seconds
    const interval = setInterval(async () => {
      const newMessages = await getMessages()
      setMessages(newMessages)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [optimisticMessages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const optimisticMessage: Message = {
      id: Math.random().toString(36).slice(2),
      content: input,
      sender: 'user',
      timestamp: Date.now(),
      status: 'sending'
    }

    addOptimisticMessage(optimisticMessage)
    setInput('')

    try {
      await sendMessage(input, 'user')
    } catch (error) {
      console.error('Failed to send message:', error)
      // You could update the optimistic message to show an error state here
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    setIsTyping(true)

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    // Set new timeout
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto">
      <div className="flex items-center p-4 border-b">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Chat" />
          <AvatarFallback>CH</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <div className="font-semibold">Chat Room</div>
          <div className="text-sm text-muted-foreground">
            {isTyping ? 'Typing...' : 'Online'}
          </div>
        </div>
      </div>

      <ScrollArea ref={scrollRef} className="flex-1 p-4">
        <div className="space-y-4">
          {optimisticMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <div>{message.content}</div>
                <div className="text-xs mt-1 opacity-70">
                  {new Date(message.timestamp).toLocaleTimeString()}
                  {message.sender === 'user' && (
                    <span className="ml-2">
                      {message.status === 'sending' && '⋯'}
                      {message.status === 'sent' && '✓'}
                      {message.status === 'delivered' && '✓✓'}
                      {message.status === 'error' && '⚠️'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="flex-1"
        />
        <Button type="submit" size="icon">
          <Send className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </form>
    </div>
  )
}

