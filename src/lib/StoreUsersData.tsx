import { io } from "socket.io-client";
import { create } from "zustand";

interface UserData {
    id: string;
    socketId:string
}

interface UsersDataState {
    users: UserData[];  
    setUsers: (users: UserData[]) => void;
}

const useUsersData = create<UsersDataState>((set) => ({
    users: [],
    setUsers: (users) => set({ users: users }),
}));

export default useUsersData;
