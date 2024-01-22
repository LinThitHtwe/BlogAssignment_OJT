import React, { useState } from "react";
import BlogConfirmModel from "./BlogConfirmModel";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { updateBlog } from "api/APIs";

const AdminBlogTable = ({ blogLists, refetch }) => {
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  const { mutate: updatedBlog } = useMutation(
    ({ id, blog }) => updateBlog(id, blog),
    {
      onSuccess: (responseData) => {
        refetch();
        toast.success("Register Successful");
      },
      onError: (error) => {
        toast.error("Something Went Wrong :(");
      },
    }
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

  const handleChooseStatus = (id, status) =>
    updatedBlog({ id, blog: { status } });

  return (
    <div className="p-3 bg-white">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
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
                <td>{blog.title}</td>
                <td className="text-secondary">{blog.creator.username}</td>
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
                      onClick={() => setSelectedBlogId(blog._id)}
                      className="fa-solid fa-pencil text-secondary"
                    ></i>
                  ) : (
                    ""
                  )}
                </td>
                {selectedBlogId === blog._id && (
                  <BlogConfirmModel
                    setShouldModelOpen={(value) => {
                      if (!value) {
                        setSelectedBlogId(null);
                      }
                    }}
                    shouldModelOpen={true}
                    id={blog._id}
                    action={handleChooseStatus}
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
