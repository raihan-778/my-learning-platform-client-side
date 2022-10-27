import { Avatar, Card } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../pages/Banner/Banner";

//for pdf download

const App = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("SamplePDF.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <center>
        <h1>Welcome to Geeks for Geeks</h1>
        <h3>Click on below button to download PDF file</h3>
        <button onClick={onButtonClick}>Download PDF</button>
      </center>
    </>
  );
};

//for pdf download

const SelectedCatInfo = () => {
  const categoryDetail = useLoaderData();

  const { title, details, duration, rating, image_url, instructor } =
    categoryDetail[0];

  console.log(categoryDetail[0]);
  return (
    <div>
      <Banner></Banner>
      <div className="max-w p-5">
        <Card>
          <img className="w-3/4 m-auto" src={image_url} alt="" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {details}
          </p>
          <p className="font-normal flex justify-evenly text-gray-700 dark:text-gray-400">
            <span>rating: {rating?.number}</span>
            <span>badge: {rating?.badge}</span>
          </p>
          <p className="font-normal flex items-center justify-evenly text-gray-700 dark:text-gray-400">
            <span>
              {" "}
              <Avatar img={instructor?.img} rounded={true} />
              Instructor : {instructor?.name}
            </span>
            <span>Department: {instructor?.department}</span>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default SelectedCatInfo;
