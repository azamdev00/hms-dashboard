import React, { FC } from "react";
import { MdOutlineLocalHospital } from "react-icons/md";

interface JoinOpdProps {}

const JoinOpd: FC<JoinOpdProps> = () => {
  return (
    <div className="overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 md:h-full">
      <div className="p-4 w-full max-w-md h-full md:h-auto m-auto">
        <div className="p-4 text-center bg-white rounded-lg shadow  sm:p-5">
          <MdOutlineLocalHospital className="m-auto text-5xl text-blue-600" />
          <p className="mb-4 text-gray-500 mt-10">
            Are you sure you want to Join this OPD?
          </p>
          <div className="flex justify-center items-center space-x-4">
            <button
              data-modal-toggle="deleteModal"
              type="button"
              className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 "
            >
              No, cancel
            </button>
            <button
              type="submit"
              className="py-2 px-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-red-300 "
            >
              Yes, I'm sure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOpd;
