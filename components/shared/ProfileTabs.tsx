'use client'

import { useState } from 'react'
import { Grid, Bookmark, UserSquare } from 'lucide-react'

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState<'posts' | 'saved' | 'tagged'>('posts')

  return (
    <div className="border-t border-zinc-800">
      <div className="flex">
        <button
          onClick={() => setActiveTab('posts')}
          className={`flex items-center justify-center gap-2 flex-1 p-4 text-sm font-semibold ${
            activeTab === 'posts' 
              ? 'text-white border-t border-white' 
              : 'text-zinc-500'
          }`}
        >
          <Grid className="w-4 h-4" />
          POSTS
        </button>
        <button
          onClick={() => setActiveTab('saved')}
          className={`flex items-center justify-center gap-2 flex-1 p-4 text-sm font-semibold ${
            activeTab === 'saved' 
              ? 'text-white border-t border-white' 
              : 'text-zinc-500'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          SAVED
        </button>
        <button
          onClick={() => setActiveTab('tagged')}
          className={`flex items-center justify-center gap-2 flex-1 p-4 text-sm font-semibold ${
            activeTab === 'tagged' 
              ? 'text-white border-t border-white' 
              : 'text-zinc-500'
          }`}
        >
          <UserSquare className="w-4 h-4" />
          TAGGED
        </button>
      </div>
    </div>
  )
}

