"use client";
import React, { useEffect } from "react";
import ChatMainHeader from "./chat-main-header";
import ChatMainInput from "./chat-main-input";
import ChatMainBody from "./chat-main-body";
import { useState } from "react";
import { User } from "@/interfaces/User";

interface Chat {
  text: string;
  img: string;
  isMine: boolean;
}

function ChatMainSection({ chatId }: { chatId: string | string[] }) {
  const [chats, setChats] = useState<Chat[]>([
    {
      text: "Hi",
      img: "",
      isMine: false,
    },
  ]);

  useEffect(() => {
    //TODO: Fetch the past conversation
  }, [chatId]);

  const handleChatAddition: (chat: Chat) => void = (chat) => {
    console.log(chats);
    if (chat) {
      let updatedChats = [...chats, chat];
      setChats(updatedChats);
    }
  };
  return (
    <div
      className="w-full hidden lg:block border flex flex-col none lg:border"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <ChatMainHeader />
      <ChatMainBody chats={chats} />
      <ChatMainInput handleChatAddition={handleChatAddition} />
    </div>
  );
}

export default ChatMainSection;
