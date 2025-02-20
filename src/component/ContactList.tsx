import { io } from "socket.io-client";
import { useState, useEffect } from 'react';
import useStoreUser from '../lib/StoreUserData';
import useUsersData from "../lib/StoreUsersData";
import useStoreActiveChat from "../lib/StoreActiveChat";
import { socket } from "./Chat";

const ContactList: React.FC = () => {
    const { userIdStore } = useStoreUser()
    const { users, setUsers } = useUsersData()
    const {setActiveChat}=useStoreActiveChat()
    useEffect(() => {
        socket.on("users", (newUsers) => {
            setUsers(newUsers)
        })
        return () => {
            socket.off("users")
            console.log("Users array on unmount:", users);
        }
    }, []); 
    useEffect(() => {
        console.log("Users array after update:", users);
    }, [users]);
    const handleCreateChat=(toId:string)=>{
        setActiveChat(toId)
    }
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
                                onClick={() => handleCreateChat(user.id)} 
                                disabled={!userIdStore}
                            >Создать чат</button>
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
