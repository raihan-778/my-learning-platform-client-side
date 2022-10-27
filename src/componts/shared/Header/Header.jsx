import {
  Avatar,
  Button,
  Flowbite,
  DarkThemeToggle,
  Navbar,
  Tooltip,
} from "flowbite-react";
import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/ContextProvider";

const Header = () => {
  const { user, setUser, logOut } = useContext(AuthContext);

  if (user) {
    console.log(user);
    console.log(user.displayName);
  }
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

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
          <Link to="courses" active={true}>
            Courses
          </Link>

          <Link to="blog">Blog</Link>
          <Link to="faq">FAQ</Link>

          <Flowbite>
            <DarkThemeToggle />
          </Flowbite>

          {user?.uid ? (
            <Button onClick={handleSignOut}>Sign Out</Button>
          ) : (
            <>
              <Link to="register">Register</Link>
              <Link to="login">Login</Link>
            </>
          )}
          {user?.uid ? (
            <>
              <Tooltip content={user?.displayName}>
                <Avatar img={user?.photoURL} rounded={true} />
              </Tooltip>
            </>
          ) : (
            <FaUser></FaUser>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
