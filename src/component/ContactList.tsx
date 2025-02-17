import { io } from "socket.io-client";
import { useState, useEffect } from 'react';
import useStoreChat from '../lib/StoreUserChat';
import useStoreUser from '../lib/StoreUserData';
import useUsersData from "../lib/StoreUsersData";


const socket = io("https://api.ktkv.dev/", {
    withCredentials: true,
    transports: ["websocket", "polling"],
})
const ContactList: React.FC = () => {

    const { addChat } = useStoreChat();
    const { userIdStore } = useStoreUser();
    const { users, setUsers } = useUsersData()

    useEffect(() => {
        socket.on("users", (newUsers) => {
            setUsers(newUsers)
        })

        return () => {
            socket.off("users")
            console.log("Users array on unmount:", users);
        }
    }, [users]); 

    useEffect(() => {
        console.log("Users array after update:", users);
    }, [users]);
  
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold ">Список Контактов</h2>
            <ul className='relative top-24'>
                {users && users
                    .filter(user => user.socketId && userIdStore?.id !== user.id)
                    .map((user,index) => (
                        <li key={index} className="flex items-center justify-center w-40 border border-black rounded-lg p-2 cursor-pointer">
                            <strong>{user.id}</strong>
                            <button className="border font-bold  rounded-lg p-2 cursor-pointer"
                                onClick={() => userIdStore && addChat(userIdStore.id, user.id)}
                                disabled={!userIdStore}
                            >
                                Создать чат
                            </button>
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
