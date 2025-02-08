import ChatList from "./ChatList"
import ContactList from "./ContactList"
interface PropsType{
    chatlist:boolean,
    contactList:boolean
}
const ListSidebar:React.FC<PropsType>=({chatlist,contactList})=>{
    return(
        <div>
            {chatlist==true? <ChatList/>  : <ContactList/>}
        </div>
    )
}
export default ListSidebar