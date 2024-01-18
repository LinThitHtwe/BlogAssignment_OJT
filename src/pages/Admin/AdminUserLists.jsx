import AdminUserTable from "components/Admin/AdminUserTable";
import React from "react";
import { Button } from "react-bootstrap";

const AdminUserLists = () => {
  return (
    <div className="admin-blog-list-container bg-light">
      <AdminUserTable />
      <div className="d-flex py-2 justify-content-between px-4">
        <Button variant="primary">Previous</Button>
        <Button variant="primary">Next</Button>
      </div>
    </div>
  );
};

export default AdminUserLists;
