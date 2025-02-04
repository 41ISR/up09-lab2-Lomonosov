import MessageForm from "./MessageForm"
import MessageInChat from "./MessageInChat"

const Chat=()=>{
    return(
        <div className="chat">
             <MessageInChat />
             <MessageForm />
        </div>
    )
}
export default Chat 