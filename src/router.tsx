import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {History,Login,Register, Home} from "./pages";

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
        path:"/history",
        element:<History/>,
    }
]);

export function Routes() {
    return<RouterProvider router={router}/>
    
}