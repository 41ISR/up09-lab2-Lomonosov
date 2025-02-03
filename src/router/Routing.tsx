import { Routes, Route } from "react-router-dom";
import LogIn from "../page/LogIn";
import Main from "../page/Main";
const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LogIn />} />
                <Route path="/main" element={<Main />}/>
            </Routes>
        </>
    )
}

export default Routing 