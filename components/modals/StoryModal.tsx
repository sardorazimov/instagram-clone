'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Story {
  id: number
  username: string
  media: {
    type: 'image' | 'video'
    url: string
  }
}

interface StoryModalProps {
  stories: Story[]
  initialStoryIndex: number
  onClose: () => void
}

export default function StoryModal({ stories, initialStoryIndex, onClose }: StoryModalProps) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(initialStoryIndex)
  const [progress, setProgress] = useState(0)

  const currentStory = stories[currentStoryIndex]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1)
            return 0
          } else {
            clearInterval(timer)
            onClose()
            return 100
          }
        }
        return prevProgress + 1
      })
    }, 50)

    return () => clearInterval(timer)
  }, [currentStoryIndex, stories.length, onClose])

  const handlePrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1)
      setProgress(0)
    }
  }

  const handleNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1)
      setProgress(0)
    } else {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
        <div
          className="h-full bg-white transition-all duration-50 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white"
        aria-label="Close"
      >
        <X size={24} />
      </button>
      <div className="relative w-full h-full max-w-md mx-auto">
        {currentStory.media.type === 'image' ? (
          <Image
            src={currentStory.media.url}
            alt={`Story by ${currentStory.username}`}
            fill
            className="object-contain"
          />
        ) : (
          <video
            src={currentStory.media.url}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        )}
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <Image
            src="/placeholder.svg"
            alt={currentStory.username}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-white font-semibold">{currentStory.username}</span>
        </div>
      </div>
      <button
        onClick={handlePrevStory}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
        aria-label="Previous story"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={handleNextStory}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
        aria-label="Next story"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  )
}

