import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Courses from "../../componts/pages/Courses/Courses";

import Login from "../../componts/Login/Login";
import Register from "../../componts/Register/Register";

import Root from "../../Layout/Root";
import Faq from "../../componts/pages/FAQ/Faq";
import Blog from "../../componts/pages/Blog/Blog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SelectedCatInfo from "../../componts/SelectedCatInfo/SelectedCatInfo";
import SingleCourse from "../../componts/SingleCourse/SingleCourse";
import CheckOut from "../../componts/CheckOut/CheckOut";
import Error from "../../componts/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
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
        path: "/all-topics/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-topics/${params.id}`),
        element: <SingleCourse></SingleCourse>,
      },
      {
        path: "/topics-category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/topics-category/${params.id}`),
        element: <SelectedCatInfo></SelectedCatInfo>,
      },
      {
        path: "/all-topics/:id/checkout",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-topics/${params.id}`),
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/*",
    element: <Error></Error>,
  },
]);
