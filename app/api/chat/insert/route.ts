import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authoptions } from "../../auth/[...nextauth]/route";

export async function POST(request: Request) {
  const session = await getServerSession(authoptions);
  const body = await request.json();
  const { message, chatId } = body;
  if (session) {
    const newMessage = await prisma.message.create({
      data: {
        senderId: session.user.id,
        text: message.text,
        image: message.image,
        chatId: chatId,
      },
    });
  }

  return NextResponse.json({ success: false });
}
