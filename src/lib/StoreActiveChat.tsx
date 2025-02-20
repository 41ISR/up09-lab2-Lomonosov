import { create } from 'zustand';

interface ChatState {
  toUserId: string; 
}

interface ActiveChatsState { 
  chats: ChatState[];
  setActiveChat: (userId: string) => void; 
}

const useStoreActiveChat = create<ActiveChatsState>((set) => ({ 
  chats: [],
  setActiveChat: (userId) => set((state) => ({
    chats: [...state.chats, { toUserId: userId }]
  }))
}));

export default useStoreActiveChat;
