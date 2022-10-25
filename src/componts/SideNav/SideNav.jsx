import { Sidebar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SideNav = ({ singleTopic }) => {
  console.log(singleTopic);
  return (
    <div>
      <div className="w-3/4 text-xl">
        <Sidebar className="m-2" aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item>
                <Link>{singleTopic.name}</Link>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default SideNav;
