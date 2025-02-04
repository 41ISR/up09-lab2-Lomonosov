const MessageInChat = () => {
    return (
        <div className="chatContainer">
            <div className="message">
                <p>То самое сообщение</p>
            </div>
            <div className="message message--foreign">
                <p>То самое сообщение</p>
            </div>
            <Message foreign={true}>
                То самое сообщение
            </Message>
            <div className="my-message">
                <p>То самое сообщение</p>
            </div>
            <div className="theirs-message">
                <p>То самое сообщение</p>
            </div>
            <div className="my-message">
                <p>То самое сообщение</p>
            </div>
        </div>
    )
}
export default MessageInChat