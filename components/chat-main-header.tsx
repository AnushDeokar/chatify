import React, { use, useEffect, useState } from "react";
import { Avatar } from "@nextui-org/react";

function ChatMainHeader({ user }: { user: any }) {
  return (
    <div className="w-full h-14 px-2 py-2 flex items-center gap-4 border">
      <Avatar src={user?.image} className="w-10 h-10" />
      <h1 className="font-semibold">{user?.name}</h1>
    </div>
  );
}

export default ChatMainHeader;
