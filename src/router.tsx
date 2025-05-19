import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  History,
  Homelogin,
  Login,
  Register,
  Home,
  SplashingScreen,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/splashingscreen",
    element: <SplashingScreen />,
  },
  {
    path: "/",
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
    path: "/history",
    element: <History />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
