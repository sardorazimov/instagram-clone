'use client'

import { ArrowLeft, Home, Search, PlusSquare, Film, BadgeCheck } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface Notification {
  id: number
  username: string
  action: string
  timestamp: string
  image: string
}

interface SuggestedUser {
  id: number
  username: string
  displayName: string
  avatar: string
  verified: boolean
  followedBy: string
  followersCount: number
  isOfficial?: boolean
}

const notifications: Notification[] = [
  {
    id: 1,
    username: "sardorazm",
    action: "liked your story",
    timestamp: "6w",
    image: "/placeholder.svg?height=56&width=56"
  },
  {
    id: 2,
    username: "sardorazm",
    action: "liked your story",
    timestamp: "7w",
    image: "/placeholder.svg?height=56&width=56"
  },
  {
    id: 3,
    username: "sardorazm",
    action: "liked your story",
    timestamp: "7w",
    image: "/placeholder.svg?height=56&width=56"
  }
]

const suggestedUsers: SuggestedUser[] = [
  {
    id: 1,
    username: "instagram",
    displayName: "Instagram",
    avatar: "/placeholder.svg?height=56&width=56",
    verified: true,
    followedBy: "missbotez",
    followersCount: 0,
    isOfficial: true
  },
  {
    id: 2,
    username: "cznburak",
    displayName: "Burak Ozdemir",
    avatar: "/placeholder.svg?height=56&width=56",
    verified: true,
    followedBy: "kamoliamono55",
    followersCount: 388
  },
  {
    id: 3,
    username: "stars_casablanca",
    displayName: "Stars Casablanca - نجوم الدار البيضاء",
    avatar: "/placeholder.svg?height=56&width=56",
    verified: true,
    followedBy: "andy_wilson_jcoo",
    followersCount: 229
  },
  {
    id: 4,
    username: "luizbacci",
    displayName: "Bacci Notícias - BN",
    avatar: "/placeholder.svg?height=56&width=56",
    verified: true,
    followedBy: "andy_wilson_jcoo",
    followersCount: 395
  },
  {
    id: 5,
    username: "e_milygarcia",
    displayName: "Emily Garcia",
    avatar: "/placeholder.svg?height=56&width=56",
    verified: true,
    followedBy: "andy_wilson_jcoo",
    followersCount: 295
  }
]

export default function NotificationsPage() {
  return (
    <div className="flex flex-col min-h-screen  text-white">
      {/* Header */}
      <header className="flex items-center p-4 border-b border-gray-800">
        <Button variant="ghost" size="icon" className="mr-2">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold">Notifications</h1>
      </header>

      <div className="flex-1 overflow-y-auto">
        {/* Earlier Notifications */}
        <div className="py-2">
          <h2 className="px-4 py-2 text-sm font-semibold">Earlier</h2>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-center px-4 py-2 hover:bg-gray-900"
            >
              <Avatar className="h-11 w-11 mr-3">
                <AvatarImage src={notification.image} alt={notification.username} />
                <AvatarFallback>{notification.username[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-semibold">{notification.username}</span>{" "}
                  {notification.action}
                  <span className="text-gray-400"> · {notification.timestamp}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested for you */}
        <div className="py-2 border-t border-gray-800">
          <h2 className="px-4 py-2 text-sm font-semibold">Suggested for you</h2>
          {suggestedUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center px-4 py-2 hover:bg-gray-900"
            >
              <Avatar className="h-11 w-11 mr-3">
                <AvatarImage src={user.avatar} alt={user.username} />
                <AvatarFallback>{user.username[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <p className="font-semibold text-sm truncate">{user.username}</p>
                  {user.verified && (
                    <BadgeCheck className="h-4 w-4 text-blue-500 ml-1 flex-shrink-0" />
                  )}
                </div>
                <p className="text-sm text-gray-400 truncate">{user.displayName}</p>
                <p className="text-xs text-gray-400 truncate">
                  Followed by {user.followedBy}
                  {user.followersCount > 0 && ` + ${user.followersCount} more`}
                </p>
              </div>
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                Follow
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-800">
        <Button variant="ghost" size="icon">
          <Home className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Search className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <PlusSquare className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Film className="h-6 w-6" />
        </Button>
        <Avatar className="h-6 w-6">
          <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Profile" />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

