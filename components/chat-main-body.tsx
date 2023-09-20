'use client'
import React, { useEffect } from 'react'

interface Chat{
  text: string, 
  img: string, 
  isMine: boolean
}
function ChatMainBody({ chats }: { chats: Chat[] }) {
  useEffect(() => {
    console.log("rendered");
  }, [chats]);

  return (
    <div className='flex-grow w-full' style={{ flexGrow: "8" }}>
      {chats.map((chat, ind) => {
        const chatClass = chat.isMine
          ? 'bg-custom-blue text-white ml-auto justify-self-end'
          : 'bg-gray-200';

        return (
          <div className={`flex my-2 w-full`} key={ind}>
            <div className={`relative border inline-block rounded-full px-2 py-2 ${chatClass}`}>
              {chat.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ChatMainBody