import React from 'react'
import SearchBar from './SearchBar'
import {BsSearch} from 'react-icons/bs';
import ChatUserItem from './chat-user-item';

function ChatUsersList() {
  return (
    <div className='pt-6 px-4 grow-4 h-screen overflow-y-auto' style={{flexGrow:"4"}}>
            <h1 className='text-2xl font-bold'>Chats</h1>
            <div className='w-full inline-flex items-center my-2 text-lg h-10 border rounded-full bg-gray-100 overflow-hidden'>
                <BsSearch className="text-gray-800 mx-4"/>
                <input placeholder='Search Chatify' className='bg-inherit outline-none grow w-full text-sm'/>
            </div>
            <div className='flex flex-col w-full'>
                <ChatUserItem/>
                <ChatUserItem/>
                <ChatUserItem/>
                <ChatUserItem/>
                <ChatUserItem/>
            </div>

    </div>
  )
}

export default ChatUsersList