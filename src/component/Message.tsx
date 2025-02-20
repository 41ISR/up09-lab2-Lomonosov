import { useState, useEffect } from "react";
interface MessageProps {
    userId: string;
    message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => {
    const [messageUserId, setMessageUserId] = useState('')

    return (
        <div className="border border-black rounded-lg p-2 bg-white" >
            <p>{message}</p>
        </div>
    );
}

export default Message;