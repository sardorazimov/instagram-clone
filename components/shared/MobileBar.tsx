'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, PlusSquare, Heart, User } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Search, label: 'Search', href: '/search' },
  { icon: PlusSquare, label: 'Create', href: '/create' },
  { icon: Heart, label: 'Notifications', href: '/notifications' },
  {
    icon: () => (
      <Image
        src="/placeholder.svg"
        alt="Profile"
        width={24}
        height={24}
        className="rounded-full"
      />
    ),
    label: 'Profile',
    href: '/profile'
  }
]

export default function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-800 px-4 py-3 z-50">
      <ul className="flex justify-between items-center">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex flex-col items-center gap-1 ${
                pathname === item.href ? 'text-white' : 'text-zinc-500'
              }`}
            >
              <item.icon size={24} strokeWidth={pathname === item.href ? 2 : 1.5} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

