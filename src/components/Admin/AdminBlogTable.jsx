import React from "react";
import { Link, NavLink } from "react-router-dom";

const AdminBlogTable = () => {
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
          <tr>
            <td>John</td>
            <td>18-Dec-2023</td>
            <td>Knowledge</td>
            <td className="text-primary">Accepted</td>
            <td className="d-flex justify-content-around">
              <span className="text-secondary">
                <i className="fa-solid fa-pencil"></i>
              </span>
              <span className="text-warning">
                <i className="fa-solid fa-trash"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <Link>Jane </Link>
            </td>
            <td>18-Dec-2023</td>
            <td>IT</td>
            <td className="text-primary">Accepted</td>
            <td className="d-flex justify-content-around">
              <span className="text-secondary">
                <i className="fa-solid fa-pencil"></i>
              </span>
              <span className="text-warning">
                <i className="fa-solid fa-trash"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <Link>Jane </Link>
            </td>
            <td>18-Dec-2023</td>
            <td>Knowledge</td>
            <td className="text-danger">Rejected</td>
            <td className="d-flex justify-content-around">
              <span className="text-secondary">
                <i className="fa-solid fa-pencil"></i>
              </span>
              <span className="text-warning">
                <i className="fa-solid fa-trash"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <Link>Jane </Link>
            </td>
            <td>18-Dec-2023</td>
            <td>IT</td>
            <td className="text-primary">Accepted</td>
            <td className="d-flex justify-content-around">
              <span className="text-secondary">
                <i className="fa-solid fa-pencil"></i>
              </span>
              <span className="text-warning">
                <i className="fa-solid fa-trash"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <Link>Jane </Link>
            </td>
            <td>18-Dec-2023</td>
            <td>Knowledge</td>
            <td className="text-warning">Pending</td>
            <td className="d-flex justify-content-around">
              <span className="text-secondary">
                <i className="fa-solid fa-pencil"></i>
              </span>
              <span className="text-warning">
                <i className="fa-solid fa-trash"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <Link>Jane </Link>
            </td>
            <td>18-Dec-2023</td>
            <td>IT</td>
            <td className="text-primary">Accepted</td>
            <td className="d-flex justify-content-around">
              <span className="text-secondary">
                <i className="fa-solid fa-pencil"></i>
              </span>
              <span className="text-warning">
                <i className="fa-solid fa-trash"></i>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminBlogTable;
