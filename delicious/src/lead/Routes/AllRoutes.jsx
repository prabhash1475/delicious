import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Components/Home";
import product from "../../DurgeshProduct/product";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<product />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
