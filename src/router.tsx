import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  History,
  Homelogin,
  Login,
  Register,
  Home,
  User,
  SplashingScreen,
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
  {
    path: "/history",
    element: <History />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
