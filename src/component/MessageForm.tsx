import { useState } from 'react';
import { io } from 'socket.io-client';
import useMessageStore from "../lib/StoreUserChat";

const MessageForm = () => {
    const socket = io("https://api.ktkv.dev/"); 
    const [message, setMessage] = useMessageStore();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        if (message.trim()) {
            socket.emit("private_message", message); 
            setMessage(''); 
        }
    };
    return (
        <form className="relative top-3/4 w-full" onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                className="w-full border-2 border-black p-2" 
                placeholder="Введите ваше сообщение..."
            />
            <input 
                type="submit" 
                value=">" 
                className="absolute right-0 top-0 border-2 border-black p-2" 
            />
        </form>
    );
}

export default MessageForm;
