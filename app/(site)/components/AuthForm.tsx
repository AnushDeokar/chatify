import React from 'react'
import { BsGithub, BsGoogle  } from 'react-icons/bs';

function AuthForm() {


    
  return (
    <div className='grid-rows-2'>
        <button className='border rounded-md w-full text-center p-2 mb-4 mt-2 border-inherit'>
                <BsGithub size={30} className="m-auto text-gray-500"/> 
        </button>
        <button className='border rounded-md w-full text-center p-2 mb-4 mt-2'>
                <BsGoogle size={30} className="m-auto text-gray-500"/> 
        </button>

    </div>
  )
}

export default AuthForm