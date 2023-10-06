import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authoptions } from "../auth/[...nextauth]/route";

export async function GET(request: Request) {
  const session = await getServerSession(authoptions);
  if (session) {
    const recentchats = await prisma.chat.findMany({
      where: {
        userIds: {
          has: session.user.id,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        users: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        messages: {
          orderBy: {
            createdAt: "desc",
          },
          take: 1, // Fetch only the last message
        },
      },
    });

    return NextResponse.json({ success: true, chatlist: recentchats });
  }

  return NextResponse.json({ success: false });
}
export async function POST(request: Request) {
  const session = await getServerSession(authoptions);
  const body = await request.json();
  const { userchatId } = body;
  if (session) {
    const existingConversations = await prisma.chat.findMany({
      where: {
        OR: [
          {
            userIds: {
              equals: [userchatId, session.user.id],
            },
          },
          {
            userIds: {
              equals: [userchatId, session.user.id],
            },
          },
        ],
      },
    });

    if (existingConversations.length === 0) {
      const newConversation = await prisma.chat.create({
        data: {
          userIds: [userchatId, session.user.id],
        },
      });

      return NextResponse.json({
        success: true,
        chatId: newConversation.id,
        chats: [],
      });
    } else {
      const chats = await prisma.message.findMany({
        where: {
          chatId: existingConversations[0].id,
        },
      });

      return NextResponse.json({
        success: true,
        chatId: existingConversations[0].id,
        chats: chats,
      });
    }
  }

  return NextResponse.json({ success: false });
}
