import React from 'react';
import contacts from '../lib/contacts.json';   
import useStoreChat from '../lib/StoreUserChat';
import useStoreUser from '../lib/StoreUserData';

const ContactList: React.FC = () => {
    const { addChat } = useStoreChat();
    const { userIdStore } = useStoreUser();

    return (
        <div>
            <h2>Список Контактов</h2>
            <ul>
                {contacts.contacts.map((contact: any) => ( 
                    <li key={contact.userId} className="contact-list-item">
                        <strong>{contact.name}</strong>
                        <button 
                            onClick={() => userIdStore?.id && addChat(userIdStore.id, contact.userId)}
                            disabled={!userIdStore?.id}
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