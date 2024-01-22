import { getBlogByUserId } from "api/APIs";
import useFetchData from "hooks/useFetchData";
import React from "react";

const UserBlogList = ({ userId }) => {
  const { data } = useFetchData(["user", "blog", userId], () =>
    getBlogByUserId(userId)
  );

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

      <table className="table ">
        <thead>
          <tr className="text-muted">
            <th scope="col">Title</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.blogs.map((blog) => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>
                  {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
                </td>
                <td
                  className={`${getStatusClass(blog.status)} text-capitalize`}
                >
                  {blog.status}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserBlogList;
