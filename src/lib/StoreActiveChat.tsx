import { create } from 'zustand';

interface ChatState {
    toUserId: string | null;
    setActiveChat: (id: string) => void;
}

const useStoreActiveChat = create<ChatState>((set) => ({
    toUserId: null,
    setActiveChat: (id: string) => set({ toUserId: id })
}));

export default useStoreActiveChat; 