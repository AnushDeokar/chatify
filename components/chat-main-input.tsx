"use client";
import React from "react";
import { MdInsertPhoto } from "react-icons/md";
import { BsFillEmojiSmileFill, BsFillSendFill } from "react-icons/bs";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Chat } from "@/interfaces/Chat";

function getCurrentDate() {
  const currentDate = new Date();
  const dateString = currentDate.toISOString();
  return dateString;
}

function ChatMainInput({
  handleChatAddition,
}: {
  handleChatAddition: (chat: Chat) => void;
}) {
  const { data: session, status } = useSession();
  const [chat, setChat] = useState<Chat>({
    image: "",
    text: "",
    senderId: session?.user.id ?? "",
    createdAt: getCurrentDate(),
  });
  return (
    <div className="w-full flex items-center px-4 gap-4 pb-2">
      <MdInsertPhoto size={24} style={{ color: "#0084ff" }} />
      <div className="grow border-transparent bg-gray-100 flex items-center rounded-full bg-gray h-10 px-4">
        <input
          className="outline-none bg-transparent text-sm grow"
          placeholder="Aa"
          value={chat?.text}
          name="text"
          onChange={(e) =>
            setChat({ ...chat, [e.target.name]: e.target.value })
          }
        />
        <BsFillEmojiSmileFill size={20} style={{ color: "#0084ff" }} />
      </div>
      <BsFillSendFill
        size={24}
        style={{ color: "#0084ff" }}
        onClick={() => {
          if (chat.text !== "" || chat.image !== "") {
            handleChatAddition(chat);
            setChat({
              image: "",
              text: "",
              senderId: session?.user.id ?? "",
              createdAt: getCurrentDate(),
            });
          }
        }}
      />
    </div>
  );
}

export default ChatMainInput;
