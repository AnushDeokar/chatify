'use client'
import { useSession, signOut } from "next-auth/react"
import {Spinner} from "@nextui-org/react";
import DesktopSideBar from "@/components/desktop-sidebar";
import ChatUsersList from "@/components/chat-users-list";
import { useEffect, useState } from "react"


function page() {
    const { data: session, status } = useSession();

    useEffect(()=>{
        console.log("called");
    }, [])

    const [sidebaroption, setSideBarOption] = useState<Number>(0);
    const chatlist = [
        {
            name:"User123",
            img:""
        },
        {
            name:"User128",
            img:""
        },
        {
            name:"User129",
            img:""
        },

    ]

    return (
        <>
            <DesktopSideBar option={sidebaroption} handleOptionChange={(i:Number)=>setSideBarOption(i)}/>
            <div className="grow w-full h-screen chat main_chat">
                <ChatUsersList option={sidebaroption} chatlist={chatlist}/>
                <div className="w-full hidden lg:block border flex flex-col none lg:border h-full" style={{display:"flex", flexDirection:"column"}}>
                <h1 className="m-auto text-2xl">Start a new chat or reply to an existing chat🚀</h1>
                </div>
            </div>   
        </>
    )
}

export default page