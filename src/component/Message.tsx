import { useState,useEffect } from "react";
interface MessageProps {
    userId: string;
    message: string;
}

const Message: React.FC<MessageProps> = ({userId,message}) => {
   const [messageUserId,setMessageUserId]=useState('')
useEffect(()=>{
    setMessageUserId(userId)
})
    return (
        <div className="border border-black rounded-lg p-2 bg-white" >
            <p>{message}</p>
        </div>
    );
}

export default Message;