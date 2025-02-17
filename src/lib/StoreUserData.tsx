import { create } from "zustand";
import io from "socket.io-client";

const socket = io("", {
  withCredentials: true,
  transports: ["websocket", "polling"]
});

interface UserDataType {
  id: string;
}

interface UserStore {
  userIdStore: UserDataType | null;
  setUserIdStore: (user: UserDataType) => void;
  initializeUserId: () => void;
}

const useStoreUserData = create<UserStore>((set) => ({
  userIdStore: null,
  setUserIdStore: (user) => set({ userIdStore: user }),
  initializeUserId: () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      set({ userIdStore: { id: userId } });
    }
  },
}));


useStoreUserData.getState().initializeUserId();

socket.on('https://api.ktkv.dev/', (userId: string) => {
  if (userId) {
    const user = { id: userId };
    useStoreUserData.getState().setUserIdStore(user);
    localStorage.setItem('userId', userId);
  }
});

export default useStoreUserData;
