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
      {/* Header part end */}
      <div className="header">
        <div className="p-5  rounded-md ">
          <div className="bg-gray-50">
            <Avatar
              img="https://img.freepik.com/free-vector/computer-safety-technology-icon_53876-118346.jpg?w=740&t=st=1666759397~exp=1666759997~hmac=67920931f6f09934713003fe79283c74b13a7416049d6d696e16b9034ff2a4fd"
              size="lg"
              className="pt-3"
            />
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">
                  Welcome to web-cyber leraning hub. Ready to start?
                </span>
                <span className="block text-indigo-600">
                  Start with our free courses
                </span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header part end */}
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
