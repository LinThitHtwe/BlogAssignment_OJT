import routes from "constants/routes";
import React, { useState } from "react";
import { Button, Container, Modal, Nav, Navbar } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "reduxapp/features/user/userSlice";

const Sidebar = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [shouldModelAppear, setShouldModelAppear] = useState(false);

  const handleLogout = () => {
    dispatch(removeUser());
    toast.success("Logout Successfully");
    navigation("/");
  };
  return (
    <Navbar bg="white" variant="dark" className="sidebar p-0 m-0 ">
      <Navbar.Brand href="/admin/dashboard" className="text-primary pt-4">
        NORDIC ROSE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="d-flex flex-column justify-content-start gap-3 sidebar-container">
        <NavLink
          to={routes.adminDashboard}
          className={({ isActive }) =>
            isActive
              ? "bg-primary py-2 px-3 w-100 text-decoration-none text-light rounded"
              : "text-decoration-none py-2 px-3 text-black"
          }
        >
          <i className="fa-solid fa-grip"></i>
          Home
        </NavLink>
        <NavLink
          to={routes.adminBlogList}
          className={({ isActive }) =>
            isActive
              ? "bg-primary py-2 px-3 w-100 text-decoration-none text-light rounded"
              : "text-decoration-none py-2 px-3 text-black"
          }
        >
          <i className="fa-solid fa-clipboard"></i> Blogs
        </NavLink>

        <NavLink
          to={routes.adminUserList}
          className={({ isActive }) =>
            isActive
              ? "bg-primary py-2 px-3 text-decoration-none text-light rounded"
              : "text-decoration-none py-2 px-3 text-black"
          }
        >
          <i className="fa-solid fa-users"></i> Users
        </NavLink>
        <NavLink
          to={routes.categoriesList}
          className={({ isActive }) =>
            isActive
              ? "bg-primary py-2 px-3 text-decoration-none text-light rounded"
              : "text-decoration-none py-2 px-3 text-black"
          }
        >
          <i className="fa-solid fa-clipboard"></i> Category
        </NavLink>
        <Nav.Link
          className="py-2 px-3"
          onClick={() => setShouldModelAppear(true)}
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
        </Nav.Link>
        <div></div>

        <Modal
          centered
          show={shouldModelAppear}
          onHide={() => setShouldModelAppear(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Logout Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do You Want to Logout?</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShouldModelAppear(false)}
            >
              No
            </Button>
            <Button variant="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Modal.Footer>
        </Modal>
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
