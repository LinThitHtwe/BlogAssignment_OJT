import React from "react";
import { useState } from "react";
import UserAcceptModel from "./UserAcceptModel";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { updateUser as updateUserAPI } from "api/APIs";
import { Button, Form, FormControl } from "react-bootstrap";

const AdminUserTable = ({
  users,
  refetch,
  limit,
  setLimit,
  status,
  setStatus,
  searchUsername,
  setSearchUsername,
}) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { mutate: updateUser } = useMutation(
    ({ id, user }) => updateUserAPI(id, user),
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

  const handleChooseStatus = (id, status) =>
    updateUser({ id, user: { status } });

  const handleLimitChange = (event) => {
    setLimit(event.target.value, 10);
  };

  const handleUsernameSearch = (event) => {
    event.preventDefault();
    console.log(event.target.elements.searchUsername.value);
    setSearchUsername(event.target.elements.searchUsername.value);
  };

  return (
    <div className="p-3 bg-white">
      {limit && (
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-2 w-100">
            <span>Users Per Page :</span>
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
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
            </Form.Select>
          </div>
          <Form
            className="d-flex gap-2 align-items-center"
            onSubmit={handleUsernameSearch}
          >
            <Form.Group controlId="searchUsername">
              <FormControl type="text" placeholder="Search Names" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="table-search-btn"
            >
              Search
            </Button>
            {searchUsername && (
              <Button
                variant="outline-secondary"
                className="table-search-btn"
                onClick={() => setSearchUsername("")}
              >
                Reset
              </Button>
            )}
          </Form>
        </div>
      )}
      <table className="table">
        <thead>
          <tr className="">
            <th scope="col ">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Date In</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td className="text-secondary">{user.email}</td>
                <td className="text-secondary">
                  {new Date(user.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
                </td>
                <td
                  className={`fw-bold text-capitalize ${
                    user.status === "active" ? "text-success" : "text-danger"
                  }`}
                >
                  {user.status}
                </td>

                <td className="d-flex justify-content-around">
                  <span
                    className="text-secondary"
                    onClick={() => {
                      setSelectedUserId(user._id);
                    }}
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </span>
                </td>
                {selectedUserId === user._id && (
                  <UserAcceptModel
                    setShouldModelOpen={(value) => {
                      if (!value) {
                        setSelectedUserId(null);
                      }
                    }}
                    shouldModelOpen={true}
                    id={user._id}
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

export default AdminUserTable;
