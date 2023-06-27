/* eslint-disable jsx-a11y/anchor-is-valid */
import { Opd } from "@/interfaces/opd";
import { ResponseObject } from "@/interfaces/response";
import type { FC } from "react";
import OPDList from "./list";

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/opd`, {
    cache: "no-store",
  });
  const { items }: ResponseObject = await res.json();
  return items;
};

const Opd: FC = async () => {
  const data: Opd[] = await getData();
  console.log(data);
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

      <OPDList data={data} />
    </>
  );
};

export default Opd;
