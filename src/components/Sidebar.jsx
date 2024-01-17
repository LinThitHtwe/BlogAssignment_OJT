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
        <Nav.Link
          href="#home"
          className="bg-primary py-2 px-3 text-light rounded"
        >
          <i className="fa-solid fa-grip"></i> Home
        </Nav.Link>
        <Nav.Link href="#about">
          <i className="fa-solid fa-clipboard"></i> Blogs
        </Nav.Link>
        <Nav.Link href="#services">
          <i className="fa-solid fa-users"></i> User Lists
        </Nav.Link>
        <Nav.Link href="#services">
          <i className="fa-solid fa-users"></i> Admin Manaagement
        </Nav.Link>
        <Nav.Link href="#services">
          <i className="fa-solid fa-clipboard"></i> Category
        </Nav.Link>
        <Nav.Link href="#services">
          <i className="fa-solid fa-square-poll-vertical"></i> Block List
        </Nav.Link>
        <Nav.Link href="#contact">
          <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
