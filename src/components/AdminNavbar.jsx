import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AdminNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-light position-fixed admin-nav">
      <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
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
