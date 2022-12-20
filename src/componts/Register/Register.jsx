import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Label, ListGroup, TextInput, Checkbox, Button } from "flowbite-react";
import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const Register = () => {
  const { user, userSignUp, userProfileUpdate, githubSignUp, googleSignUp } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const imgURL = form.imgURL.value;
    console.log(email, password, name, imgURL);
    userSignUp(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        setError("");
        updateUser(name, imgURL);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  const updateUser = (name, imgURL) => {
    userProfileUpdate(name, imgURL)
      .then((result) => console.log(result.user))
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignUp(googleProvider)
      .then((result) => console.log(result.user))
      .catch((err) => {
        setError(err.message);
        console.error(err);
      });
  };
  const handleGithubSignIn = () => {
    githubSignUp(githubProvider)
      .then((result) => {
        console.log(result.user);
        user.linkWithCredential(userCredential);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className=" mt-10 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-3">
        <form
          onSubmit={handleRegister}
          className="col-span-3  grid grid-cols-1 gap-4"
        >
          <div>
            <div className="mb-2 block">
              <Label
                className="text-gray-200 "
                htmlFor="name"
                value="Enter your Name"
              />
            </div>
            <TextInput
              id="name"
              type="text"
              required={true}
              shadow={true}
              placeholder="Enter your Name"
              name="name"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                className="text-gray-200 "
                htmlFor="imgURL"
                value="Enter your Image URL"
              />
            </div>
            <TextInput
              id="imgURL"
              type="text"
              placeholder="Enter image URL"
              required={true}
              shadow={true}
              name="imgURL"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                className="text-gray-200 "
                htmlFor="email2"
                value="Your email"
              />
            </div>
            <TextInput
              id="email2"
              type="email"
              name="email"
              placeholder="name@email.com"
              required={true}
              shadow={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                className="text-gray-200 "
                htmlFor="password"
                value="password"
              />
            </div>
            <TextInput
              id="password"
              type="password"
              Name="password"
              required={true}
              shadow={true}
            />
          </div>
          <Button type="submit">Register new account</Button>
          <p>
            Already have an account!
            <span className="text-green-500">
              <Link to="/login"> Please Login</Link>
            </span>
          </p>
          <p className="text-rose-600">{error}</p>
        </form>

        <div className="mt-10 mx-auto">
          <div className="w-56">
            <ListGroup>
              <ListGroup.Item onClick={handleGoogleSignIn}>
                <FaGoogle></FaGoogle>{" "}
                <span className=" ms-1 ps-2"> Log In With Google</span>
              </ListGroup.Item>
              <ListGroup.Item onClick={handleGithubSignIn}>
                <FaGithub></FaGithub> <span> Log In With GitHub</span>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
