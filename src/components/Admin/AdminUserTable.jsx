import React from "react";
import { useState } from "react";
import UserAcceptModel from "./UserAcceptModel";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { updateUser as updateUserAPI } from "api/APIs";

const AdminUserTable = ({ users, refetch }) => {
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

  return (
    <div className="p-3 bg-white">
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
                  {" "}
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
