'use client'
import { useSession, signOut } from "next-auth/react"
import {Spinner} from "@nextui-org/react";
import DesktopSideBar from "@/components/desktop-sidebar";
import ChatUsersList from "@/components/chat-users-list";


function page() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <Spinner size="lg"/>
    }

    return (
        <div className="h-screen flex">
            <DesktopSideBar/>
            <ChatUsersList/>
            <div className="bg-red-400 w-full hidden lg:block">
                Hi
            </div>
            {/* <button onClick={()=>signOut({ callbackUrl: '/' })}>Signout</button> */}
        </div>
    )
}

export default page