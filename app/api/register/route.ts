import prisma from "@/app/libs/prismadb"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";

export async function POST(request:Request) {

    const body = await request.json();

    const {username, email, password} = body;
    
    if (!username || !email || !password){
        return NextResponse.json({
            msg:"Missing Details",
            status: 401
        })
    }
    const randomNumb = Math.floor(Math.random() * 1000);
    const url = `https://avatars.dicebear.com/api/bottts/${randomNumb}.svg`
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data:{
            name: username,
            email: email,
            password: hashedpassword,
            image:url
        }
    })

    return NextResponse.json(user);


}