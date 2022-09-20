import React from "react";
import { Routes, Route } from "react-router";
import Home from "./containers/Home";
import Login from "./Components/login";
import AddNewListing from "./Components/AddNewListing";
import BizDetails from "./containers/BizDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/AddNewListing" element={<AddNewListing />} />
      <Route exact path="/BizDetails/:id" element={<BizDetails />} />
    </Routes>
  );
};

export default Router;
