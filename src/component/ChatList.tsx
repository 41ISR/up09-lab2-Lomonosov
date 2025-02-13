import React, { useState } from 'react';
import useStoreChat from '../lib/StoreUserChat';
import useStoreUser from '../lib/StoreUserData'; 

const ChatList: React.FC = () => {
    const { chats } = useStoreChat();
    const { userIdStore } = useStoreUser();
    const [activeChatId, setActiveChatId] = useState<string | null>(null);

    const handleChatClick = (chatId: string) => {
        setActiveChatId(chatId);
        console.log(`Чат с ID ${chatId} активирован`);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">Список Чатов</h2>
            <ul>
                {chats.map((chat) => {
                    const secondUser = chat.messages.find(msg => msg.userId !== userIdStore?.id);

                    return (
                        <li 
                            key={chat.id} 
                            className={'flex items-center justify-center w-24 border border-black rounded-lg p-2 cursor-pointer'} 
                            onClick={() => handleChatClick(chat.id)}
                        >
                            {secondUser && (
                                <>
                                    <strong>{secondUser.userId}</strong> 
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ChatList;