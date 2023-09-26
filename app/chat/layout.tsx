"use client"
import DesktopSideBar from "@/components/desktop-sidebar"
import ChatUsersList from "@/components/chat-users-list"
import { useEffect, useState } from "react"

export default function layout({children}:{children: React.ReactNode} ){

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

    return(<>
        <div className="h-screen flex overflow-x-hidden">
            <DesktopSideBar option={sidebaroption} handleOptionChange={(i:Number)=>setSideBarOption(i)}/>
            <div className="grow w-full h-screen chat main_chat">
                <ChatUsersList option={sidebaroption} chatlist={chatlist}/>
                {children}
            </div>    
            {/* <button onClick={()=>signOut({ callbackUrl: '/' })}>Signout</button> */}
        </div>
    </>)
}