import useStoreChat from "../lib/StoreUserChat"
import useStoreUser from "../lib/StoreUserData"

interface MessageProps {
    message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => {
    const { userIdStore } = useStoreUser();
    const { getChatMessages } = useStoreChat();
    const messages = getChatMessages(userIdStore?.id || null) || [];

    return (
        <div className="border border-black rounded-lg p-2 bg-white">
            <p>{messages.map((msg) => msg.message)}</p>
        </div>
    );
}

export default Message;