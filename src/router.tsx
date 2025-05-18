import { createBrowserRouter, RouterProvider } from "react-router-dom";
<<<<<<< HEAD
import {Home,History,Homelogin,Login,Register, SplashingScreen} from "./pages";

const router = createBrowserRouter([
    {
    path: "/",
    element: <SplashingScreen/>,
  },
    {
        path:"/home",
        element:<Home/>,
=======
import { History, Login, Register, Home, User, SplashingScreen } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SplashingScreen />,
>>>>>>> maud
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
<<<<<<< HEAD
        path:"/homelogin",
        element:<Homelogin/>,
    },
    {
        path:"/history",
        element:<History/>,
=======
        path: "/register",
        element: <Register />,
    },
    {
        path: "/user",
        element: <User id={""} name={""} email={""} />
    },
    {
        path: "/history",
        element: <History />,
>>>>>>> maud
    }
]);

export function Routes() {
    return <RouterProvider router={router} />

}