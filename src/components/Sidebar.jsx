import routes from "constants/routes";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Navbar bg="white" variant="dark" className="sidebar">
      <Navbar.Brand href="#home" className="text-primary">
        Blog Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="d-flex flex-column justify-content-start gap-3 sidebar-container">
        <NavLink
          to={routes.adminDashboard}
          className={({ isActive }) =>
            isActive
              ? "bg-primary py-2 px-3 text-decoration-none text-light rounded"
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
              ? "bg-primary py-2 px-3 text-decoration-none text-light rounded"
              : "text-decoration-none py-2 px-3 text-black"
          }
        >
          <i className="fa-solid fa-clipboard"></i> Blogs
        </NavLink>
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
        <div></div>
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
