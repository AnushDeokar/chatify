import prisma from "@/app/libs/prismadb"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    const body = request.json();
    const {username, email, password} = body;
    
    console.log(body);
    if (!username || !email || !password){
        return NextResponse.json({
            msg:"Missing Details",
            status: 401
        })
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data:{
            name: username,
            email: email,
            password: hashedpassword,
            image:""
        }
    })

    return NextResponse.json(user);

}