interface MessageInChatType{
    foreign:boolean,
    message:string
}

const Message:React.FC<MessageInChatType> = ({foreign,message}) => {
    return (
        <div className={foreign?"message message-foreign":"message"}>
            <p>{message}</p>
        </div>
    )
}
export default Message