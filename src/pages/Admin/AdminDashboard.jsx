import { getAllBlogs } from "api/APIs";
import AdminBlogOverviewCharts from "components/Admin/AdminBlogOverviewCharts";
import AdminBlogTable from "components/Admin/AdminBlogTable";
import useFetchData from "hooks/useFetchData";
import React, { useState } from "react";

const AdminDashboard = () => {
  const [page, setPage] = useState(1);
  const { data } = useFetchData(["blogs", page], getAllBlogs);
  return (
    <div className="admin-dashboard-container bg-light">
      <AdminBlogOverviewCharts />
      {data && <AdminBlogTable blogLists={data.data.content} />}
    </div>
  );
};

export default AdminDashboard;
