//import { useState,useEffect } from "react";
import Message from "./Message";
import MessageForm from "./MessageForm";
const Chat = () => {
  //const {chats} = useStoreChat()
  return (
    <div className="col-start-2 col-span-3 row-start-1 row-end-6 h-auto">
      <MessageForm />
    </div>
  );
};

export default Chat;
