import { Avatar } from "flowbite-react";
import React from "react";

const Banner = () => {
  return (
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
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
