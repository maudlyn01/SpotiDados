import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  History,
  HomeUser,
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
    path: "/homeUser",
    element: <HomeUser />,
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
