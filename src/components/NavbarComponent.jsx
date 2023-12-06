import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar
      bg="white"
      expand="lg"
      variant="dark"
      className="d-flex justify-content-between px-5"
      style={{ boxShadow: "0px 1px 0px 0px #00000029" }}
    >
      <Navbar.Brand
        href="/"
        style={{ color: "black", fontWeight: "400" }}
        className="display-5"
      >
        NORDIC ROSE
      </Navbar.Brand>

      <Nav
        className="ml-auto  "
        style={{ fontSize: "1.0rem", fontWeight: "300" }}
      >
        <Nav.Link href="#" style={{ color: "black" }}>
          BLOG
        </Nav.Link>
        <Nav.Link href="#" style={{ color: "black" }}>
          ABOUT
        </Nav.Link>
        <Nav.Link href="#" style={{ color: "black" }}>
          LINKS
        </Nav.Link>
        <Nav.Link href="#" style={{ color: "black" }}>
          PROJECTS
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
