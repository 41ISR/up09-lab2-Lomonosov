import { Routes, Route } from "react-router-dom";
import LogIn from "../page/LogIn";
const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LogIn />} />
            </Routes>
        </>
    )
}

export default Routing 