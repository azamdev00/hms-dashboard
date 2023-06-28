/* eslint-disable jsx-a11y/anchor-is-valid */
import { ResponseObject } from "@/interfaces/response";
import type { FC } from "react";
import OPDList from "./list";

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/opd`, {
    cache: "no-store",
  });
  const data: ResponseObject = await res.json();
  return data;
};

const Opd: FC = async () => {
  const { items, doctors, departments }: ResponseObject = await getData();

  return (
    <>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Opd
            </h1>
          </div>
        </div>
      </div>

      <OPDList data={items} doctors={doctors} departments={departments} />
    </>
  );
};

export default Opd;
