import routes from "constants/routes";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";

const AdminNavbar = () => {
  const location = useLocation();
  return (
    <Navbar expand="lg" className="bg-white position-fixed admin-nav">
      <Navbar.Brand
        className="p-3 text-capitalize text-muted"
        href={location.pathname}
      >
        {location.pathname.substring(
          location.pathname.lastIndexOf("/admin/") + 7
        )}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="ms-auto">
        <Nav.Link className="text-black noti-icon w-50" href="#">
          <Button variant="light">
            <i className="fa-regular fa-bell"></i>
          </Button>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default AdminNavbar;
