"use client";

import { Diagnose, PrescriptionFormData, Tests } from "@/interfaces/patient";
import { Table } from "flowbite-react";
import { FC } from "react";
import {
  UseFormRegister,
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
} from "react-hook-form";
import { FaMinus, FaPlus } from "react-icons/fa";

interface TestsTableProps {
  register: UseFormRegister<PrescriptionFormData>;
  fields: FieldArrayWithId<PrescriptionFormData, "tests", "id">[];
  append: UseFieldArrayAppend<PrescriptionFormData, "tests">;
  remove: UseFieldArrayRemove;
}

const TestsTable: FC<TestsTableProps> = ({
  register,
  fields,
  append,
  remove,
}) => {
  return (
    <>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Remove</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {fields.map((item, index: number) => {
            return (
              <>
                {index === fields.length - 1 ? (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={index}
                  >
                    <Table.Cell>
                      <div className="mb-4">
                        <input
                          type="text"
                          {...register(`tests.${index}.title`)}
                          className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div
                        className="cursor-pointer rounded-full hover:bg-green-200 p-2 h-min w-min"
                        onClick={() => append(initialTests)}
                      >
                        <FaPlus className="text-green-500" />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ) : (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={index}
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </Table.Cell>

                    <Table.Cell>
                      <div
                        className="cursor-pointer rounded-full hover:bg-red-200 p-2 h-min w-min"
                        onClick={() => remove(index)}
                      >
                        <FaMinus className="text-red-500" />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                )}
              </>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default TestsTable;

const initialTests: Tests = {
  title: "",
};
