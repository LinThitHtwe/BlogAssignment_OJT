import { getAllBlogs } from "api/APIs";
import AdminBlogOverviewCharts from "components/Admin/AdminBlogOverviewCharts";
import AdminBlogTable from "components/Admin/AdminBlogTable";
import useFetchData from "hooks/useFetchData";
import React, { useState } from "react";
import { Cell, Pie, PieChart, Sector } from "recharts";

const AdminDashboard = () => {
  const [page, setPage] = useState(1);
  const { data } = useFetchData(["blogs", page], getAllBlogs);
  // if (data) {
  //   console.log(data.data.content);
  // }
  return (
    <div className="admin-dashboard-container bg-light">
      <AdminBlogOverviewCharts />
      {data && <AdminBlogTable blogLists={data.data.content} />}
    </div>
  );
};

export default AdminDashboard;
