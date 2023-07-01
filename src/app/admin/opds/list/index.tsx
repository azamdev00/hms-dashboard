"use client";

import { Opd } from "@/interfaces/opd";
import { Button, Table } from "flowbite-react";
import { FC, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiPlus } from "react-icons/hi";
import { ToastContainer } from "react-toastify";
import AssignDoctorModal from "../add.doctor";
import { Doctor } from "@/interfaces/doctor";
import AddOPDModal from "../add.opd";
import { Department } from "@/interfaces/department";

interface OPDListProps {
  data: Opd[];
  doctors: Doctor[];
  departments: Department[];
}

const OPDList: FC<OPDListProps> = ({ data, doctors, departments }) => {
  const [opd, setOpds] = useState(data);

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="flex justify-end container">
        <AddOPDModal setOpds={setOpds} departments={departments} />
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <Table className="min-w-full divide-y divide-gray-200 ">
                <Table.Head className="bg-gray-100 ">
                  <Table.HeadCell>Name</Table.HeadCell>
                  <Table.HeadCell>Queue</Table.HeadCell>
                  <Table.HeadCell>Last Token</Table.HeadCell>
                  <Table.HeadCell>Doctor Name</Table.HeadCell>
                  <Table.HeadCell>Doctor Contact</Table.HeadCell>
                  <Table.HeadCell>Status</Table.HeadCell>
                  <Table.HeadCell>Add Doctor</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y divide-gray-200 bg-white  ">
                  {opd?.map((item: Opd, index: number) => (
                    <Table.Row className="hover:bg-gray-100 " key={index}>
                      <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                        <div className="text-sm font-normal text-gray-500 ">
                          <div className="text-base font-semibold text-gray-900 ">
                            {item.department.name}
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-medium text-gray-900 ">
                        {String(item.inQueue)}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-medium text-gray-900 ">
                        {String(item.lastToken)}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-medium text-gray-900 ">
                        {item?.doctor?.fullName ?? "Not Assign"}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 ">
                        {item?.doctor?.mobile}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 ">
                        {item?.status}
                      </Table.Cell>
                      <Table.Cell>
                        {item.date.split("T")[0] === today ? (
                          <div className="flex items-center gap-x-3 whitespace-nowrap">
                            <AssignDoctorModal
                              setOpds={setOpds}
                              doctors={doctors}
                            />
                          </div>
                        ) : (
                          <></>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <Pagination count={opd?.length} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default OPDList;

interface PaginationProps {
  count: number;
}

export const Pagination: FC<PaginationProps> = ({ count }) => {
  return (
    <div className="sticky right-0 bottom-0 w-full items-center border-t border-gray-200 bg-white p-4   sm:flex sm:justify-between">
      <div className="mb-4 flex items-center sm:mb-0">
        <a
          href="#"
          className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900   "
        >
          <span className="sr-only">Previous page</span>
          <HiChevronLeft className="text-2xl" />
        </a>
        <a
          href="#"
          className="mr-2 inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900   "
        >
          <span className="sr-only">Next page</span>
          <HiChevronRight className="text-2xl" />
        </a>
        <span className="text-sm font-normal text-gray-500 ">
          Showing&nbsp;
          <span className="font-semibold text-gray-900 ">1-20</span>
          &nbsp;of&nbsp;
          <span className="font-semibold text-gray-900 ">{count}</span>
        </span>
      </div>
    </div>
  );
};
