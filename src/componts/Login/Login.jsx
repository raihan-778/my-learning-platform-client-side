import { Checkbox, Label, TextInput, Button } from "flowbite-react";
import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const Login = () => {
  const { userLogin, loading, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError("Please Enter a Valid email or password");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="lg:w-1/2 md:w-1/2 w-full grid grid-cols-1 mx-10  gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label
              className="text-gray-200"
              htmlFor="email1"
              value="Your email"
            />
          </div>
          <TextInput
            id="email1"
            type="email"
            name="email"
            placeholder="name@flowbite.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              className="text-gray-200"
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
            id="password1"
            name="password"
            type="password"
            required={true}
          />
        </div>
        {/* <div className="flex items-center gap-2">
          <Checkbox id="remember" name="chekbox" />
          <Label className="text-gray-200" htmlFor="remember">
            Remember me
          </Label>
        </div> */}
        <Button type="submit">Log In</Button>
        <p>
          Don't have an account{" "}
          <span className="text-green-500">
            <Link to="/register">Please Register</Link>
          </span>
        </p>
      </form>
      <p className="text-rose-600">{error}</p>
    </div>
  );
};

export default Login;
