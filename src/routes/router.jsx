import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import BlogDetail from "../pages/BlogDetail";
import Login from "../pages/Login";
import LoginSignupLayout from "../layout/LoginSignupLayout";
import Register from "pages/Register";
import routes from "../constants/routes";
import AdminLayout from "layout/AdminLayout";
import AdminDashboard from "pages/Admin/AdminDashboard";
import AdminBlogLists from "pages/Admin/AdminBlogLists";
import AdminUserLists from "pages/Admin/AdminUserLists";
import UserProfile from "pages/User/UserProfile";
import AddBlogForm from "pages/User/AddBlogForm";
import ProtectedUserRoutes from "layout/ProtectedUserRoutes";
import ProtectedAdminRoutes from "layout/ProtectedAdminRoutes";

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
        path: "/blog/:id",
        element: <BlogDetail />,
      },

      {
        path: "/user/profile/:id",
        element: <UserProfile />,
      },
      {
        path: "/",
        element: <ProtectedUserRoutes />,
        children: [
          {
            path: routes.userBlogCreate,
            element: <AddBlogForm />,
          },
        ],
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
  {
    path: "/admin",
    element: <ProtectedAdminRoutes />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            path: routes.adminDashboard,
            element: <AdminDashboard />,
          },
          {
            path: routes.adminBlogList,
            element: <AdminBlogLists />,
          },
          {
            path: routes.adminUserList,
            element: <AdminUserLists />,
          },
        ],
      },
    ],
  },
]);
