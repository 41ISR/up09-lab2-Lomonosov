import Chat from "../component/Chat"
import Sidebar from "../component/Sidebar"
import { useEffect } from "react"
import useStoreUserData from "../lib/StoreUserData"
const Main=()=>{
   const {userIdStore} = useStoreUserData()
   useEffect(()=>{
      const response=userIdStore
      console.log(response)
   })
    return(
       <div className="main">
          <Sidebar />
          <Chat />
       </div>
    )
}

export default Main 