import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componts/shared/Header/Header";

const Root = () => {
  return (
    <>
      <Header></Header>
      <div>
        <h2 className="text-3xl ">
          Welcome to New Tech Learning World To enrich Skills
        </h2>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
