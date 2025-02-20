import React, { useEffect } from 'react';
import useStoreChat from '../lib/StoreUserChat';
import useStoreUser from '../lib/StoreUserData';
import useStoreActiveChat from '../lib/StoreActiveChat';

const ChatList: React.FC = () => {
    const { messages } = useStoreChat();
    const { userIdStore } = useStoreUser();
    const {setActiveChat} =useStoreActiveChat()
    const handleChatClick = (chatId: string) => {
        setActiveChat(chatId)
        console.log(`Чат с ID ${chatId} активирован`);
    };
    useEffect(() => {
        console.log(userIdStore);
        console.log(messages)
    }, [userIdStore]); 
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">Список Чатов</h2>
            <ul>
                {messages.map((chat) => {
                    const userId = userIdStore?.id && (userIdStore.id === chat.from ? chat.to : chat.from);
                    return (
                        <li
                            key={chat.to}
                            className="flex items-center justify-center w-24 h-24 border border-black rounded-lg p-2 cursor-pointer"
                            onClick={() => handleChatClick(chat.to)}
                        >
                            {userId}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ChatList;
