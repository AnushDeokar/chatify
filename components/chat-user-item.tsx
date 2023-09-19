import React from 'react'
import { Avatar } from '@nextui-org/react'

function ChatUserItem() {
  const randomNumb = Math.floor(Math.random() * 100 +50);
  const url = `https://i.pravatar.cc/${randomNumb}`
  return (
    <div className='w-full hover:bg-gray-100 p-2 flex items-center gap-4 my-2 border-transparent cursor-pointer rounded-lg'>
        <div>
            <Avatar src={url} className="w-12 h-12"/>
        </div>
        <div>
            <h3 className='text-md text-semibold'>Friend Name</h3>
            <p className='text-sm text-gray-400'> Send your first message</p>
        </div>
    </div>
  )
}

export default ChatUserItem