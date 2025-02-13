import React from 'react';
import contacts from '../lib/contacts.json';   
import useStoreChat from '../lib/StoreUserChat';
import useStoreUser from '../lib/StoreUserData';

const ContactList: React.FC = () => {
    const { addChat } = useStoreChat();
    const { userIdStore } = useStoreUser();

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold ">Список Контактов</h2>
            <ul className='relative top-24'>
                {contacts.contacts.map((contact: any) => ( 
                    <li key={contact.userId} className="flex items-center justify-center w-40 border border-black rounded-lg p-2 cursor-pointer">
                        <strong>{contact.name}</strong>
                        <button className="border font-bold  rounded-lg p-2 cursor-pointer"
                            onClick={() => userIdStore && addChat(userIdStore.id, contact.userId)}
                            disabled={!userIdStore}
                        >
                            Создать чат
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;