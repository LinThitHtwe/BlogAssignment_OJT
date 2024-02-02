import { getAllBlogs } from "api/APIs";
import AdminBlogOverviewCharts from "components/Admin/AdminBlogOverviewCharts";
import AdminBlogTable from "components/Admin/AdminBlogTable";
import useFetchData from "hooks/useFetchData";
import React, { useState } from "react";

const AdminDashboard = () => {
  const { data, refetch } = useFetchData(["blogs-overview"], () =>
    getAllBlogs("")
  );
  return (
    <div className="admin-dashboard-container bg-light">
      <AdminBlogOverviewCharts />
      {data && (
        <AdminBlogTable
          blogLists={data.data.content.slice(0, 5)}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
