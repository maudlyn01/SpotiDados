import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {History,Login,Register, Home, SplashingScreen} from "./pages";

const router = createBrowserRouter([
    {
    path: "/",
    element: <SplashingScreen />,
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
        path:"/history",
        element:<History/>,
    }
]);

export function Routes() {
    return<RouterProvider router={router}/>
    
}