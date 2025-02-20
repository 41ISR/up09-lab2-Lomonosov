import React, { useEffect } from 'react';
import useStoreUser from '../lib/StoreUserData';
import useStoreActiveChat from '../lib/StoreActiveChat';

const ChatList: React.FC = () => {
    const { chats} = useStoreActiveChat(); // Извлекаем chats и setActiveChat
    const { userIdStore } = useStoreUser();


    useEffect(() => {
        console.log(userIdStore);
    }, [userIdStore]);

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">Список Чатов</h2>
            <ul className="mt-4">
                {chats.map((chat, index) => (
                    <li key={index} className="border border-gray-300 rounded p-2 mb-2 ">
                        <span>{chat.toUserId}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatList;
