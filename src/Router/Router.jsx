import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root"
import Home from "../Pages/Home";
import Register from "../Pages/Auth/Register";
import Error404 from "../Components/Common/Error404";
import SignIn from "../Pages/Auth/SignIn";

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
            },
            {
                path: '/sign-in',
                element: <SignIn />
            }
        ]
    }
])

export default router