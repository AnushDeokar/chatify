import React from 'react'
import {BsChatFill, BsPeopleFill, BsFillChatDotsFill} from 'react-icons/bs'
import{RxAvatar}  from 'react-icons/rx'

function DesktopSideBar() {
    const hover=true;
  return (
    <div className='w-16 h-full  flex flex-col items-center border-r border-gray-200 gap-4' >
        <div className='w-12 h-12 bg-gray-200 border-0 rounded-md flex flex-col justify-center mt-4' >
            <BsChatFill  size={25} style={{color:`${hover? "black": "gray"}`, margin:"auto"}}/>
        </div>
        <div className='w-12 h-12 border-0 rounded-md flex flex-col justify-center'>
            <BsPeopleFill  size={25} style={{color:"gray", margin:"auto"}}/>
        </div>
        <div className='w-12 h-12 border-0 rounded-md flex flex-col justify-center'>
            <BsFillChatDotsFill  size={25} style={{color:"gray", margin:"auto"}}/>
        </div>

        <div className='w-12 h-12 border-0 rounded-md flex flex-col justify-center mt-auto'>
            <RxAvatar  size={25} style={{color:"gray", margin:"auto"}}/>
        </div>
    </div>
  )
}

export default DesktopSideBar