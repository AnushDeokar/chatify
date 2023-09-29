"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { User } from "@/interfaces/User";
import { useRouter } from "next/navigation";

function page() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log("called");
  }, []);

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
    <div
      className="w-full hidden lg:block border flex flex-col none lg:border h-full"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h1 className="m-auto text-2xl">
        Start a new chat or reply to an existing chat🚀
      </h1>
    </div>
  );
}

export default page;
