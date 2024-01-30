import { getAllUser } from "api/APIs";
import AdminUserTable from "components/Admin/AdminUserTable";
import useFetchData from "hooks/useFetchData";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AdminUserLists = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [searchUsername, setSearchUsername] = useState("");
  const [status, setStatus] = useState("");

  const { data, refetch } = useFetchData(
    ["user", page, limit, status, searchUsername],
    () =>
      getAllUser(
        `skip=${page}&limit=${limit}&status=${status}&username=${searchUsername}`
      )
  );

  return (
    <div className="admin-blog-list-container bg-light">
      {data && (
        <AdminUserTable
          users={data.data.content}
          refetch={refetch}
          limit={limit}
          setLimit={setLimit}
          status={status}
          setStatus={setStatus}
          searchUsername={searchUsername}
          setSearchUsername={setSearchUsername}
        />
      )}
      {data && (
        <div className="d-flex py-2 justify-content-between px-4">
          <Button
            disabled={page < 2}
            onClick={() => setPage(page - 1)}
            variant="primary"
          >
            Previous
          </Button>
          <Button
            disabled={page * limit >= data.data.totalCount}
            onClick={() => setPage(page + 1)}
            variant="primary"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default AdminUserLists;
