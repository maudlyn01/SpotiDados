import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  History,
  Homelogin,
  Login,
  Register,
  Home,
  SplashingScreen,
  User,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashingScreen />,
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
    path: "/homelogin",
    element: <Homelogin />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user",
    element: <User id={""} name={""} email={""} />,
  },
  
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
