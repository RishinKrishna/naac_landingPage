import React from "react";
import  Layouts  from "../Layouts";
import { Features, Contact, Home } from "../components";
import { Route, Routes } from "react-router-dom";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" Component={Layouts}>
      <Route path="/" exact Component={Home}/>
      <Route path="/features" Component={Features}/>
      <Route path="/contact" Component={Contact}/>
      </Route>
    </Routes>
  );
};

export default MainRoute;
