import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SplashingScreen, Home, Login, Register, User, History } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashingScreen />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/history",
    element: <History />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
