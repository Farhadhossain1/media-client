import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import AboutSection from "../Pages/AboutSection/AboutSection";
import Home from "../Pages/Home/Home/Home";
import Media from "../Pages/Media/Media";
import Login from "../Shared/Login/Login";
import Signup from "../Shared/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/media',
            element: <PrivateRoute><Media></Media></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
            path: '/about',
            element: <AboutSection></AboutSection>
        }
    ]
}
])
export default router;