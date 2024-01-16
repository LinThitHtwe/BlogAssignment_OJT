import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
const NavbarComponent = () => {
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
          <Nav.Link className="nav-link" href="#">
            LINKS
          </Nav.Link>
          <Nav.Link className="nav-link" href="#">
            PROJECTS
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
