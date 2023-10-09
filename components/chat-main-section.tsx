"use client";
import React, { useEffect } from "react";
import ChatMainHeader from "./chat-main-header";
import ChatMainInput from "./chat-main-input";
import ChatMainBody from "./chat-main-body";
import { useState } from "react";
import { User } from "@/interfaces/User";
import axios from "axios";
import { Chat } from "@/interfaces/Chat";
import { pusherClient } from "@/app/libs/pusher";

function ChatMainSection({ userchatId }: { userchatId: string | string[] }) {
  const [chats, setChats] = useState<Chat[]>([]);

  const [chatId, setChatId] = useState<string | null>(null);

  useEffect(() => {
    const fetchChat = async () => {
      const res = await axios.post("/api/chat", { userchatId: userchatId });
      if (res.data.success) {
        setChatId(res.data.chatId);
        setChats(res.data.chats);
      }
    };
    fetchChat();
  }, [userchatId]);

  useEffect(() => {
    if (chatId) {
      pusherClient.subscribe(chatId);
    }
    pusherClient.bind("messages:new", () => {
      console.log("msg received");
    });

    return () => {
      if (chatId) {
        pusherClient.unsubscribe(chatId);
      }
      pusherClient.unbind("messages:new");
    };
  }, [chatId]);

  const handleChatAddition: (chat: Chat) => void = async (chat) => {
    if (chat) {
      let updatedChats = [...chats, chat];
      const res = await axios.post("/api/message", {
        message: chat,
        chatId: chatId,
      });
      setChats(updatedChats);
    }
  };
  return (
    <div
      className="w-full hidden lg:block border flex flex-col none lg:border"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <ChatMainHeader userchatId={userchatId} />
      <ChatMainBody chats={chats} />
      <ChatMainInput handleChatAddition={handleChatAddition} />
    </div>
  );
}

export default ChatMainSection;
