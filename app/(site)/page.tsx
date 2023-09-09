'use client'
import Image from 'next/image'
import AuthForm from '@/components/AuthForm';
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import axios from 'axios'
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from 'react-hot-toast'

interface details{
    username: string,
    email: string,
    password: string
}
export default function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();
  
    const [formstate, setFormState] = useState('REGISTER');
    const [details, setDetails] = useState<details>({
        username:"",
        email:"",
        password:""
    })

    useEffect(()=>{
        if (status==="authenticated"){
            router.push("/chat");
        }
    }, [status])

    const handleSubmit = async ()=>{
        if (formstate==="REGISTER"){
            await axios.post('/api/register', details)
            .then(()=>
                signIn("credentials", {
                    ...details,
                    redirect:false
            }))
            .then((callback)=>{
                if (callback?.error) {
                    console.log(callback.error);
                    console.log('Invalid credentials!');
                }
        
                if (callback?.ok) {
                    router.push('/chat')
                }
            })
            .catch(() => console.log('Something went wrong!'))
        }else{
            handleSubmit2();
        }
    }

    const handleSubmit2 = async ()=>{

        await signIn("credentials", {
                ...details,
                redirect:false
        })
        .then((callback)=>{
            if (callback?.error) {
                toast.error("Invalid Credentials!")
              }
      
              if (callback?.ok) {
                toast.success("Successfully Logged In!")
                router.push('/chat')
              }
        })
        .catch(() => console.log('Something went wrong!'))
    }
    if (status==="loading"){
        return <h1>Loading...</h1>
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setDetails({...details, [e.target.name]:e.target.value})
    }


  return (<>
    {status==="unauthenticated" &&
    <main className='h-screen flex justify-around flex-col'>
        {formstate==="REGISTER"?
        <form className="w-full max-w-sm m-auto">
        <img
          className="h-20 m-auto mb-10"
          src="chatify.png"
          alt="Logo"
        />
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                Username
            </label>
            </div>
            <div className="md:w-2/3">
            <input name="username" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={onChange} value={details.username}/>
            </div>
        </div>
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                Email
            </label>
            </div>
            <div className="md:w-2/3">
            <input name="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={onChange} value={details.email}/>
            </div>
        </div>
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                Password
            </label>
            </div>
            <div className="md:w-2/3">
            <input name="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" onChange={onChange} value={details.password}/>
            </div>
        </div>
        <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSubmit}>
                Sign Up
            </button>
            </div>
        </div>
        <h3 className='flex mt-5 text-gray-700 justify-center'><span>Already have an account? <button onClick={()=>{setFormState("LOGIN")}} className='text-sky-500'>Signin</button></span></h3> 
        <div>
           <h3 className='flex sign-up-with mt-5 text-gray-700'><span>or sign in with</span></h3> 
            <AuthForm/>
        </div>

        </form>
        :
        <form className="w-full max-w-sm m-auto">
        <img
          className="h-20 m-auto mb-10"
          src="chatify.png"
          alt="Logo"
        />
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                Email
            </label>
            </div>
            <div className="md:w-2/3">
            <input name="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={onChange} value={details.email}/>
            </div>
        </div>
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                Password
            </label>
            </div>
            <div className="md:w-2/3">
            <input name="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" onChange={onChange} value={details.password}/>
            </div>
        </div>
        <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSubmit}>
                Sign In
            </button>
            </div>
        </div>
        <h3 className='flex  mt-5 text-gray-700 justify-center'><span>Don't have an account? <button onClick={()=>{setFormState("REGISTER")}} className='text-sky-500'>Signup</button></span></h3> 
        <div>
           <h3 className='flex sign-up-with mt-5 text-gray-700'><span>or sign in with</span></h3> 
            <AuthForm/>
        </div>

        </form>
        
        
        }
    </main>}
    </>
  )
}
