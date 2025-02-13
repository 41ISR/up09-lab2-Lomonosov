import ListSidebar from "./ListSidebar";
import { useState } from "react";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [chatlist, setChatlist] = useState<boolean>(false);
  const [contactList, setContactList] = useState<boolean>(false);

  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-6 w-full h-screen bg-stone-500">
      <div className="flex  items-center justify-center gap-20 mt-4">
        <button className="w-24 border border-black rounded-lg p-2 cursor-pointer" onClick={() => {setChatlist(true),setContactList(false)}}>
          Чаты
        </button>
        <button className="w-24 border border-black rounded-lg p-2 cursor-pointer" onClick={() => {setContactList(true),setChatlist(false) }}>
          Контакты
        </button>
      </div>
     <ListSidebar chatlist={chatlist} contactList={contactList} /> 
    </div>
  );
};

export default Sidebar;
