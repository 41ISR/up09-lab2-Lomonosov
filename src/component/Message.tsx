import useStoreUser from "../lib/StoreUserData"

interface MessageProps {
    message: string;
}

const Message: React.FC<MessageProps> = () => {
    const { userIdStore  } = useStoreUser();
    return (
        <div className="border border-black rounded-lg p-2 bg-white">
            <p></p>
        </div>
    );
}

export default Message;