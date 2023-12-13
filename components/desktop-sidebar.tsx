"use client";
import React from "react";
import { BsChatFill, BsPeopleFill, BsFillChatDotsFill } from "react-icons/bs";
import { RiLogoutBoxLine } from "react-icons/ri";
import { signOut } from "next-auth/react";

function DesktopSideBar({
  option,
  handleOptionChange,
}: {
  option: Number;
  handleOptionChange: (i: Number) => void;
}) {
  // Rest of your component code

  const hover = true;
  return (
    <div className="w-16 px-4 hidden md:flex h-full flex flex-col items-center border-r border-gray-200 gap-4">
      <div
        className={`w-12 h-12 border-0 rounded-md flex flex-col cursor-pointer justify-center mt-4 ${
          option == 0 && "bg-gray-200"
        }`}
        onClick={() => handleOptionChange(0)}
      >
        <BsChatFill
          size={25}
          style={{ color: `${option == 0 ? "black" : "gray"}`, margin: "auto" }}
        />
      </div>
      <div
        className={`w-12 h-12 border-0 rounded-md flex flex-col cursor-pointer justify-center ${
          option == 1 && "bg-gray-200"
        }`}
        onClick={() => handleOptionChange(1)}
      >
        <BsPeopleFill
          size={25}
          style={{ color: `${option == 1 ? "black" : "gray"}`, margin: "auto" }}
        />
      </div>
      <div
        className={`w-12 h-12 border-0 rounded-md flex flex-col cursor-pointer justify-center ${
          option == 2 && "bg-gray-200"
        }`}
        onClick={() => handleOptionChange(2)}
      >
        <BsFillChatDotsFill
          size={25}
          style={{ color: `${option == 2 ? "black" : "gray"}`, margin: "auto" }}
        />
      </div>

      <div
        className="w-12 h-12 border-0 rounded-md flex flex-col cursor-pointer justify-center mt-auto"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        <RiLogoutBoxLine size={25} style={{ color: "gray", margin: "auto" }} />
      </div>
    </div>
  );
}

export default DesktopSideBar;
