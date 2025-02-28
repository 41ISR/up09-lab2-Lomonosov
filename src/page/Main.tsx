import { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import useUserStore from "../lib/UserStore";
import useMessageStore from "../lib/MessageStore";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const Main = () => {
  const { user } = useUserStore();
  const { messages, addMessage, setMessages } = useMessageStore();
  const [message, setMessage] = useState<string>("");
  const [recipientId, setRecipientId] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      socket.emit("register", user.id);
      fetchMessageHistory(user.id);
    }

    socket.on("private_message", (data) => {
      addMessage(data);
    });

    return () => {
      socket.off("private_message");
    };
  }, [user]);

  const fetchMessageHistory = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/messages/${id}`);
      setMessages(response.data);
    } catch (error) {
      console.error("Ошибка при получении истории сообщений:", error);
    }
  };

  const handleSendMessage = () => {
    if (recipientId && message) {
      const timestamp = new Date().toISOString();
      socket.emit("private_message", { to: recipientId, message, timestamp });
      addMessage({ from: user?.id || "я", to: recipientId, message, timestamp });
      setMessage("");
    }
  };

  const handleSelectUser = (id: string) => {
    setSelectedUser(id);
    setRecipientId(id);
    fetchMessageHistory(user?.id || "");
  };

  const filteredMessages = messages.filter(
    (msg) =>
      (msg.from === user?.id && msg.to === selectedUser) ||
      (msg.from === selectedUser && msg.to === user?.id)
  );

  return (
    <div className="flex flex-col h-screen">
      <Sidebar onSelectUser={handleSelectUser} />
      <div className="flex-1 p-4">
        {selectedUser && (
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-bold">Чат с {selectedUser}</h2>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border rounded p-2 w-full"
              />
              <button onClick={handleSendMessage} className="mt-2 bg-blue-500 text-white rounded p-2">
                Отправить
              </button>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Сообщения</h2>
              <ul className="list-disc pl-5">
                {filteredMessages.map((msg, index) => (
                  <li key={index} className="mt-1">
                    {msg.from} ({new Date(msg.timestamp).toLocaleTimeString()}): {msg.message}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
