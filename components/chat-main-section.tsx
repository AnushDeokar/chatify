'use client'
import ChatMainHeader from "./chat-main-header"
import ChatMainInput from "./chat-main-input"
import ChatMainBody from "./chat-main-body"
import { useState } from "react"

interface Chat{
  text: string, 
  img: string, 
  isMine: boolean
}

function ChatMainSection() {
  const [chats, setChats] = useState<Chat[]>([{
    text: 'Hi',
    img:'',
    isMine: false
  }]);

  const handleChatAddition:(chat:Chat)=>void = (chat)=>{
    console.log(chats);
    if (chat){
      let updatedChats = [...chats, chat];
      setChats(updatedChats);
    }
  }
  return (
    <div className="w-full hidden lg:block border flex flex-col none lg:border" style={{display:"flex", flexDirection:"column"}}>
        <ChatMainHeader/>
        <ChatMainBody chats={chats}/>
        <ChatMainInput handleChatAddition={handleChatAddition}/>
    </div>
  )
}

export default ChatMainSection