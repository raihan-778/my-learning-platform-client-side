import React from "react";
import { Checkbox, Label, TextInput, Button } from "flowbite-react";

const Login = () => {
  return (
    <div>
      <form className="flex justify-center mx-auto w-1/2 flex-col gap-4">
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
        <div className="flex items-center gap-2">
          <Checkbox id="remember" name="chekbox" />
          <Label className="text-gray-200" htmlFor="remember">
            Remember me
          </Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
