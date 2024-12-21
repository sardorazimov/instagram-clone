import Image from 'next/image'

const stories = [
  { id: 1, username: '_leeeena', imageUrl: '/placeholder.svg' },
  { id: 2, username: 'elina_4_22', imageUrl: '/placeholder.svg' },
  { id: 3, username: 'taaarannnn', imageUrl: '/placeholder.svg' },
  { id: 4, username: 'mercedesbenz', imageUrl: '/placeholder.svg', isVerified: true },
  { id: 5, username: 'amgstorry', imageUrl: '/placeholder.svg' },
]

export default function Stories() {
  return (
    <div className="flex gap-4 py-4 overflow-x-auto">
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center gap-1">
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
        </div>
      ))}
    </div>
  )
}

