import AdminBlogTable from "components/Admin/AdminBlogTable";
import React from "react";
import { Button } from "react-bootstrap";

const AdminBlogLists = () => {
  return (
    <div className="admin-blog-list-container bg-light">
      <AdminBlogTable />
      <div className="d-flex py-3 justify-content-between px-4">
        <Button variant="primary">Previous</Button>
        <Button variant="primary">Next</Button>
      </div>
    </div>
  );
};

export default AdminBlogLists;
