import { Button, Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightSideNav = () => {
  const [topicData, setTopicData] = useState([]);

  useEffect(() => {
    fetch("https://my-learning-platform-server-side.vercel.app/topics-category")
      .then((res) => res.json())
      .then((data) => setTopicData(data));
  }, []);
  console.log(topicData);
  const topicList = topicData?.topics;
  console.log(topicList);
  return (
    <div>
      <aside className="w-full p-6 mx-auto sm:w-60 dark:bg-gray-900 dark:text-gray-100">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
              All Courses
            </h2>
            <div className="flex flex-col space-y-1">
              {topicList?.map((singleTopic) => (
                <Link
                  to={`/topics-category/${singleTopic.id}`}
                  key={singleTopic.id}
                >
                  <Button className="w-44" color="purple">
                    {singleTopic.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default RightSideNav;
