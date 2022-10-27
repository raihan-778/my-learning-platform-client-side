import { Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="w-full text-xl">
          <Sidebar className="m-2" aria-label="Default sidebar example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item>
                  <Link
                    to={`/topics-category/${singleTopic.id}`}
                    key={singleTopic.id}
                  >
                    {singleTopic.name}
                  </Link>
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      ))}
    </div>
  );
};

export default RightSideNav;
