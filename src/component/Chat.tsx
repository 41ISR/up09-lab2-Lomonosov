import Message from "./Message";
import MessageForm from "./MessageForm";

interface MessageData {
  foreign: boolean;
  message: string;
}

const Chat = () => {
  const MogData: MessageData[] = [
    {
      foreign: true,
      message: "123",
    },
    {
      foreign: false,
      message: "123",
    },
    {
      foreign: true,
      message: "123",
    },
    {
      foreign: false,
      message: "123",
    },
    {
      foreign: true,
      message: "123",
    },
  ];
  return (
    <div className="chat">
      {MogData.map((item, index) => (
        <Message key={index} foreign={item.foreign} message={item.message} />
      ))}
      <MessageForm />
    </div>
  );
};

export default Chat;
