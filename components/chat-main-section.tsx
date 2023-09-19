import ChatMainHeader from "./chat-main-header"
import ChatMainInput from "./chat-main-input"
import ChatMainBody from "./chat-main-body"

function ChatMainSection() {
  return (
    <div className="w-full hidden lg:block border flex flex-col none lg:border" style={{display:"flex", flexDirection:"column"}}>
        <ChatMainHeader/>
        <ChatMainBody/>
        <ChatMainInput/>
    </div>
  )
}

export default ChatMainSection