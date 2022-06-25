import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Sections/C-Footer/Footer";
import Header from "../../Sections/C-Header/Header";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
