import React from 'react';
import useStoreChat from '../lib/StoreUserChat';
import useStoreUser from '../lib/StoreUserData'; 

const ChatList: React.FC = () => {
    const { chats } = useStoreChat();
    const { userIdStore } = useStoreUser();

    return (
        <div>
            <h2>Список Чатов</h2>
            <ul>
                {chats.map((chat) => {

                    const secondUser = chat.messages.find(msg => msg.userId !== userIdStore?.id);

                    return (
                        <li key={chat.id} className="sidebar-list-item">
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