import AdminBlogOverviewCharts from "components/Admin/AdminBlogOverviewCharts";
import AdminBlogTable from "components/Admin/AdminBlogTable";
import React, { useState } from "react";
import { Cell, Pie, PieChart, Sector } from "recharts";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container bg-light">
      <AdminBlogOverviewCharts />
      <AdminBlogTable />
    </div>
  );
};

export default AdminDashboard;
