import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componts/shared/Header/Header";
import RightSideNav from "../componts/shared/RightSideNav/RightSideNav";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="">
        <Outlet></Outlet>
        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};

export default Root;
