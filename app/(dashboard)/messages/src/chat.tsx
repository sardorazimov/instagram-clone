'use client'

import { ArrowLeft, Camera, Heart, Info, ImageIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: number
  text: string
  timestamp: string
  isOwn: boolean
  seen?: boolean
}

const messages: Message[] = [
  {
    id: 1,
    text: "Message Unavailable",
    timestamp: "11/7/23, 8:03 PM",
    isOwn: false
  },
  {
    id: 2,
    text: "Layk cament bosvorila bosganga VZ bosaman ❤️😊",
    timestamp: "11/7/23, 10:13 PM",
    isOwn: false
  },
  {
    id: 3,
    text: "Layk cament bosvorila bosganga VZ bosaman ❤️😊",
    timestamp: "11/7/23, 10:13 PM",
    isOwn: true,
    seen: true
  },
  {
    id: 4,
    text: "Hop jonim 😊❤️",
    timestamp: "11/7/23, 10:14 PM",
    isOwn: false
  }
]

export default function DirectMessage() {
  return (
    <div className="flex flex-col h-screen  text-white">
      {/* Header */}
      <header className="flex items-center p-4 border-b border-gray-800">
        <Button variant="ghost" size="icon" className="mr-2">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Avatar className="h-8 w-8 mr-3">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="SH" />
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-base font-semibold">SH❤️❤️</h1>
          <p className="text-xs text-gray-400">shukrona_o891 • Instagram</p>
        </div>
        <Button variant="ghost" size="icon">
          <Info className="h-6 w-6" />
        </Button>
      </header>

      {/* Profile Preview */}
      <div className="flex flex-col items-center py-6 space-y-3">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="SH" />
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>
        <h2 className="text-lg font-semibold">SH❤️❤️</h2>
        <Button variant="secondary" className="rounded-lg px-8">
          View profile
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                message.isOwn ? 'bg-blue-700' : 'bg-green-800'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs text-gray-300 mt-1">{message.timestamp}</p>
            </div>
          </div>
        ))}
        {messages[messages.length - 1].seen && (
          <div className="flex justify-end">
            <span className="text-xs text-gray-400">Seen</span>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Message..."
            className="flex-1 border border-white/10 rounded-3xl focus-visible:ring-0 text-white"
          />
          <Button variant="ghost" size="icon">
            <Camera className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <ImageIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}

