import React from "react";
import { Outlet } from "react-router-dom";
import Carousel from "../componts/Carousel/Carousels";
import Header from "../componts/shared/Header/Header";

const Root = () => {
  return (
    <>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
