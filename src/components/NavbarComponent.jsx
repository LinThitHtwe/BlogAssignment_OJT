import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar
      bg="white"
      expand="lg"
      variant="dark"
      className="d-flex justify-content-between px-5 navbar"
    >
      <Navbar.Brand href="/" className="display-5 navbar-brand">
        NORDIC ROSE
      </Navbar.Brand>

      <Nav className="ml-auto nav ">
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
    </Navbar>
  );
};

export default NavbarComponent;
