"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import DesktopSideBar from "@/components/desktop-sidebar";
import ChatUsersList from "@/components/chat-users-list";
import { useEffect, useState } from "react";
import { User } from "@/interfaces/User";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Spinner } from "@nextui-org/react";
import ChatMainSection from "@/components/chat-main-section";

export default function layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [chatUser, setChatUser] = useState<User | null>(null);
  const [sidebaroption, setSideBarOption] = useState<Number>(0);
  const [chatlist, setChatList] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleClick: (arg: User) => void = (clickedUser) => {
    console.log(clickedUser);
    if (clickedUser.id !== chatUser?.id) {
      setChatUser(clickedUser);
      router.push(`/chat/${clickedUser.id}`);
    }
  };

  useEffect(() => {
    const fetchLatestChats = async () => {
      const res = await axios.get("/api/chat");
      if (res.data.success) {
        // Create sets to collect unique userIds and users
        const uniqueUsers: any[] = [];
        const recentChats = res.data.chatlist;

        // Loop through the response and add userIds and users to sets
        recentChats.forEach((conversation: any) => {
          conversation.users.forEach((user: any) => {
            const existingUser = uniqueUsers.find((u) => u.name === user.name);
            if (!existingUser) {
              uniqueUsers.push(user);
            }
          });
        });

        // Convert sets back to arrays
        const finalusers = uniqueUsers.filter((user, id) => {
          if (session?.user.id !== user.id) {
            return user;
          }
        });
        setChatList(finalusers);
        setLoading(false);
      }
    };
    fetchLatestChats();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center">
        <div className="m-auto">
          <Spinner size="lg" label="Fetching Chats..." />
        </div>
      </div>
    );
  }
  const isChat = window.location.pathname === "/chat" ? true : false;
  console.log("isChat", isChat);
  return (
    <div className="h-screen flex overflow-x-hidden">
      <DesktopSideBar
        option={sidebaroption}
        handleOptionChange={(i: Number) => setSideBarOption(i)}
      />
      <div className="grow w-full h-screen chat main_chat">
        <div
          className={`pt-6 grow-4 h-screen overflow-y-auto ${
            isChat ? "block" : "hidden"
          } lg:block`}
          style={{ flexGrow: "4" }}
        >
          <ChatUsersList
            option={sidebaroption}
            chatlist={chatlist}
            handleClick={handleClick}
          />
        </div>
        {/* <ChatMainSection/> */}
        {children}
      </div>
    </div>
  );
}
