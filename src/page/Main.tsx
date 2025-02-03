import Chat from "../component/Chat"
import Sidebar from "../component/Sidebar"

const Main=()=>{
    return(
       <div className="main">
          <Sidebar />
          <Chat />
       </div>
    )
}

export default Main 