import { useEffect, useState } from "react"
import useUserStore from "../lib/UserStore"
import useMessageStore from "../lib/MessageStore"
import io from "socket.io-client"

const socket = io("http://localhost:3000", {
    withCredentials: true,
    transports: ["websocket", "polling"],
})

const Sidebar = ({ onSelectUser }: { onSelectUser: (id: string) => void }) => {
    const [activeTab, setActiveTab] = useState<"chats" | "users">("chats")
    const [activeChats, setActiveChats] = useState<string[]>([])
    const { users, setUsers } = useUserStore()
    const { messages } = useMessageStore()

    useEffect(() => {
        socket.on("users", (newUsers) => {
            setUsers(newUsers)
        })

        return () => {
            socket.off("users")
        }
    }, [setUsers])

    useEffect(() => {
        setActiveChats([...new Set(messages.map((msg) => msg.from))])
    }, [messages])

    return (
        <div className="sidebar bg-gray-800 text-white w-64 h-screen">
            <div className="tabs flex justify-around p-4">
                <button 
                    className={`p-2 ${activeTab === "chats" ? "bg-blue-500" : "bg-gray-700"}`} 
                    onClick={() => setActiveTab("chats")}
                >
                    Чаты
                </button>
                <button 
                    className={`p-2 ${activeTab === "users" ? "bg-blue-500" : "bg-gray-700"}`} 
                    onClick={() => setActiveTab("users")}
                >
                    Пользователи
                </button>
            </div>
            <div className="content p-4">
                {activeTab === "chats" ? (
                    <div>
                        <h2 className="text-lg font-bold">Чаты</h2>
                        <ul className="list-disc pl-5">
                            {activeChats.map((msg, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer hover:text-blue-400"
                                    onClick={() => onSelectUser(msg)}
                                >
                                    {msg}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-lg font-bold">Пользователи</h2>
                        <ul className="list-disc pl-5">
                            {users.map((user) => (
                                <li
                                    key={user.id}
                                    className="cursor-pointer hover:text-blue-400"
                                    onClick={() => onSelectUser(user.id)}
                                >
                                    {user.id}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sidebar
