import React from "react";
import NavbarComponent from "components/NavbarComponent";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer";

const Layout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
