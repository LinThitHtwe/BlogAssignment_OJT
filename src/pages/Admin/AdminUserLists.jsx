import { getAllUser } from "api/APIs";
import AdminUserTable from "components/Admin/AdminUserTable";
import useFetchData from "hooks/useFetchData";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AdminUserLists = () => {
  const [page, setPage] = useState(1);
  const { data, refetch } = useFetchData(["user", page], () => getAllUser(""));

  return (
    <div className="admin-blog-list-container bg-light">
      {data && <AdminUserTable users={data.data.content} refetch={refetch} />}
      <div className="d-flex py-2 justify-content-between px-4">
        <Button variant="primary">Previous</Button>
        <Button variant="primary">Next</Button>
      </div>
    </div>
  );
};

export default AdminUserLists;
