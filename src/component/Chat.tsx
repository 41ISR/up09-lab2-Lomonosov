import Message from "./Message";
import MessageForm from "./MessageForm";

interface MessageData {
  message: string;
}

const Chat = () => {
  const MogData: MessageData[] = [
    {
      message: "123"
    },
    {
      message: "123"
    },
    {
      message: "123"
    },
    {
      message: "123"
    },
    {
      message: "123"
    },
  ];
  return (
    <div className="col-start-2 col-end-4 row-start-1 row-end-6 h-auto">
      {MogData.map((item, index) => (
        <Message key={index}  message={item.message} />
      ))}
      <MessageForm />
    </div>
  );
};

export default Chat;
