'use client'
import { useSession, signOut } from "next-auth/react"
import {Spinner} from "@nextui-org/react";
import DesktopSideBar from "@/components/desktop-sidebar";
import ChatUsersList from "@/components/chat-users-list";
import ChatMainSection from "@/components/chat-main-section";

function page() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <Spinner size="lg"/>
    }

    return (
        <div className="h-screen flex overflow-x-hidden">
            <DesktopSideBar/>
            <div className="grow w-full h-screen chat main_chat">
                <ChatUsersList/>
                <ChatMainSection/>
            </div>
            
            {/* <button onClick={()=>signOut({ callbackUrl: '/' })}>Signout</button> */}
        </div>
    )
}

export default page