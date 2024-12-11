import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root"
import Home from "../Pages/Home";
import Register from "../Pages/Auth/Register";
import Error404 from "../Components/Common/Error404";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error404 />,
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