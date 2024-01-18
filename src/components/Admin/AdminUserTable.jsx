import React from "react";
import { Link } from "react-router-dom";

const AdminUserTable = () => {
  return (
    <div className="p-3 bg-wh18-Dec-2023e">
      <table className="table">
        <thead>
          <tr className="text-muted">
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Date In</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>placeholder@gmail.com</td>
            <td>18-Dec-2023</td>
            <td className="text-primary">Accepted</td>
            <td className="d-flex justify-content-around">
              <span className="text-secondary">
                <i className="fa-solid fa-pencil"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <Link>Jane </Link>
            </td>
            <td>placeholder@gmail.com</td>
            <td>18-Dec-2023</td>
            <td className="text-primary">Accepted</td>
            <td className="d-flex justify-content-around">
              <span className="text-secondary">
                <i className="fa-solid fa-pencil"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <Link>Jane </Link>
            </td>
            <td>placeholder@gmail.com</td>
            <td>18-Dec-2023</td>
            <td className="text-danger">Rejected</td>
            <td className="d-flex justify-content-around">
              <span className="text-secondary">
                <i className="fa-solid fa-pencil"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <Link>Jane </Link>
            </td>
            <td>placeholder@gmail.com</td>
            <td>18-Dec-2023</td>
            <td className="text-primary">Accepted</td>
            <td className="d-flex justify-content-around">
              <span className="text-secondary">
                <i className="fa-solid fa-pencil"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <Link>Jane </Link>
            </td>
            <td>placeholder@gmail.com</td>
            <td>18-Dec-2023</td>
            <td className="text-warning">Pending</td>
            <td className="d-flex justify-content-around">
              <span className="text-secondary">
                <i className="fa-solid fa-pencil"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <Link>Jane </Link>
            </td>
            <td>placeholder@gmail.com</td>
            <td>18-Dec-2023</td>
            <td className="text-primary">Accepted</td>
            <td className="d-flex justify-content-around">
              <span className="text-secondary">
                <i className="fa-solid fa-pencil"></i>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserTable;
