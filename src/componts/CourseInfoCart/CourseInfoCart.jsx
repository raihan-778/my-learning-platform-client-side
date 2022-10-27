import React from "react";
import { Avatar, Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const CourseInfoCart = ({ singleCourse }) => {
  const { title, id, duration, details, image_url, instructor, rating } =
    singleCourse;
  console.log(singleCourse);
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
          <div className=" font-normal text-gray-700 dark:text-gray-400">
            <Button>
              <Link to={`/all-topics/${id}`}>Show Details</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CourseInfoCart;
