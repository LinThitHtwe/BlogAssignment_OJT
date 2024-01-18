import AdminBlogOverviewCharts from "components/AdminBlogOverviewCharts";
import AdminBlogTable from "components/AdminBlogTable";
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
