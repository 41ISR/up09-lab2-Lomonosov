import { create } from "zustand"

interface MessageData {
    userId: string;
    message: string;
    time: Date;
}

interface Chat {
    id: string; 
    messages: MessageData[]; 
    userId1: string;
    userId2: string;
}

interface StoreChat {
    chats: Chat[];
    addChat: (userId1: string, userId2: string) => void;
}

const generateId = () => Date.now().toString();

const useStoreChat = create<StoreChat>((set) => ({
    chats: [],
    addChat: (userId1, userId2) => {
        const chatId = generateId();
        const newChat: Chat = { 
            id: chatId, 
            messages: [],
            userId1,
            userId2
        };
        set((state) => ({ chats: [...state.chats, newChat] }));
    },
}));

export default useStoreChat