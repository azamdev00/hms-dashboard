"use client";
import { LoginSchema } from "@/validations/login";
import { joiResolver } from "@hookform/resolvers/joi";
import { Button, Card, Label } from "flowbite-react";
import { useForm } from "react-hook-form";

interface LoginModal {
  cnic: string;
  password: string;
}

const Login = function () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginModal>({
    resolver: joiResolver(LoginSchema, {
      abortEarly: false,
      errors: { wrap: { label: "" } },
    }),
  });

  const handleLogin = (data: LoginModal) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      <div className="my-6 flex items-center gap-x-1 lg:my-0">
        <img
          alt="Flowbite logo"
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-12"
        />
        <span className="self-center whitespace-nowrap text-2xl font-semibold">
          Polyclinic
        </span>
      </div>
      <Card
        horizontal
        className="w-full md:max-w-screen-sm md:[&>*]:w-full md:[&>*]:p-16"
      >
        <h1 className="mb-3 text-2xl font-bold md:text-3xl">Sign in</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="email">Your CNIC</Label>
            <div className="mt-1">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="00000-0000000-0"
                {...register("cnic")}
              />
            </div>
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">Your password</Label>
            <div className="mt-1">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="********"
                {...register("password")}
              />
            </div>
          </div>
          {/* <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Checkbox id="rememberMe" name="rememberMe" />
              <Label htmlFor="rememberMe">Remember me</Label>
            </div>
            <a href="#" className="w-1/2 text-right text-sm text-primary-600 ">
              Lost Password?
            </a>
          </div> */}
          <div className="mb-6">
            <Button
              type="submit"
              color={"success"}
              className="w-full lg:w-auto"
            >
              Login to your account
            </Button>
          </div>
          {/* <p className="text-sm text-gray-500 ">
            Not registered?&nbsp;
            <a href="#" className="text-primary-600 ">
              Create account
            </a>
          </p> */}
        </form>
      </Card>
    </div>
  );
};

export default Login;
