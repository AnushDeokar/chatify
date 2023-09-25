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

    const hashedpassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data:{
            username: username,
            email: email,
            password: hashedpassword,
            image:""
        }
    })

    return NextResponse.json(user);


}