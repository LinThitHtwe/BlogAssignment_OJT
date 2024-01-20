import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const AdminBlogTable = () => {
  const [shouldModelOpen, setShouldModelOpen] = useState(false);
  return (
    <div className="p-3 bg-white">
      <Button variant="primary">Launch demo modal</Button>
      <Modal
        show={shouldModelOpen}
        centered
        onHide={() => setShouldModelOpen(false)}
      >
        <Modal.Header closeButton>Change Status</Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center gap-3">
          <Button
            variant="primary"
            className="w-50"
            onClick={() => setShouldModelOpen(false)}
          >
            Accept
          </Button>
          <Button
            variant="danger"
            className="w-50"
            onClick={() => setShouldModelOpen(false)}
          >
            Reject
          </Button>
          <Button
            variant="outline-secondary"
            className="w-50"
            onClick={() => setShouldModelOpen(false)}
          >
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
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
              <span
                className="text-secondary"
                onClick={() => setShouldModelOpen(true)}
              >
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
