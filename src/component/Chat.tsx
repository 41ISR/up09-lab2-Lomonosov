import Message from "./Message";
import MessageForm from "./MessageForm";
import useStoreChat from "../lib/StoreUserChat";
const Chat = () => {
  const {chats} = useStoreChat()
  return (
    <div className="col-start-2 col-span-3 row-start-1 row-end-6 h-auto">
      {chats.map(chat => (
        chat.messages.map(message => (
          <Message userId={message.userId} message={message.message}/>
        ))
      ))}
      <MessageForm />
    </div>
  );
};

export default Chat;
