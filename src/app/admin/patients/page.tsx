/* eslint-disable jsx-a11y/anchor-is-valid */
import { Patient } from "@/interfaces/patient";
import { ResponseObject } from "@/interfaces/response";
import type { FC } from "react";
import PatientList from "./list";

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/patient`, {
    cache: "no-store",
  });
  const { items }: ResponseObject = await res.json();
  return items;
};

const Patients: FC = async () => {
  const data: Patient[] = await getData();

  return (
    <>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <h1 className="text-xl font-semibold text-gray-900  sm:text-2xl">
              Patients
            </h1>
          </div>
        </div>
      </div>

      <PatientList data={data} />
    </>
  );
};

export default Patients;
