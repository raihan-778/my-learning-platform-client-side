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
import Home from "../../componts/Home/Home";

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
        loader: () =>
          fetch(
            "https://my-learning-platform-server-side.vercel.app/all-topics"
          ),
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
          fetch(
            `https://my-learning-platform-server-side.vercel.app/all-topics/${params.id}`
          ),
        element: <SingleCourse></SingleCourse>,
      },
      {
        path: "/topics-category/:id",
        loader: ({ params }) =>
          fetch(
            `https://my-learning-platform-server-side.vercel.app/topics-category/${params.id}`
          ),
        element: <SelectedCatInfo></SelectedCatInfo>,
      },
      {
        path: "/all-topics/:id/checkout",
        loader: ({ params }) =>
          fetch(
            `https://my-learning-platform-server-side.vercel.app/all-topics/${params.id}`
          ),
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
