'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [activeTab, setActiveTab] = useState<'for-you' | 'following'>('for-you')
  
  return (
    <header className=" max-w-sm lg:flex hidden ">
      <div className=" w-full mx-auto px-4 top-0 left-0 right-0 z-50  border-b border-zinc-800">
        <div className="flex gap-8 text-sm">
          <button
            onClick={() => setActiveTab('for-you')}
            className={`py-4 relative ${
              activeTab === 'for-you' ? 'font-semibold' : 'text-zinc-500'
            }`}
          >
            For you
            {activeTab === 'for-you' && (
              <div className="absolute bottom-0 left-0 right-0 h-[1px] " />
            )}
          </button>
          <button
            onClick={() => setActiveTab('following')}
            className={`py-4 relative ${
              activeTab === 'following' ? 'font-semibold' : 'text-zinc-500'
            }`}
          >
            Following
            {activeTab === 'following' && (
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

