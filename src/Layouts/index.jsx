import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet/> 
      <Footer/>
    </div>
  );
};

export default Layouts;