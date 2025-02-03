import ListSidebar from "./ListSidebar"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-link">
                <button className="sidebar-chat">Чаты</button>
                <button className="sidebar-contact">Контакты</button>
            </div>
            <ListSidebar />
        </div>
    )
}
export default Sidebar