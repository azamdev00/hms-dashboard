/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import {
  Breadcrumb,
  Button,
  Checkbox,
  Label,
  Modal,
  Table,
  TextInput,
} from "flowbite-react";
import type { FC } from "react";
import { useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiCog,
  HiDocumentDownload,
  HiDotsVertical,
  HiExclamationCircle,
  HiHome,
  HiOutlineExclamationCircle,
  HiOutlinePencilAlt,
  HiPlus,
  HiTrash,
} from "react-icons/hi";

const UserListPage: FC = () => {
  return (
    <>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <h1 className="text-xl font-semibold text-gray-900  sm:text-2xl">
              Prescriptions
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserListPage;
