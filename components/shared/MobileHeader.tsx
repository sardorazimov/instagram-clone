'use client'

import { useScrolled } from "@/hooks/scrolled"
import { cn } from "@/lib/utils"
import { Heart, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"


const MobileHeader = () => {
  const router = useRouter()
  const scroll = useScrolled()
  return (
    <div className={cn("lg:hidden sm:flex -mt-3 mx-auto h-16 border-b fixed w-full",
      scroll  && "bg-black trasnition-background",
      
    )}>
     <header className="w-full flex justify-between h-full">
     <div>
        <Link href={'/'}>
        <img src="/instagram.svg" alt="" className="w-24 mx-3" />
        </Link>
     </div>
     <div className="gap-x-3 flex h-full mt-1 items-center justify-center mx-3">
      <div onClick={() => router.push('/notifications')}
       className="">
        <Heart/>
      </div>
      <div onClick={() => router.push('messages')}
      className="">
        <MessageCircle/>
      </div>
     </div>
     </header>
    </div>
  )
}

export default MobileHeader