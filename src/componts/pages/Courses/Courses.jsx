import { Avatar } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseInfoCart from "../../CourseInfoCart/CourseInfoCart";
import RightSideNav from "../RightSideNav/RightSideNav";

const Courses = () => {
  const topicData = useLoaderData();
  const allCourses = topicData.topicInfo;
  console.log(allCourses);

  return (
    <div>
      <div className="grid grid-cols-6 gap-3">
        <div className="sm:col-span-6 md:col-span-6 lg:col-span-4 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 col-span-6">
          {allCourses?.map((singleCourse) => (
            <CourseInfoCart
              key={singleCourse._id}
              singleCourse={singleCourse}
            ></CourseInfoCart>
          ))}
        </div>
        <div className=" lg:col-span-2 md:col-span-6 sm:col-span-6 col-span-6 ">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Courses;
