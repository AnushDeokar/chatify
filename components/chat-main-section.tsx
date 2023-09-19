import ChatMainHeader from "./chat-main-header"
import ChatMainInput from "./chat-main-input"
import ChatMainBody from "./chat-main-body"

function ChatMainSection() {
  return (
    <div className="w-full hidden justify-center lg:block border flex flex-col none lg:border  h-screen">
        <ChatMainHeader/>
        <ChatMainBody/>
        <ChatMainInput/>
    </div>
  )
}

export default ChatMainSection