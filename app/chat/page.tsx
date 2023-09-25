'use client'
import { useSession, signOut } from "next-auth/react"
import {Spinner} from "@nextui-org/react";

function page() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <Spinner size="lg"/>
    }

    return (
        <div className="w-full hidden lg:block border flex flex-col none lg:border h-full" style={{display:"flex", flexDirection:"column"}}>
            <h1 className="m-auto text-2xl">Start a new chat or reply to an existing chat🚀</h1>
        </div>
    )
}

export default page