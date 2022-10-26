import {
  Avatar,
  Button,
  Flowbite,
  DarkThemeToggle,
  Navbar,
} from "flowbite-react";
import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/ContextProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar fluid={true} className="text-indigo-900" rounded={true}>
        <Navbar.Brand>
          <img
            src="https://img.freepik.com/free-vector/computer-safety-technology-icon_53876-118346.jpg?w=740&t=st=1666759397~exp=1666759997~hmac=67920931f6f09934713003fe79283c74b13a7416049d6d696e16b9034ff2a4fd"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Web & Cyber Learning Hub
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/" active={true}>
            Home
          </Link>
          <Link to="courses">Courses</Link>
          <Link to="register">Register</Link>
          <Link to="login">Login</Link>
          <Link to="blog">Blog</Link>
          <Link to="faq">FAQ</Link>

          <Flowbite>
            <DarkThemeToggle />
          </Flowbite>
          {user?.uid ? (
            <Avatar
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          ) : (
            <FaUser></FaUser>
          )}
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
          />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
