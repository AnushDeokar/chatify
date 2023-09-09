import React from 'react'
import { BsGithub, BsGoogle  } from 'react-icons/bs';
import { signIn } from "next-auth/react";
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation"

function AuthForm() {
  const router = useRouter();
  const socialAction = async (action: string) => {

    signIn(action)
      .then((callback) => {
        if (callback?.error) {
          toast.error('Invalid credentials!');
        }

        if (callback?.ok) {
          router.push('/chat')
        }
      }).catch((err)=>{
        console.log("err",err);
      })
  } 

    
  return (
    <div className='grid-rows-2'>
        <button className='border rounded-md w-full text-center p-2 mb-4 mt-2 border-inherit' onClick={()=>socialAction('')}>
                <BsGithub size={30} className="m-auto text-gray-500"/> 
        </button>
        {/* <button className='border rounded-md w-full text-center p-2 mb-4 mt-2' onClick={()=>socialAction("g")}>
                <BsGoogle size={30} className="m-auto text-gray-500"/> 
        </button> */}

    </div>
  )
}

export default AuthForm