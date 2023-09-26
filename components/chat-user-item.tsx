'use client'
import React from 'react'
import { Avatar } from '@nextui-org/react'
import { User } from '@/interfaces/User';

function ChatUserItem({user}:{user:User}) {
  const randomNumb = Math.floor(Math.random() * 100);
  const url = `https://avatars.dicebear.com/api/bottts/${randomNumb}.svg`
  return (
    <div className='w-full hover:bg-gray-100 p-2 flex items-center gap-4 my-2 border-transparent cursor-pointer rounded-lg'>
        <div>
            <Avatar src={user.img?user.img:url} className="w-12 h-12"/>
        </div>
        <div>
            <h3 className='text-md text-semibold'>{user.name}</h3>
            <p className='text-sm text-gray-400'> Send your first message</p>
        </div>
    </div>
  )
}

export default ChatUserItem