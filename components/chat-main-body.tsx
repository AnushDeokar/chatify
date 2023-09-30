"use client";
import React, { useEffect } from "react";
import { Chat } from "@/interfaces/Chat";
import { useSession } from "next-auth/react";

function ChatMainBody({ chats }: { chats: Chat[] }) {
  const { data: session, status } = useSession();

  return (
    <div className="flex-grow w-full" style={{ flexGrow: "8" }}>
      {chats.map((chat, ind) => {
        const chatClass =
          chat.senderId === session?.user.id
            ? "bg-custom-blue text-white ml-auto justify-self-end"
            : "bg-gray-200";

        return (
          <div className={`flex my-2 w-full`} key={ind}>
            <div
              className={`relative border inline-block rounded-full px-2 py-2 ${chatClass}`}
            >
              {chat.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ChatMainBody;
