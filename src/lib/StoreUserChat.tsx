import { create } from "zustand"

interface MessageData {
    userId: string;
    message: string;
    time: Date;
}

interface Chat {
    id: string; 
    messages: MessageData[]; 
}

interface StoreChat {
    chats: Chat[];
    addChat: (chat: Chat) => void;
}

const generateId = () => Date.now().toString();

const useStoreChat = create<StoreChat>((set) => ({
    chats: [],
    addChat: (chat) => set((state) => ({ chats: [...state.chats, { ...chat, id: generateId() }] })),
}));

export default useStoreChat