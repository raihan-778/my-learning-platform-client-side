import { Avatar, Button, Card, Rating } from "flowbite-react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleCourse = () => {
  const singleCourseDetails = useLoaderData();
  console.log(singleCourseDetails);
  const { title, details, id, duration, rating, image_url, instructor } =
    singleCourseDetails;
  return (
    <div>
      <div className="max-w">
        <Card>
          <img className="w-3/4 mx-auto" src={image_url} alt="" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {details}
          </p>
          <div className="font-normal flex justify-start text-gray-700 dark:text-gray-400">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
              <p className="ml-2  text-sm font-medium text-gray-500 dark:text-gray-400">
                {rating?.number}
                <span className="ml-2">badge: {rating?.badge}</span>
              </p>
            </Rating>
          </div>
          <div className="font-normal flex items-center justify-between text-gray-700 dark:text-gray-400">
            <div>
              <Avatar img={instructor?.img} rounded={true}>
                <div>
                  <div> Instructor :{instructor?.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Department: {instructor?.department}
                  </div>
                </div>
              </Avatar>
            </div>
            <Button>
              <Link to={`/all-topics/${id}/checkout`}>Get Premium Access</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SingleCourse;
