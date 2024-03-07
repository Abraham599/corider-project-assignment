import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ChatAtom } from "./store/atom/ChatAtom";

// interface ChatInterface {
//     id: string;
//     message: string;
//     sender: {
//         image: string;
//     };
// }

const Chat = () => {
    const [chats, setChats] = useRecoilState(ChatAtom);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);

    const fetchMsg = async (page: number) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${page}`);
            const data = response.data;
            setChats((prevChats) => [...prevChats, ...data.chats]);
        } catch (err) {
            console.log("Error:", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMsg(page);
    }, [page]); 

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop} = e.currentTarget;
        if (scrollTop === 0 && !loading && page > 0) {
            setPage((prevPage) => prevPage + 1);
        }
    }

    return (
        <div className="h-[400px] overflow-y-auto scroll-smooth touch-pan-y font-mulish" onScroll={handleScroll}>
            {loading && <p>Loading...</p>}
            {chats.map((message) => (
                <div key={message.id} className={`m-4 flex flex-row space-x-2`}>
                    <div className={`order-1 ${message.sender.self ? 'ml-auto' : ''}`}>
                        {!message.sender.self && <img src={message.sender.image} alt="" className="w-[26px] h-[26px] rounded-[12px]" />}
                    </div>
                    <div className={`order-2 w-[287px] h-[70px] p-[8px] flex gap-[8px] shadow-md  ${message.sender.self ? 'rounded-s-xl rounded-se-xl font-medium bg-[#1C63D5] text-[#FFFFFF] ' : 'rounded-e-xl rounded-es-xl bg-[#FFFFFF] text-[#606060]'} overflow-auto scroll-smooth touch-pan-y`}>
                        {message.message}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Chat;
