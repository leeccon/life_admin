import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
