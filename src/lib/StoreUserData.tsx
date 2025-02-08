import {create} from "zustand"

interface UserData {
    id: number;
}

interface UserStore {
    userData: UserData | null; 
    addUser: (user: UserData) => void; 
}

const useStoreUserData = create<UserStore>((set) => ({
    userData: null,
    addUser: (user) => set({ userData: user }), 
}));

export default useStoreUserData