"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import DesktopSideBar from "@/components/desktop-sidebar";
import ChatUsersList from "@/components/chat-users-list";
import { useEffect, useState } from "react";
import { User } from "@/interfaces/User";
import { useRouter } from "next/navigation";

export default function layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [chatUser, setChatUser] = useState<User | null>(null);
  const [sidebaroption, setSideBarOption] = useState<Number>(0);
  const chatlist = [
    {
      id: "1",
      name: "User123",
      img: "",
    },
    {
      id: "2",
      name: "User128",
      img: "",
    },
    {
      id: "3",
      name: "User129",
      img: "",
    },
  ];

  const handleClick: (arg: User) => void = (clickedUser) => {
    console.log(clickedUser);
    if (clickedUser.id !== chatUser?.id) {
      setChatUser(clickedUser);
      router.push(`/chat/${clickedUser.id}`);
    }
  };

  return (
    <div className="h-screen flex overflow-x-hidden">
      <DesktopSideBar
        option={sidebaroption}
        handleOptionChange={(i: Number) => setSideBarOption(i)}
      />
      <div className="grow w-full h-screen chat main_chat">
        <ChatUsersList
          option={sidebaroption}
          chatlist={chatlist}
          handleClick={handleClick}
        />
        {children}
      </div>
    </div>
  );
}
