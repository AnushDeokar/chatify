'use client'
import React, { useRef, useState, useCallback } from 'react'
import {BsSearch} from 'react-icons/bs';
import ChatUserItem from './chat-user-item';
import axios from 'axios';
import {Button} from "@nextui-org/react";


function ChatUsersList({option}:{option: Number}) {

  const inputElem = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const debounce = <T extends (...args: any[]) => void>(func: T, wait: number) => {
    let timeout: NodeJS.Timeout;
      
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    }
  }
  

  const fetchNameResults = async (inputVal:string) => {
    try {
      if (inputVal !== '') {
        setLoading(true);
        const res = await axios.post('/api/users', {searchQuery: inputVal})
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  }
  
  const handleSearch = useCallback(debounce((inputVal:string) => fetchNameResults(inputVal), 500), []);
  
  return (
    <div className='pt-6 px-4 grow-4 h-screen overflow-y-auto' style={{flexGrow:"4"}}>
            <h1 className='text-2xl font-bold'>Chats</h1>
            <div className='w-full inline-flex items-center my-2 text-lg h-10 border border-transparent rounded-full bg-gray-100 overflow-hidden'>
                <BsSearch className="text-gray-800 mx-4 text-gray-600"/>
                <input placeholder='Search Chatify' className='bg-inherit outline-none grow text-sm' type='text'  ref={inputElem} onChange={() => handleSearch(inputElem.current?.value || '')} />
            </div>
            {loading?
                <Button color="primary" isLoading>
                  Loading
                </Button>
            :
            <div className='flex flex-col w-full'>
                <ChatUserItem/>
                <ChatUserItem/>
                <ChatUserItem/>
                <ChatUserItem/>
                <ChatUserItem/>
            </div>}

    </div>
  )
}

export default ChatUsersList