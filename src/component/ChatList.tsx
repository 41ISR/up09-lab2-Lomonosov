import React, { useEffect } from 'react';
import useStoreChat from '../lib/StoreUserChat';
import useStoreUser from '../lib/StoreUserData';
import useStoreActiveChat from '../lib/StoreActiveChat';

const ChatList: React.FC = () => {
    const { chats } = useStoreChat();
    const { userIdStore } = useStoreUser();
    const {setActiveChat} =useStoreActiveChat()
    const handleChatClick = (chatId: string) => {
        setActiveChat(chatId)
        console.log(`Чат с ID ${chatId} активирован`);
    };

    useEffect(() => {
        console.log(userIdStore);
    }, [userIdStore]); 

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">Список Чатов</h2>
            <ul>
                {chats.map((chat) => {
                    const userId = userIdStore?.id && (userIdStore.id === chat.userId1 ? chat.userId2 : chat.userId1);
                    return (
                        <li
                            key={chat.id}
                            className="flex items-center justify-center w-24 h-24 border border-black rounded-lg p-2 cursor-pointer"
                            onClick={() => handleChatClick(chat.id)}
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
