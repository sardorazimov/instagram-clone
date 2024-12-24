'use client'

import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { ArrowDown, MessageCircleIcon as MessengerCircle } from 'lucide-react'
import Image from "next/image"
import { useRouter } from "next/navigation"

interface Message {
  id: number
  name: string
  content: string
  time: string
  avatar: string
}

const messages: Message[] = [
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },
  {
    id: 1,
    name: "Sardor",
    content: "sent an attachment.",
    time: "22h",
    avatar: "/backiee.jpg"
  },

  // Add more messages as needed
]

export default function MessengerInterface() {
    const router = useRouter()
  return (
    <div className="flex h-screen  text-white">
      {/* Left sidebar */}
      <div className="w-80 border-r border-white/5">
        <div className="p-4 border-b border-white/5">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">filyegeet     
            </h1>
            <button className="p-2 hover:bg-white/10 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex px-4 py-2 space-x-4">
          <button className="flex-1 py-1 font-semibold">Messages</button>
          <button className="flex-1 py-1 text-gray-400">Requests</button>
        </div>

        <ScrollArea className="h-[calc(100vh-120px)]">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg cursor-pointer"
            >
              <img
                src={message.avatar}
                alt={`${message.name}'s avatar`}
            
                className="rounded-full w-10 h-10"
              />
              <div className="flex-1 min-w-0">
                <div className="font-semibold">{message.name}</div>
                <div className="text-sm text-gray-400 truncate">
                  {message.content} · {message.time}
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="inline-block p-4 rounded-full bg-green-900 mb-4">
            <MessengerCircle className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Your messages</h2>
          <p className="text-gray-400 mb-4">Send a message to start a chat.</p>
          <Button variant="default" className="bg-green-600 hover:bg-green-700">
            Send message
          </Button>
        </div>
      </div>
    </div>
  )
}

