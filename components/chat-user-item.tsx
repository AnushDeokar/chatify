import React from 'react'
import { Avatar } from '@nextui-org/react'

function ChatUserItem() {
  return (
    <div className='w-full hover:bg-gray-400 flex items-center gap-4 my-4'>
        <div>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-16 h-16"/>
        </div>
        <div>
            <h3 className='text-lg text-semibold'>Anush Deokar</h3>
            <p className='text-sm text-gray-400'> Send your first message</p>
        </div>
    </div>
  )
}

export default ChatUserItem