'use client'
import { useSession, signOut } from "next-auth/react"
import {Spinner} from "@nextui-org/react";
import DesktopSideBar from "@/components/DesktopSideBar";


function page() {
    const { data: session, status } = useSession();


    if (status === "loading") {
        return <Spinner size="lg"/>
    }


    return (
        <div className="h-screen flex">
            <DesktopSideBar/>
            {/* <button onClick={()=>signOut({ callbackUrl: '/' })}>Signout</button> */}
        </div>
    )
}

export default page