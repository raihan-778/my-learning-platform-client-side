import React from "react";
import { Avatar, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const CourseInfoCart = ({ singleCourse }) => {
  const { title, duration, details, image_url, instructor, rating } =
    singleCourse;
  return (
    <div>
      <div className="max-w-sm">
        <Card className="p-2 h-auto">
          <img className="h-32" src={image_url} alt="" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span>Course Duration: {duration}</span>
          </p>
          {/* <div className="flex flex-wrap gap-2 font-normal text-gray-700 dark:text-gray-400">
            <span>
              <Avatar img={instructor?.img} rounded={true} />
              Instructor: {instructor?.name}
            </span>
          </div> */}
        </Card>
      </div>
    </div>
  );
};

export default CourseInfoCart;
