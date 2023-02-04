import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className=" flex justify-center">
        {/* <div className=" p-4 w-4/5">{children}</div> */}
        <div className=" p-4 w-4/5">{children}</div>
      </div>
    </>
  );
};

export default Layout;
