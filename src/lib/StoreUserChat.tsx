import {create} from "zustand"

interface ChatData{
    userId:number,
    message:string,
    time:Date
}
interface StoreChat{
    ChatData:ChatData
}