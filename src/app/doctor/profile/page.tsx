"use client";

import useUserStore from "@/store/user";
import { NextPage } from "next";

const Profile: NextPage = () => {
  const { user } = useUserStore();
  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"></div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center"></div>
        </div>
        <div className="mt-32 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">
            {user?.fullName}
          </h1>
          <p className="font-light text-gray-600 mt-3">{user?.city}</p>
          <p className="mt-8 text-gray-500">{user?.speciality}</p>
        </div>
        <div className="mt-12 flex flex-col justify-center">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                <div className="">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <div className="block w-full p-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6">
                      {user?.email}
                    </div>
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="cnic"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    CNIC
                  </label>
                  <div className="mt-2">
                    <div className="block w-full p-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6">
                      {user?.cnic}
                    </div>
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Address
                  </label>
                  <div className="mt-2">
                    <div className="block w-full p-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6">
                      {user?.address}
                    </div>
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <div className="block w-full p-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6">
                      {user?.city}
                    </div>
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State
                  </label>
                  <div className="mt-2">
                    <div className="block w-full p-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6">
                      {user?.state}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
