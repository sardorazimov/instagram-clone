'use client'

import { useState } from 'react'
import Image from 'next/image'
import StoryModal from '../modals/StoryModal'


const stories = [
  { 
    id: 1, 
    username: '_leeeena', 
    imageUrl: '/',
    media: { type: 'image' as const, url: '/backiee.jpg' }
  },
  { 
    id: 2, 
    username: 'elina_4_22', 
    imageUrl: '/',
    media: { type: 'video' as const, url: 'https://example.com/sample-video.mp4' }
  },
  { 
    id: 3, 
    username: 'taaarannnn', 
    imageUrl: '/',
    media: { type: 'image' as const, url: '/backiee.jpg' }
  },
  { 
    id: 4, 
    username: 'mercedesbenz', 
    imageUrl: '/', 
    isVerified: true,
    media: { type: 'image' as const, url: '/backiee.jpg' }
  },
  { 
    id: 5, 
    username: 'amgstorry', 
    imageUrl: '/',
    media: { type: 'video' as const, url: 'https://example.com/another-video.mp4' }
  },
  { 
    id: 6, 
    username: 'mercedesbenz', 
    imageUrl: '/', 
    isVerified: true,
    media: { type: 'image' as const, url: '/backiee.jpg' }
  },
  { 
    id: 7, 
    username: 'amgstorry', 
    imageUrl: '/',
    media: { type: 'video' as const, url: 'https://example.com/another-video.mp4' }
  },


]

export default function Stories() {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null)

  const openStoryModal = (index: number) => {
    setSelectedStoryIndex(index)
  }

  const closeStoryModal = () => {
    setSelectedStoryIndex(null)
  }

  return (
    <>
      <div className="flex gap-4 py-2 md:py-4 overflow-x-auto px-4 md:px-0 -mx-4 md:mx-0">
        {stories.map((story, index) => (
          <button
            key={story.id}
            className="flex flex-col items-center gap-1"
            onClick={() => openStoryModal(index)}
          >
            <div className="p-[3px] rounded-full bg-gradient-to-tr from-yellow-500 to-fuchsia-700">
              <div className="p-[2px] rounded-full bg-black">
                <Image
                  src={story.imageUrl}
                  alt={story.username}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
              </div>
            </div>
            <span className="text-xs truncate w-16 text-center">{story.username}</span>
          </button>
        ))}
      </div>
      {selectedStoryIndex !== null && (
        <StoryModal
          stories={stories}
          initialStoryIndex={selectedStoryIndex}
          onClose={closeStoryModal}
        />
      )}
    </>
  )
}

