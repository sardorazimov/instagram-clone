import Image from 'next/image'
import { Settings, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProfileTabs from '@/components/shared/ProfileTabs'
import StoryHighlights from '@/components/shared/StoryHighligts'
import EmptyState from '@/components/shared/EmptyState'

export default function ProfilePage() {
  return (
    <div className="min-h-screen  text-white pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="flex items-start gap-8 py-8">
          <img
            src="/backiee.jpg"
            alt="Profile picture"
             
            className="rounded-full h-24 w-24"
          />
          <div className="flex-1">
            <div className="flex items-center gap-4 flex-wrap mb-4">
              <h1 className="text-xl">fiylegeet</h1>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">
                  Edit profile
                </Button>
                <Button variant="secondary" size="sm">
                  View archive
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 mb-4">
              <div>
                <span className="font-semibold">0</span> posts
              </div>
              <div>
                <span className="font-semibold">7,632</span> followers
              </div>
              <div>
                <span className="font-semibold">16</span> following
              </div>
            </div>
            
            {/* Bio */}
            <div className="space-y-1">
              <div className="font-semibold">
                Malika <span className="font-normal text-zinc-500">him/he</span>
              </div>
              <p>|-| Malika Abdulayeva Farg'ona | O'zbekiston jurnalistika va ommaviy kommunikatsiyalar universitet</p>
              <a 
                href="/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                maps.app.goo.gl/UJJa64CaRBHMkMPZ7
              </a>
            </div>
          </div>
        </div>

        {/* Story Highlights */}
        <StoryHighlights />

        {/* Profile Tabs */}
        <ProfileTabs />

        {/* Empty State */}
        <EmptyState />
      </div>
    </div>
  )
}

