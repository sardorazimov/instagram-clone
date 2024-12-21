'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, Compass, CameraIcon as MovieCamera, Heart, PlusSquare, MessageCircle, Menu, Mail } from 'lucide-react'

const suggestions = [
  { id: 1, username: 'user1', relation: 'New to Instagram' },
  { id: 2, username: 'user2', relation: 'Followed by user3' },
  { id: 3, username: 'user3', relation: 'Followed by user4' },
]

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Search, label: 'Search', href: '/search' },
  { icon: Compass, label: 'Explore', href: '/explore' },
  { icon: MovieCamera, label: 'Reels', href: '/reels' },
  { icon: MessageCircle, label: 'Messages', href: '/messages' },
  { icon: Heart, label: 'Notifications', href: '/notifications' },
  { icon: PlusSquare, label: 'Create', href: '/create' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="lg:flex hidden">
      <div className="p-4  fixed left-0 top-0 bottom-0 w-64  border-r overflow-y-auto pt-16 ">
        
        <div className="flex items-center mb-6">
         {/* Link */}
          <div>
            {/* <p className="font-semibold">yourusername</p>
            <p className="text-gray-500">Your Name</p> */}
          </div>
        </div>
        <nav className="mb-6">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-2 p-2 rounded transition-colors ${
                    pathname === item.href
                      ? 'bg-white/10 rounded-lg font-semibold'
                      : 'hover:bg-white/10 rounded-lg'
                  }`}
                >
                  <item.icon size={24} />
                  <span>{item.label}</span>
                </Link>
               
              </li>
             
            ))}
           
          </ul>
        </nav>
        <div className='flex p-2 -mt-5  transition-colors'>
        <a href="/users" className='flex w-7 h-7 rounded-full bg-white '>
           
        </a>
        <h1 className='mx-1 font-medium'>Profile</h1>
        </div>
        <div>
          <div className="flex justify-between mb-4">
            {/* <span className="text-gray-500 font-semibold">Suggestions For You</span>
            <button className="text-sm font-semibold">See All</button> */}
          </div>
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="flex items-center justify-between mb-3">
              <div className="flex items-center">
           
                <div>
                  {/* <p className="font-semibold">{suggestion.username}</p>
                  <p className="text-xs text-gray-500">{suggestion.relation}</p> */}
                </div>
              </div>
    
            </div>
          ))}
          
        </div>
        <div className='mt-20 p-3 space-y-3 '>
            <Mail/>
            <Menu className='cursor-pointer' size={26} />
        </div>
      </div>
    </div>
  )
}

