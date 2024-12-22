'use client'

import { ArrowLeft, Send } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

interface Message {
  id: number
  username: string
  avatar: string
  preview: string
  timestamp: string
  hasAttachment?: boolean
  reaction?: string
}

const messages: Message[] = [
  {
    id: 1,
    username: "Sardor",
    avatar: "/placeholder.svg?height=40&width=40",
    preview: "sent an attachment",
    timestamp: "3d",
    hasAttachment: true
  },
  {
    id: 2,
    username: "Duru ",
    avatar: "/placeholder.svg?height=40&width=40",
    preview: "This beautifu",
    timestamp: "1w"
  },
  {
    id: 3,
    username: "suniyagil",
    avatar: "/placeholder.svg?height=40&width=40",
    preview: "B",
    timestamp: "35w"
  },
  {
    id: 4,
    username: "Malika",
    avatar: "/placeholder.svg?height=40&width=40",
    preview: "he is sleeping very sweetly",
    timestamp: "42w"
  },
  {
    id: 5,
    username: "SH❤️❤️",
    avatar: "/placeholder.svg?height=40&width=40",
    preview: "Reacted ❤️ to your message",
    timestamp: "1y",
    reaction: "❤️"
  },
  {
    id: 6,
    username: "SH❤️❤️",
    avatar: "/placeholder.svg?height=40&width=40",
    preview: "Reacted ❤️ to your message",
    timestamp: "1y",
    reaction: "❤️"
  },
  {
    id: 7,
    username: "SH❤️❤️",
    avatar: "/placeholder.svg?height=40&width=40",
    preview: "Reacted ❤️ to your message",
    timestamp: "1y",
    reaction: "❤️"
  },
  {
    id: 8,
    username: "SH❤️❤️",
    avatar: "/placeholder.svg?height=40&width=40",
    preview: "Reacted ❤️ to your message",
    timestamp: "1y",
    reaction: "❤️"
  },
  {
    id: 9,
    username: "SH❤️❤️",
    avatar: "/placeholder.svg?height=40&width=40",
    preview: "Reacted ❤️ to your message",
    timestamp: "1y",
    reaction: "❤️"
  },
  {
    id: 10,
    username: "SH❤️❤️",
    avatar: "/placeholder.svg?height=40&width=40",
    preview: "Reacted ❤️ to your message",
    timestamp: "1y",
    reaction: "❤️"
  },
]

export default function MessagesView() {
  const router = useRouter()
  return (
    <div className="flex flex-col h-screen  text-white">
      {/* Header */}
      <header className="flex items-center p-4 border-b border-gray-800">
        <Button variant="ghost" size="icon" className="mr-2">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <div className="flex-1 flex items-center">
          <h1 className="text-lg font-semibold">fiylegeet</h1>
        </div>
        <Button variant="ghost" size="icon">
          <Send className="h-6 w-6" />
        </Button>
      </header>

      {/* Note Section */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <Avatar className="h-14 w-14">
            <AvatarImage src="/placeholder.svg?height=56&width=56" alt="Note" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-sm text-gray-400">Note</h2>
            <p className="text-sm">Your note</p>
          </div>
        </div>
      </div>

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b border-white/5">
          <h2 className="font-semibold">Messages</h2>
          <Button onClick={() => router.push('/messages/request')}
           variant="link" className="text-blue-500">
            Requests
          </Button>
        </div>

        {/* Message List */}
        <div className="divide-y divide-white/5">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-center space-x-3 p-4 hover:bg-white/10 transition-colors"
            >
              <Avatar>
                <AvatarImage src={message.avatar} alt={message.username} />
                <AvatarFallback>{message.username[0]}</AvatarFallback>
              </Avatar>
              <div onClick={() => router.push('/messages/chat')}
               className="flex-1 min-w-0">
                <p className="font-semibold truncate">{message.username}</p>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="truncate">
                    {message.reaction ? "Reacted" : "You:"} {message.preview}
                  </span>
                  <span className="mx-1">·</span>
                  <span className="flex-shrink-0">{message.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

