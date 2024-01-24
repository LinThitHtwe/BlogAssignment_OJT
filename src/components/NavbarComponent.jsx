import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  Button,
  Modal,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "reduxapp/features/user/userSlice";
import toast from "react-hot-toast";
const NavbarComponent = () => {
  const user = useSelector((state) => state.user.user);
  const [shouldModelOpen, setShouldModelOpen] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(removeUser());
    setShouldModelOpen(false);
    toast.success("Logout Successfully");
  };

  return (
    <Navbar
      bg="white"
      expand="lg"
      variant="dark"
      className="d-flex justify-content-between px-2 px-lg-5 navbar"
    >
      <Navbar.Brand href="/" className="display-5 w-25 navbar-brand">
        NORDIC ROSE
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto  ">
          <Nav.Link className="nav-link" href="#">
            BLOG
          </Nav.Link>
          <Nav.Link className="nav-link" href="#">
            ABOUT
          </Nav.Link>
          <Nav.Link className="nav-link mr-4" href="#">
            LINKS
          </Nav.Link>

          {user ? (
            <Dropdown className="mr-5" drop="start">
              <Dropdown.Toggle
                variant="outline-light"
                id="dropdown-basic"
                className="rounded text-black"
              >
                <i className="fa-solid fa-user"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href={`/user/profile/${user.user._id}`}>
                  <i className="fa-solid fa-user"></i> Profile
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  href="#"
                  onClick={() => setShouldModelOpen(true)}
                >
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Nav.Link className="bg-black w-25 rounded text-white p-2" href="#">
              <Link
                to={"/login"}
                className="text-white text-center text-decoration-none"
              >
                Login
              </Link>
            </Nav.Link>
          )}

          <Modal
            centered
            show={shouldModelOpen}
            onHide={() => setShouldModelOpen(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Logout Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do You Want to Logout?</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShouldModelOpen(false)}
              >
                No
              </Button>
              <Button variant="primary" onClick={handleLogout}>
                Logout
              </Button>
            </Modal.Footer>
          </Modal>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
