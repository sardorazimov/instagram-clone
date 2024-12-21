import Image from 'next/image'

const stories = [
  { id: 1, username: '_leeeena', imageUrl: '/backiee.jpg' },
  { id: 2, username: 'elina_4_22', imageUrl: '/backiee.jpg' },
  { id: 3, username: 'taaarannnn', imageUrl: '/backiee.jpg' },
  { id: 4, username: 'mercedesbenz', imageUrl: '/backiee.jpg', isVerified: true },
  { id: 5, username: 'amgstorry', imageUrl: '/backiee.jpg' },
  { id: 3, username: 'taaarannnn', imageUrl: '/backiee.jpg' },
  { id: 4, username: 'mercedesbenz', imageUrl: '/backiee.jpg', isVerified: true },
  { id: 5, username: 'amgstorry', imageUrl: '/backiee.jpg' },
]

export default function Stories() {
  return (
    <div className="flex gap-4 py-4 overflow-x-auto">
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center gap-1">
          <div className="p-[3px] rounded-[100%] bg-gradient-to-tr from-yellow-500 to-fuchsia-700">
            <div className="p-[2px] rounded-[100%] bg-black">
              <img
                src={story.imageUrl}
                alt={story.username}
                className="rounded-[100%] w-14 h-14 object-cover cursor-pointer"
              />
            </div>
          </div>
          <span className="text-xs truncate w-16 text-center">{story.username}</span>
        </div>
      ))}
    </div>
  )
}

