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
        <div>
            <h2>Список Чатов</h2>
            <ul>
                {chats.map((chat) => {
                    const secondUser = chat.messages.find(msg => msg.userId !== userIdStore?.id);

                    return (
                        <li 
                            key={chat.id} 
                            className={`sidebar-list-item ${activeChatId === chat.id ? 'active' : ''}`} 
                            onClick={() => handleChatClick(chat.id)}
                        >
                            {secondUser && (
                                <>
                                    <div className="user-avatar"></div>
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