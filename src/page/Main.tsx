import Chat from "../component/Chat"
import Sidebar from "../component/Sidebar"
import { useEffect } from "react"
import useStoreUserData from "../lib/StoreUserData"
import useStoreActiveChat from "../lib/StoreActiveChat"
const Main=()=>{
   const {userIdStore} = useStoreUserData()
   const {activeChatId} = useStoreActiveChat()
   useEffect(()=>{
      localStorage.setItem("userId","3") 
      console.log(activeChatId)
      const response=userIdStore
      console.log(response)

   })
    return(
         <div className="grid grid-cols-4 grid-rows-1">
          <Sidebar />
          {activeChatId && (<Chat />)}
          {/*<Chat /> */}
       </div>
    )
}

export default Main 