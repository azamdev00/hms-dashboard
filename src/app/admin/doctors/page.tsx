/* eslint-disable jsx-a11y/anchor-is-valid */
import { Doctor } from "@/interfaces/doctor";
import { ResponseObject } from "@/interfaces/response";
import type { FC } from "react";
import DoctorList from "./list";

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctor`, {
    cache: "no-store",
  });
  const { items }: ResponseObject = await res.json();

  return items;
};

const Doctors: FC = async () => {
  const data: Doctor[] = await getData();

  return (
    <>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <h1 className="text-xl font-semibold text-gray-900  sm:text-2xl">
              Doctors
            </h1>
          </div>
        </div>
      </div>

      <DoctorList data={data} />
    </>
  );
};

export default Doctors;
