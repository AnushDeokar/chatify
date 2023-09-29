import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authoptions } from "../auth/[...nextauth]/route";

export async function POST(request: Request, response: Response) {
  const session = await getServerSession(authoptions);
  if (session) {
    const body = await request.json();
    const query = body.searchQuery;

    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: query,
        },
      },
    });

    return NextResponse.json({ users: users, success: true });
  } else {
    return NextResponse.json({
      msg: "You are not authenticated",
      success: false,
    });
  }

  return NextResponse.json({ msg: "hello" });
}
