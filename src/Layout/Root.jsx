import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componts/shared/Header/Header";
import RightSideNav from "../componts/shared/RightSideNav/RightSideNav";

const Root = () => {
  return (
    <>
      <Header></Header>
      <div className="grid gap-3 grid-flow-col">
        <div className="col-span-1 ">
          <RightSideNav></RightSideNav>
        </div>
        <div className="col-span-4">
          <h2 className="text-3xl ">
            Welcome to New Tech Learning World To enrich Skills
          </h2>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Root;
