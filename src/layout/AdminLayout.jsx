import AdminNavbar from "components/AdminNavbar";
import Sidebar from "components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="admin-outlet-container">
        <AdminNavbar />
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
