import { Routes, Route } from "react-router-dom";
import SingUp from "../page/SingUp";
const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SingUp />} />
            </Routes>
        </>
    )
}

export default Routing 