import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componts/shared/Header/Header";
import RightSideNav from "../componts/shared/RightSideNav/RightSideNav";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid gap-3 grid-cols-2">
        <div className="col-3 ">
          <RightSideNav></RightSideNav>
        </div>
        <div className="col-9">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Root;
