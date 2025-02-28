import { create } from "zustand";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:3000", {
  withCredentials: true,
  transports: ["websocket", "polling"]
});


interface User {
  id: string;
}

interface UserStoreState {
  user: User | null;
  users: User[];
  setUser: (user: User) => void;
  setUsers: (users: User[]) => void;
  fetchUsers: () => void;
}

const useUserStore = create<UserStoreState>((set) => ({
  user: null,
  users: [],
  setUser: (user) => set({ user }),
  setUsers: (users) => set({ users }),
  fetchUsers: async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      set({ users: response.data });
    } catch (error) {
      console.error("Ошибка при получении пользователей:", error);
    }
  },
}));

socket.on('users', (users: User[]) => {
  useUserStore.getState().setUsers(users);
});

export default useUserStore;
