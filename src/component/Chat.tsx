//import { useState,useEffect } from "react";
import { io } from "socket.io-client";
import Message from "./Message";
import MessageForm from "./MessageForm";

export const socket = io("https://api.ktkv.dev/", {
  withCredentials: true,
  transports: ["websocket", "polling"],
})

const Chat = () => {
  //const {chats} = useStoreChat()
  return (
    <div className="col-start-2 col-span-3 row-start-1 row-end-6 h-auto">
    </div>
  );
};

export default Chat;
