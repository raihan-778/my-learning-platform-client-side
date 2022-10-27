import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Courses from "../../componts/pages/Courses/Courses";
import Home from "../../componts/pages/Home/Home";
import Login from "../../componts/Login/Login";
import Register from "../../componts/Register/Register";

import Root from "../../Layout/Root";
import Faq from "../../componts/pages/FAQ/Faq";
import Blog from "../../componts/pages/Blog/Blog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SelectedCatInfo from "../../componts/SelectedCatInfo/SelectedCatInfo";

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
        loader: () => fetch("http://localhost:5000/all-topics"),
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/selectedtopic",
        element: <SelectedCatInfo></SelectedCatInfo>,
      },
      {
        path: "/topics-category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/topics-category/${params.id}`),
        element: <SelectedCatInfo></SelectedCatInfo>,
      },
    ],
  },
]);
