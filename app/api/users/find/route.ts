import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authoptions } from "../../auth/[...nextauth]/route";
import getUserById from "@/app/actions/getUserById";

export async function POST(request: Request, response: Response) {
  const session = await getServerSession(authoptions);
  if (session) {
    const body = await request.json();
    const query = body.id;

    const user = await getUserById(query);

    return NextResponse.json({ user: user, success: true });
  } else {
    return NextResponse.json({
      msg: "You are not authenticated",
      success: false,
    });
  }

  return NextResponse.json({ msg: "hello" });
}
