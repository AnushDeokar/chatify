"use client";
import { useSession, signOut } from "next-auth/react";
import React from "react";
import { Spinner } from "@nextui-org/react";
import ChatMainSection from "@/components/chat-main-section";
import { useParams } from "next/navigation";

function page() {
  const { data: session, status } = useSession();
  const { chatId } = useParams();
  if (status === "loading") {
    return <Spinner size="lg" />;
  }

  return <ChatMainSection chatId={chatId} />;
}

export default page;
