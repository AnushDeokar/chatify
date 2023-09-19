import {MdInsertPhoto} from 'react-icons/md'
import {BsFillEmojiSmileFill, BsFillSendFill} from 'react-icons/bs'

function ChatMainInput() {
  return (
    <div className='w-full flex items-center px-4 gap-4 pb-2' >
        <MdInsertPhoto size={24} style={{color:"#0084ff"}}/>
        <div className='grow border-transparent bg-gray-100 flex items-center rounded-full bg-gray h-10 px-4'>
            <input className='outline-none bg-transparent text-sm grow' placeholder='Aa'/>
            <BsFillEmojiSmileFill size={20} style={{color:"#0084ff"}}/>
        </div>
        <BsFillSendFill size={24} style={{color:"#0084ff"}}/>
    </div>
  )
}

export default ChatMainInput