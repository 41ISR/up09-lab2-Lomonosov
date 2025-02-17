import Chat from "../component/Chat"
import Sidebar from "../component/Sidebar"
import useStoreUserData from "../lib/StoreUserData"
import useStoreActiveChat from "../lib/StoreActiveChat"
const Main=()=>{
   const {activeChatId} = useStoreActiveChat()
    return(
         <div className="grid grid-cols-4 grid-rows-1">
          <Sidebar />
          {activeChatId && (<Chat />)}
       </div>
    )
}

export default Main 