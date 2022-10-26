import React, { useEffect, useState } from "react";
import CourseCategory from "../../CourseCategory/CouorseCategory";

const RightSideNav = () => {
  const [topicData, setTopicData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/topics-category")
      .then((res) => res.json())
      .then((data) => setTopicData(data));
  }, []);
  console.log(topicData);
  const topicList = topicData?.topics;
  console.log(topicList);
  return (
    <div>
      {topicList?.map((singleTopic) => (
        <CourseCategory
          key={singleTopic.id}
          singleTopic={singleTopic}
        ></CourseCategory>
      ))}
    </div>
  );
};

export default RightSideNav;
