import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseInfoCart from "../../CourseInfoCart/CourseInfoCart";
import RightSideNav from "../RightSideNav/RightSideNav";

const Courses = () => {
  const topicData = useLoaderData();
  const allCourses = topicData.topicInfo;
  console.log(allCourses);

  return (
    <div className="grid  grid-flow-col">
      <div className="col-span-10 sm:col-span-12 gap-2 grid grid-cols-2">
        {allCourses?.map((singleCourse) => (
          <CourseInfoCart
            key={singleCourse._id}
            singleCourse={singleCourse}
          ></CourseInfoCart>
        ))}
      </div>
      <div className="sm:col-span-12 col-span-2 "></div>
      <RightSideNav></RightSideNav>
    </div>
  );
};

export default Courses;
