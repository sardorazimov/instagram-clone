import { Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function EmptyState() {
  return (
    <div className="py-8 flex flex-col items-center text-center">
      <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-4">
        <Camera className="w-12 h-12" />
      </div>
      <h2 className="text-[32px] font-bold mb-2">Share Photos</h2>
      <p className="text-zinc-500 mb-4">
        When you share photos, they will appear on your profile.
      </p>
      <Button>Share your first photo</Button>
    </div>
  )
}

