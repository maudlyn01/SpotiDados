import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home,History,Homelogin,Login,Register, SplashingScreen} from "./pages";

const router = createBrowserRouter([
    {
    path: "/",
    element: <SplashingScreen/>,
  },
    {
        path:"/home",
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
        element:<Homelogin/>,
    },
    {
        path:"/history",
        element:<History/>,
    }
]);

export function Routes() {
    return<RouterProvider router={router}/>
    
}