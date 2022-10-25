import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../componts/pages/Home/Home";
import Login from "../../componts/pages/Login/Login/Login";
import Register from "../../componts/pages/Login/Register/Register";
import Root from "../../Layout/Root";

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
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
