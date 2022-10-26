import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccepted = (event) => {
    console.log(event.target.checked);
    setAccepted(event.target.checked);
  };

  return (
    <div>
      <form onSubmit={""} className="flex flex-col w-1/2 mx-auto gap-4">
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
      </form>
    </div>
  );
};

export default Register;
