import routes from "constants/routes";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
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
          <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
        </Nav.Link>
        <div></div>
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
