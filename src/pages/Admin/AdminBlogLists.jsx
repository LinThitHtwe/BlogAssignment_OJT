import { getAllBlogs } from "api/APIs";
import AdminBlogTable from "components/Admin/AdminBlogTable";
import useFetchData from "hooks/useFetchData";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AdminBlogLists = () => {
  const [page, setPage] = useState(1);
  const { data } = useFetchData(["blogs", page], () =>
    getAllBlogs(`page=${page}`)
  );
  if (data) {
    console.log(data.data.totalCount);
  }
  return (
    <div className="admin-blog-list-container bg-light">
      {data && <AdminBlogTable blogLists={data.data.content} />}
      <div className="d-flex py-3 justify-content-between px-4">
        <Button disabled={page < 2} variant="primary">
          Previous
        </Button>
        <Button variant="primary">Next</Button>
      </div>
    </div>
  );
};

export default AdminBlogLists;
