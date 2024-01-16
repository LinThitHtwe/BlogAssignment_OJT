import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Sidebar = () => {
  return (
    <Navbar bg="light" variant="dark" className="sidebar">
      <Navbar.Brand href="#home" className="text-primary">
        Blog Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="d-flex flex-column justify-content-start gap-3 sidebar-container">
        <Nav.Link href="#home" className="bg-primary">
          <i className="fa-solid fa-grip"></i> Home
        </Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#services">Services</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
