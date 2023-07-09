/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FC } from "react";
import { ResponseObject } from "@/interfaces/response";
import { cookies } from "next/headers";

const getData = async (token: string | undefined) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctor/opd`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    }
  );
  const { items }: ResponseObject = await res.json();

  return items;
};

const Dashboard: FC = async () => {
  const cookieStore = cookies();
  const cookie = cookieStore.get("polyclinic");

  //   const data = await getData(cookie?.value);

  return (
    <>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Patient Room
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
