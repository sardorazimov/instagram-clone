import Image from 'next/image'
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react'

const posts = [
  { id: 1, username: 'user1', likes: 1234, caption: 'This is a sample post caption' },
  { id: 2, username: 'user2', likes: 5678, caption: 'Another sample post caption' },
]

export default function Posts() {
  return (
    <div className="space-y-4 max-w-3xl">
      {posts.map((post) => (
        <div key={post.id} className="bg-white border rounded-lg">
          <div className="flex items-center p-4">
            <Image
              src="/placeholder.svg"
              alt={post.username}
              width={32}
              height={32}
              className="rounded-full mr-3"
            />
            <span className="font-semibold">{post.username}</span>
          </div>
          <Image
            src="/placeholder.svg"
            alt="Post content"
            width={600}
            height={600}
            className="w-full"
          />
          <div className="p-4">
            <div className="flex justify-between mb-4">
              <div className="flex space-x-4">
                <Heart className="cursor-pointer" size={24} />
                <MessageCircle className="cursor-pointer" size={24} />
                <Send className="cursor-pointer" size={24} />
              </div>
              <Bookmark className="cursor-pointer" size={24} />
            </div>
            <p className="font-semibold mb-1">{post.likes} likes</p>
            <p>
              <span className="font-semibold mr-2">{post.username}</span>
              {post.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

