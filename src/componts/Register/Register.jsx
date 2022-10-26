import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Label, ListGroup, TextInput, Checkbox, Button } from "flowbite-react";
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const Register = () => {
  const { user, userSignUp, userProfileUpdate, githubSignUp, googleSignUp } =
    useContext(AuthContext);
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
        updateUser(name, imgURL);
      })
      .catch((err) => console.error(err));
  };

  const updateUser = (name, imgURL) => {
    userProfileUpdate(name, imgURL)
      .then((result) => console.log(result.user))
      .catch((err) => console.error(err));
  };

  const handleGoogleSignIn = () => {
    googleSignUp(googleProvider)
      .then((result) => console.log(result.user))
      .catch((err) => console.error(err));
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
      <div className="flex justify-between">
        <form onSubmit={handleRegister} className="flex flex-col w-6/12 gap-4">
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
              name="name"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                className="text-gray-200 "
                htmlFor="name"
                value="Enter your Image URL"
              />
            </div>
            <TextInput
              id="imgURL"
              type="text"
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
              placeholder="name@flowbite.com"
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
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label className="text-gray-200 " htmlFor="agree">
              I agree with the{" "}
              <a
                href="/forms"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
            </Label>
          </div>
          <Button type="submit">Register new account</Button>
          <p>
            Already have an account!
            <span className="text-green-500">
              <Link to="/login">Please Login</Link>
            </span>
          </p>
        </form>

        <div>
          <div className="w-48">
            <ListGroup>
              <ListGroup.Item
                onClick={handleGoogleSignIn}
                className="border-2 rounded-1"
              >
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
