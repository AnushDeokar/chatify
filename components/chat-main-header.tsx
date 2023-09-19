import { Avatar } from "@nextui-org/react"

function ChatMainHeader() {
  return (
    <div className='w-full h-14 px-2 py-2 flex items-center gap-4 border'>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-10 h-10"/>
        <h1 className="font-semibold">Rahul Kumawat</h1>
    </div>
  )
}

export default ChatMainHeader