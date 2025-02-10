import {create} from "zustand"

interface UserDataType {
    id: string;
}

interface UserStore {
    userIdStore: UserDataType | null; 
    setuserIdStore: (user: UserDataType) => void; 
}

const useStoreUserData = create<UserStore>((set) => ({
    userIdStore: null,
    setuserIdStore: (id) => set({ userIdStore: id }), 
}));

export default useStoreUserData