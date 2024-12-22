import { MessageCircleDashed } from "lucide-react"


const page = () => {
  return (
    <div className="text-5xl w-full text-center flex mt-10 flex-col">
        No Request Messages
        <MessageCircleDashed className="w-full mt-10" size={80}/>
    </div>
  )
}

export default page