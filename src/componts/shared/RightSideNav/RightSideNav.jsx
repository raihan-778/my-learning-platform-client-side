import React, { useEffect, useState } from "react";
import SideNav from "../../SideNav/SideNav";

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
        <SideNav key={singleTopic.id} singleTopic={singleTopic}></SideNav>
      ))}
    </div>
  );
};

export default RightSideNav;
