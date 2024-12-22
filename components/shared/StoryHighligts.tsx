import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const highlights = [
  { id: 1, name: 'Fargona', image: '/placeholder.svg' },
  { id: 2, name: 'Universitet', image: '/placeholder.svg' },
  { id: 3, name: 'Style', image: '/placeholder.svg' },
  { id: 4, name: 'Tashkent', image: '/placeholder.svg' },
  { id: 5, name: 'Poralab ❤️', image: '/placeholder.svg' },
  { id: 6, name: 'Edit', image: '/placeholder.svg' },
]

export default function StoryHighlights() {
  return (
    <div className="relative py-4">
      <div className="flex gap-4 overflow-x-auto pb-4">
        {highlights.map((highlight) => (
          <div key={highlight.id} className="flex flex-col items-center gap-1">
            <div className="w-[77px] h-[77px] rounded-full border border-zinc-800">
              <Image
                src={highlight.image}
                alt={highlight.name}
                width={77}
                height={77}
                className="rounded-full"
              />
            </div>
            <span className="text-xs text-center w-20 truncate">{highlight.name}</span>
          </div>
        ))}
      </div>
      <button className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-zinc-800/50 rounded-full flex items-center justify-center">
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}

