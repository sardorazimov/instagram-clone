"use client"

import { useRouter } from "next/navigation"

const suggestions = [
  { id: 1, username: 'user1', relation: 'New to Instagram' },
  { id: 2, username: 'user2', relation: 'Followed by user3' },
  { id: 3, username: 'user3', relation: 'Followed by user4' },
]

export default function RightSidebar() {
  const router = useRouter()
  return (
    <div className='w-80 mx-10 lg:flex hidden'>
     <div className="w-full fixed">
      <div className="flex items-center mb-6 cursor-pointer">
        <img
          src="/backiee.jpg"
          alt="Your profile"
         
          className="rounded-full mr-4 w-14 h-14"
        />
        <div >
          <p className="font-semibold" onClick={() => router.push('/userprofile')}>yourusername</p>
          <p className="text-gray-500">AzSA</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-500 font-semibold">Suggestions For You</span>
          <button className="text-sm font-semibold">See All</button>
        </div>
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <img
                src="/backiee.jpg"
                alt={suggestion.username}
              
                className="rounded-full mr-3 h-10 w-10"
              />
              <div>
                <p className="font-semibold">{suggestion.username}</p>
                <p className="text-xs text-gray-500">{suggestion.relation}</p>
              </div>
            </div>
            <button className="text-xs font-semibold text-blue-500">Follow</button>
          </div>
        ))}
      </div>
    </div>
    </div>
   
  )
}

