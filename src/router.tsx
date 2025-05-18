import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {History,Login,Register, Home} from "./pages";
import { HomeLogin } from "./pages/homeLogin";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
    },
    {
        path:"/login",
        element:<Login/>,
    },
    {
        path:"/register",
        element:<Register/>,
    },
    {
        path:"/homelogin",
        element:<HomeLogin/>,
    },
    {
        path:"/history",
        element:<History/>,
    }
]);

export function Routes() {
    return<RouterProvider router={router}/>
    
}