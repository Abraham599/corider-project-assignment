import { useState } from 'react';
import Attach from "./Attach";
import Send from "./Send";
import Corner from './Corner';
import Camera from './Camera';
import Video from './Video';
import Doc from './Doc';
import { useSetRecoilState } from 'recoil';
import { ChatAtom } from './store/atom/ChatAtom';

interface ChatInterface {
    id: string;
    message: string;
    sender: {
      image: string;
      self:boolean;
    };
  }

const Input = () => {
    const [showAttach, setShowAttach] = useState(false);
    const [msg,setMsg] = useState("");
    const setChats = useSetRecoilState(ChatAtom);

    const handleAttach = () => {
        setShowAttach(prevState => !prevState);
    };

    const handleSend = () => {
        const newChatMessage: ChatInterface = {
            id: '', 
            message: msg,
            sender: {
                image: 'image-url',
                self:true

            },
        };    
        setChats((prevChats) => [...prevChats, newChatMessage]);
        setMsg("");

    }

    return (
        <div className="w-full relative mt-6">
            <div className="w-full h-[58px] pt-4 px-4 relative">
                <div className="max-w-[calc(100%-8px)] relative">
                    <input type="text" placeholder="Reply to @Rohit Yadav" value={msg} onChange={(e)=>setMsg(e.target.value)} className="px-[12px] py-[11px] gap-[16px] w-full h-[42px] bg-[#FFFFFF] rounded-[8px] leading-[18px]" />
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                        <div className="flex flex-row items-center space-x-4">
                            <button onClick={handleAttach}>
                                <Attach />
                            </button>
                            <button onClick={handleSend}>
                            <Send />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showAttach && <ChatBubble />}
        </div>
    );
}

const ChatBubble = () => {
    return (
        <div className="relative ">
            <div className="absolute right-4 -translate-y-[95px] w-[124px] h-[44px] rounded-[999px] px-[12px] py-[16px] flex bg-[#008000] flex flex-row items-center justify-between">
                <div className=''><Camera/></div>
                <div className=''><Video/></div>
                <div className=''><Doc/></div>

               <div className='absolute bottom-0 left-1/2 transform -translate-x-[15px] -translate-y-[1px] w-0 h-0'>
                    <Corner/>
               </div>
            </div>
        </div>
    );
}

export default Input;
