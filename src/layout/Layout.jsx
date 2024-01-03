// import Footer from "@/components/Footer";
// import NavbarComponent from "@/components/NavbarComponent";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <NavbarComponent /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
