import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import { getSession } from 'next-auth/react';

//TODO: NEXT Auth Middleware API
export async function POST(request:Request) {
    console.log(request);
    const body = await request.json();

    const query = body.searchQuery;
    const users = await prisma.user.findMany({
        where:{
            username:{
                contains: query
            }
        }
    })
    console.log(query, users);
    // const session = await getSession({ request });

    // if (!session) {
    //   return  NextResponse.json({ error: 'Not authenticated' });
    // }
    // const userId = session.user.id; 
  
    return NextResponse.json({msg:"hello"});
}