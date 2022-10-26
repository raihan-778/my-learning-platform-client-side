import { Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseCategory = ({ singleTopic }) => {
  const [courseDetail, setCourseDetail] = useState("");

  console.log(singleTopic.id);
  return (
    <div>
      <div className="w-full text-xl">
        <Sidebar className="m-2" aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item>
                <Link to={`/topics-category/${singleTopic?.id}`}>
                  {singleTopic?.name}
                </Link>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default CourseCategory;
