import React from 'react'
import { Avatar } from '@nextui-org/react'

function ChatUserItem() {
  return (
    <div className='w-full hover:bg-gray-100 p-2 flex items-center gap-4 my-2 border-transparent cursor-pointer rounded-lg'>
        <div>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-12 h-12"/>
        </div>
        <div>
            <h3 className='text-md text-semibold'>Anush Deokar</h3>
            <p className='text-sm text-gray-400'> Send your first message</p>
        </div>
    </div>
  )
}

export default ChatUserItem