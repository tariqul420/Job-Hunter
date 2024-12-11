import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root"
import Home from "../Pages/Home";
import Register from "../Pages/Auth/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: "Page is not Found",
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router