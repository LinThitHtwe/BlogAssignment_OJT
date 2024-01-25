import { getBlogByUserId } from "api/APIs";
import useFetchData from "hooks/useFetchData";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserBlogList = ({ userId }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { data } = useFetchData(["user", "blog", userId, page, limit], () =>
    getBlogByUserId(userId, `page=${page}&limit=${limit}`)
  );
  if (data) console.log(data.data.totalBlogsCount);

  const getStatusClass = (status) => {
    switch (status) {
      case "approved":
        return "text-primary";
      case "pending":
        return "text-warning";
      case "rejected":
        return "text-danger";
      default:
        return "";
    }
  };

  return (
    <div className="p-4 rounded bg-white overflow-x-scroll">
      <div className="d-flex flex-column flex-md-row p-4  bg-white justify-content-between align-items-center">
        <h3>Blogs</h3>
        <span>Total Number of Blogs : {data && data.data.totalBlogsCount}</span>
      </div>

      <div className="d-flex gap-2 align-items-center">
        <label>Blogs per Page: </label>
        <Form.Select
          className="my-3 limit-select-box"
          aria-label="Default select example"
          onChange={(event) => setLimit(event.target.value, 10)}
          value={limit}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </Form.Select>
      </div>

      <table className="table ">
        <thead>
          <tr className="text-muted">
            <th scope="col">Title</th>
            <th scope="col">Created At</th>
            <th scope="col">Last Updated</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.blogs.map((blog) => (
              <tr key={blog._id}>
                <td>
                  <Link to={`/user/blog/update/${blog._id}`}>{blog.title}</Link>
                </td>
                <td>
                  {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
                </td>
                <td>
                  {new Date(blog.updatedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
                </td>
                <td
                  className={`${getStatusClass(
                    blog.status
                  )} text-capitalize fw-bold`}
                >
                  {blog.status}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {data && (
        <div className="d-flex flex-column flex-sm-row gap-3 py-3 justify-content-between px-4">
          <Button
            disabled={page < 2}
            onClick={() => setPage(page - 1)}
            variant="primary"
          >
            Previous
          </Button>
          <Button
            disabled={page * limit >= data.data.totalBlogsCount}
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

export default UserBlogList;
