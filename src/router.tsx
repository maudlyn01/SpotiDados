import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login, Register, User, History } from "./pages";

const router = createBrowserRouter ([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:"/login",
    element: <Login />,
  },
  {
    path:"/register",
    element: <Register />,
  },
  {
    path:"/user",
    element: <User />,
  },
  {
    path:"/history",
    element: <History />,
  },
])

export const Routes = () => {
  return <RouterProvider router={router} />;
}