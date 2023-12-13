"use client";
import React, { useEffect, useState } from "react";
import { Chat } from "@/interfaces/Chat";
import { useSession } from "next-auth/react";
import { Avatar } from "@nextui-org/react";

function formatDate(inputDateString: string) {
  const inputDate = new Date(inputDateString);

  // Format the date as dd/mm/yyyy
  const formattedDate = `${inputDate.getDate()}/${
    inputDate.getMonth() + 1
  }/${inputDate.getFullYear()}`;
  return formattedDate;
}

function ChatMainBody({ chats, user }: { chats: Chat[]; user: any }) {
  const { data: session, status } = useSession();
  const [currentString, setCurrentString] = useState<string>("");

  useEffect(() => {
    // Update the state after the component has been rendered
    if (chats.length > 0) {
      setCurrentString(chats[chats.length - 1].createdAt ?? "");
    }
  }, [chats]);

  return (
    <div
      className="flex-grow h-[400px] overflow-y-scroll"
      style={{ flexGrow: "8" }}
    >
      {chats.map((chat, ind) => {
        const isSelf = chat.senderId === session?.user.id;
        const inputDateString = chat.createdAt ?? "";
        const inputDate = new Date(inputDateString);

        // Format the date as dd/mm/yyyy
        const formattedDate = `${inputDate.getDate()}/${
          inputDate.getMonth() + 1
        }/${inputDate.getFullYear()}`;

        // Format the time as hh:mm am/pm
        const hours = inputDate.getHours();
        const minutes = inputDate.getMinutes();
        const ampm = hours >= 12 ? "pm" : "am";
        const formattedTime = `${hours % 12 || 12}:${
          minutes < 10 ? "0" : ""
        }${minutes} ${ampm}`;

        const chatClass =
          chat.senderId === session?.user.id
            ? "bg-custom-blue text-white ml-auto justify-self-end"
            : "bg-gray-200";

        return (
          <React.Fragment key={ind}>
            {(ind === 0 ||
              formatDate(chats[ind].createdAt ?? "") !==
                formatDate(chats[ind - 1].createdAt ?? "")) && (
              <div className="flex justify-center text-sm">{formattedDate}</div>
            )}
            <div className={`flex my-2 w-full  ${isSelf && `justify-end`}`}>
              <div className={`flex px-2 gap-2`}>
                {!isSelf && <Avatar src={user?.image} className="w-6 h-6" />}
                <div className="flex flex-col gap-0 ">
                  <div
                    className={`relative border rounded-full px-2 py-2 flex flex-wrap ${chatClass}`}
                  >
                    {chat.text}
                  </div>
                  <p className="font-light text-xs m-auto w-full">
                    {formattedTime}
                  </p>
                </div>
                {isSelf && (
                  <Avatar src={session?.user.image ?? ""} className="w-6 h-6" />
                )}
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default ChatMainBody;
