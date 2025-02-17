import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "../page/LogIn";
import Main from "../page/Main";
import Auth from "../page/Auth";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Auth />,
        children: [
            { path: "", element: <Main /> }
        ]
    },
    {
        path: "/login",
        element: <LogIn />,
    },
]);
const Routing = () => {
    return (
        <RouterProvider router={router} />
    );
};
export default Routing;
