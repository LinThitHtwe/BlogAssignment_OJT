import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserAcceptModel from "./UserAcceptModel";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { getAllUser, updateUser as updateUserAPI } from "api/APIs";
import useFetchData from "hooks/useFetchData";

const AdminUserTable = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const [page, setPage] = useState(1);
  const { data, refetch } = useFetchData(["user", page], () => getAllUser(""));
  const { mutate: updateUser } = useMutation(
    ({ id, user }) => updateUserAPI(id, user),
    {
      onSuccess: (responseData) => {
        console.log(responseData.data);
        refetch();
        toast.success("Register Successful");
      },
      onError: (error) => {
        toast.error("Something Went Wrong :(");
      },
    }
  );

  if (data) console.log("datatata------", data.data.content);

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
          {data &&
            data.data.content.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td className="text-secondary">{user.email}</td>
                <td className="text-secondary">18-Dec-2023</td>
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
                    refetch={refetch}
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
