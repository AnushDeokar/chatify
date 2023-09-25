'use client'
import { useSession, signOut } from "next-auth/react"
import {Spinner} from "@nextui-org/react";
import ChatMainSection from "@/components/chat-main-section";

function page() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <Spinner size="lg"/>
    }

    return (
        <ChatMainSection/>
    )
}

export default page