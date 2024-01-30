import React, { useEffect, useState } from "react";
import BlogConfirmModel from "./BlogConfirmModel";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { getAllCategories, updateBlog } from "api/APIs";
import { Form } from "react-bootstrap";
import SessionExpiredModel from "components/SessionExpiredModel";
import useFetchData from "hooks/useFetchData";

const AdminBlogTable = ({
  blogLists,
  refetch,
  limit,
  setLimit,
  status,
  setStatus,
  setCategory,
  category,
}) => {
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [shouldModelOpen, setShouldModelOpen] = useState(false);
  const { data: categories } = useFetchData(["categories"], getAllCategories);

  const { mutate: updatedBlog } = useMutation(
    ({ id, blog }) => updateBlog(id, blog),
    {
      onSuccess: () => {
        refetch();
        toast.success("Updated Successfully");
      },
      onError: (error) => {
        if (error.response.status == 401) {
          setShouldModelOpen(true);
          return;
        }
        toast.error("Something Went Wrong");
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

  const handleLimitChange = (event) => {
    setLimit(event.target.value, 10);
  };

  console.log();

  return (
    <div className="p-3 bg-white">
      {limit && (
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center gap-2 w-100">
            <span>Blogs Per Page :</span>
            <Form.Select
              className="my-3 limit-select-box"
              aria-label="Default select example"
              onChange={handleLimitChange}
              value={limit}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </Form.Select>
            <span>Status :</span>
            <Form.Select
              className="my-3 status-select-box"
              aria-label="Default select example"
              onChange={(event) => setStatus(event.target.value)}
              value={status}
            >
              <option value="">All</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </Form.Select>
            {categories && (
              <>
                <span>Category :</span>
                <Form.Select
                  className="my-3 status-select-box"
                  aria-label="Default select example"
                  onChange={(event) => setCategory(event.target.value)}
                  value={category}
                >
                  <option value="">All</option>
                  {categories.data.map((category) => (
                    <option
                      key={category._id}
                      value={category.name}
                      className="text-capitalize"
                    >
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </>
            )}
          </div>
        </div>
      )}
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
          {blogLists.length > 0 &&
            blogLists.map((blog) => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td className="text-secondary">{blog.creator.username}</td>
                <td className="text-secondary ">
                  {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
                </td>
                <td className="d-flex flex-wrap opacity-75">
                  {blog.categories.map((category) => (
                    <span
                      className="bg-primary rounded text-white py-1 px-2 fw-bold"
                      key={category._id}
                    >
                      {category.name}
                    </span>
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
                  <i
                    onClick={() => setSelectedBlogId(blog._id)}
                    className="fa-solid fa-pencil text-secondary"
                  ></i>
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

          {blogLists.length == 0 && (
            <tr>
              <td colspan="6" className="text-center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {shouldModelOpen && <SessionExpiredModel />}
    </div>
  );
};

export default AdminBlogTable;
