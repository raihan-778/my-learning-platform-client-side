import React from "react";
import { Outlet } from "react-router-dom";

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
