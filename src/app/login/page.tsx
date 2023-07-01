"use client";
import { fetchAPIPOSTRequest } from "@/config";
import useCookie from "@/hooks/useCookies";
import { ResponseObject } from "@/interfaces/response";
import { LoginSchema } from "@/validations/login";
import { joiResolver } from "@hookform/resolvers/joi";
import { Button, Card, Label } from "flowbite-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface LoginModal {
  cnic: string;
  password: string;
  role: string;
}

const Login = function () {
  const [_, setJwt] = useCookie("polyclinic", "");
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

  const handleLogin = async (postdata: LoginModal) => {
    const id = toast.loading("Loggin in...");
    const data: ResponseObject = await fetchAPIPOSTRequest(
      "auth/login",
      postdata
    );
    const status: "error" | "success" =
      data.status === "fail" || data.status === "error" ? "error" : "success";

    console.log(data);

    toast.update(id, {
      render: data.message,
      type: status,
      isLoading: false,
      autoClose: 5000,
    });

    if (status === "success" && data.jwt) {
      setJwt(data.jwt);
      reset();
    }
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
            <Label htmlFor="cnic">Your CNIC</Label>
            <div className="mt-1">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="00000-0000000-0"
                {...register("cnic")}
                id="cnic"
              />
            </div>
            {errors.cnic && (
              <div className="text-red-600 text-sm">{errors.cnic.message}</div>
            )}
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">Your password</Label>
            <div className="mt-1">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="********"
                {...register("password")}
                id="password"
              />
            </div>
            {errors.password && (
              <div className="text-red-600 text-sm">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="mb-6 flex flex-col">
            <h3 className="font-semibold text-gray-900 ">Identification</h3>

            <div className="flex">
              <div className="flex items-center">
                <input
                  type="radio"
                  value="admin"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  {...register("role")}
                />
                <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">
                  Admin
                </label>
              </div>

              <div className="flex items-center pl-3">
                <input
                  type="radio"
                  value="doctor"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2  "
                  {...register("role")}
                />
                <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">
                  Doctor
                </label>
              </div>
            </div>
            {errors.role && (
              <div className="text-red-600 text-sm">{errors.role.message}</div>
            )}
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
