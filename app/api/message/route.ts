import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authoptions } from "../auth/[...nextauth]/route";
import { pusherServer } from "@/app/libs/pusher";

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

    await pusherServer.trigger(chatId, "messages:new", newMessage);

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false });
}
