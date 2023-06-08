"use client";
import { Doctor } from "@/interfaces/doctor";
import { Table } from "flowbite-react";
import { FC, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import EditDoctorModal from "../edit";
import DeleteDoctorModal from "../delete";
import AddDoctorModal from "../add";

interface DoctorListProps {
  data: Doctor[];
}

const DoctorList: FC<DoctorListProps> = ({ data }) => {
  const [doctors, setDoctors] = useState(data);
  return (
    <>
      <div className="flex justify-end pr-10 bg-white w-full">
        <AddDoctorModal />
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <Table className="min-w-full divide-y divide-gray-200 ">
                <Table.Head className="bg-gray-100 ">
                  <Table.HeadCell>Name</Table.HeadCell>
                  <Table.HeadCell>speciality</Table.HeadCell>
                  <Table.HeadCell>City</Table.HeadCell>
                  <Table.HeadCell>Year Experience</Table.HeadCell>
                  <Table.HeadCell>Actions</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y divide-gray-200 bg-white  ">
                  {doctors.map((item: Doctor, index: number) => (
                    <Table.Row className="hover:bg-gray-100 " key={index}>
                      <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                        <div className="text-sm font-normal text-gray-500 ">
                          <div className="text-base font-semibold text-gray-900 ">
                            {item.fullName}
                          </div>
                          <div className="text-sm font-normal text-gray-500 ">
                            {item.email}
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 ">
                        {item.speciality}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 ">
                        {item.city}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-base font-normal text-gray-900 ">
                        {item.yearOfExperience}
                      </Table.Cell>
                      <Table.Cell>
                        <div className="flex items-center gap-x-3 whitespace-nowrap">
                          <EditDoctorModal />
                          <DeleteDoctorModal />
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default DoctorList;

export const Pagination: FC = function () {
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
          <span className="font-semibold text-gray-900 ">2290</span>
        </span>
      </div>
    </div>
  );
};
