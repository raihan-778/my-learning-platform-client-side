import { Button, Carousel } from "flowbite-react";
import React from "react";

const Carousels = () => {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div className=" flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            {/* <img
              src="https://img.freepik.com/premium-photo/e-learning-student-university-conceptual_31965-20480.jpg?w=826"
              alt=""
            /> */}
            <Button>Let's Visit Our Campus</Button>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img
              src="https://img.freepik.com/free-vector/cyber-security-banner-template_23-2148968182.jpg?w=740&t=st=1666864963~exp=1666865563~hmac=c334fcd8031b87986310a9bc8c1288ab5a36ae928a5a508025f15bbeb323e7a3"
              alt=""
            />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img
              src="https://img.freepik.com/free-photo/hacker-working-darkness_53876-94580.jpg?w=826&t=st=1666865023~exp=1666865623~hmac=38bcef55e156fab804a463daf9352094ab274a21821465e39c336a38d30a171f"
              alt=""
            />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img
              src="https://img.freepik.com/free-photo/key-lock-password-security-privacy-protection-graphic_53876-121252.jpg?w=740&t=st=1666865129~exp=1666865729~hmac=af403006adacce2afc88e84c60e91014d5c6a6956f54187bab9989586e31acf1"
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Carousels;
