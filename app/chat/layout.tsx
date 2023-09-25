"use client"
import DesktopSideBar from "@/components/desktop-sidebar"
import ChatUsersList from "@/components/chat-users-list"
import { useEffect } from "react"

export default function layout({children}:{children: React.ReactNode} ){

    useEffect(()=>{
        console.log("called");
    }, [])
    return(<>
        <div className="h-screen flex overflow-x-hidden">
            <DesktopSideBar/>
            <div className="grow w-full h-screen chat main_chat">
                <ChatUsersList/>
                {children}
            </div>    
            {/* <button onClick={()=>signOut({ callbackUrl: '/' })}>Signout</button> */}
        </div>
    </>)
}