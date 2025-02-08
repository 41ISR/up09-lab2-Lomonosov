import ListSidebar from "./ListSidebar";
import { useState } from "react";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [chatlist, setChatlist] = useState<boolean>(false);
  const [contactList, setContactList] = useState<boolean>(false);

  return (
    <div className="sidebar">
      <div className="sidebar-link">
        <button className="sidebar-chat" onClick={() => {setChatlist(true),setContactList(false)}}>
          Чаты
        </button>
        <button className="sidebar-contact" onClick={() => {setContactList(true),setChatlist(false) }}>
          Контакты
        </button>
      </div>
     <ListSidebar chatlist={chatlist} contactList={contactList} /> 
    </div>
  );
};

export default Sidebar;
