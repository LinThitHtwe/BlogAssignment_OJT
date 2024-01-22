import React, { useState } from "react";
import BlogConfirmModel from "./BlogConfirmModel";
import { useMutation } from "react-query";
import toast from "react-hot-toast";

const AdminBlogTable = ({ blogLists }) => {
  const [shouldModelOpen, setShouldModelOpen] = useState(false);

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

  const handleEditClick = (id, status) => {};

  return (
    <div className="p-3 bg-white">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Date In</th>
            <th scope="col">Category</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {blogLists &&
            blogLists.map((blog) => (
              <tr key={blog._id}>
                <td>{blog.creator.username}</td>
                <td className="text-secondary"> 18-Dec-2023</td>
                <td className="text-secondary">
                  {blog.categories.map((category) => (
                    <span key={category._id}>{category.name}</span>
                  ))}
                </td>
                <td
                  className={`${getStatusClass(
                    blog.status
                  )} text-capitalize fw-bolder`}
                >
                  {blog.status}
                </td>
                <td className="">
                  {blog.status == "pending" ? (
                    <i
                      onClick={() => setShouldModelOpen(true)}
                      className="fa-solid fa-pencil text-secondary"
                    ></i>
                  ) : (
                    ""
                  )}
                </td>
                {shouldModelOpen && (
                  <BlogConfirmModel
                    setShouldModelOpen={setShouldModelOpen}
                    shouldModelOpen={shouldModelOpen}
                    id={blog._id}
                  />
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBlogTable;
