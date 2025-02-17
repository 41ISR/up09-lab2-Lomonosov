import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('https://api.ktkv.dev/private_message/');

const MessageForm = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const recipientId = 'recipientId'; 
        const timestamp = new Date().toISOString();
        socket.emit('private_message', { to: recipientId, message, timestamp });
        setMessage(''); 
    };

    useEffect(() => {
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <form action="" className="relative top-3/4 w-full" onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                className="w-full border-2 border-black p-2" 
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