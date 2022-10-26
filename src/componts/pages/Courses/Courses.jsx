import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseInfoCart from "../../CourseInfoCart/CourseInfoCart";

const Courses = () => {
  const topicData = useLoaderData();
  const allCourses = topicData.topicInfo;
  console.log(allCourses);

  return (
    <div className="grid gap-3 grid-cols-2 my-2">
      {allCourses?.map((singleCourse) => (
        <CourseInfoCart
          key={singleCourse._id}
          singleCourse={singleCourse}
        ></CourseInfoCart>
      ))}
    </div>
  );
};

export default Courses;
