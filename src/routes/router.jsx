import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import BlogDetail from "../pages/BlogDetail";
import Login from "../pages/Login";
import LoginSignupLayout from "../layout/LoginSignupLayout";
import Register from "pages/Register";
import routes from "./routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/detail",
        element: <BlogDetail />,
      },
    ],
  },
  {
    path: "/",
    element: <LoginSignupLayout />,
    children: [
      {
        path: routes.login,
        element: <Login />,
      },
      {
        path: routes.register,
        element: <Register />,
      },
    ],
  },
]);
