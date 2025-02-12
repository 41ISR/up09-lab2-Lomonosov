import { create } from "zustand"

interface ChatData{
    userId: string,
    message: string,
    time: Date
}

interface StoreChat{
    chats: ChatData[],
    addChat: (chat: ChatData) => void
}

const useStoreChat = create<StoreChat>((set) => ({
    chats: [],
    addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
}))

export default useStoreChat