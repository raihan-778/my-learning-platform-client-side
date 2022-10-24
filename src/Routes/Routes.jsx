import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../componts/pages/Home/Home";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Home></Home>,
      },
    ],
  },
]);

const Routes = () => {
  return <div></div>;
};

export default Routes;