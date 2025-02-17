import { create } from 'zustand';

interface ChatState {
    activeChatId: string | null;
    setActiveChat: (id: string) => void;
}

const useStoreActiveChat = create<ChatState>((set) => ({
    activeChatId: null,
    setActiveChat: (id: string) => set({ activeChatId: id })
}));

export default useStoreActiveChat; 