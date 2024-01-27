import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToastProvider from "../components/ToastProvider";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1 bg-bgSoft p-5">
        <Sidebar />
      </div>
      <div className="flex-[4] p-5">
        <ToastProvider/>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
