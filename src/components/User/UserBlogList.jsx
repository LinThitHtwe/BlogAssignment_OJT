import React from "react";
import { Link } from "react-router-dom";

const UserBlogList = () => {
  return (
    <div className="p-4 rounded bg-white overflow-x-scroll">
      <div className="d-flex flex-column flex-md-row p-4  bg-white justify-content-between align-items-center">
        <h3>Blogs</h3>
        <span>Total Number of Blogs : 20</span>
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
          <tr>
            <td>placeholder@gmail.com</td>
            <td>18-Dec-2023</td>
            <td className="text-primary">Accepted</td>
          </tr>
          <tr>
            <td>placeholder@gmail.com</td>
            <td>18-Dec-2023</td>
            <td className="text-primary">Accepted</td>
          </tr>
          <tr>
            <td>placeholder@gmail.com</td>
            <td>18-Dec-2023</td>
            <td className="text-danger">Rejected</td>
          </tr>
          <tr>
            <td>placeholder@gmail.com</td>
            <td>18-Dec-2023</td>
            <td className="text-primary">Accepted</td>
          </tr>
          <tr>
            <td>placeholder@gmail.com</td>
            <td>18-Dec-2023</td>
            <td className="text-warning">Pending</td>
          </tr>
          <tr>
            <td>placeholder@gmail.com</td>
            <td>18-Dec-2023</td>
            <td className="text-primary">Accepted</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserBlogList;
