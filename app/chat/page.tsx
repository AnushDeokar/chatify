'use client'
import { useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

function page() {
    const router = useRouter();
    const { data: session, status } = useSession();
    // useEffect(()=>{
    //     if (status!=="loading" && status!=="authenticated"){
    //         router.push("/");
    //     }
    //     console.log(session);
    // }, [status])



    if (status === "loading") {
        // Session is still loading, do nothing or show a loading spinner
        return <h1>Loading...</h1>;
    }




    return (
        <div>
            Chat page
            <button onClick={()=>signOut({ callbackUrl: '/' })}>Signout</button>
        </div>
    )
}

export default page