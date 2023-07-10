"use client";

import { Medicine, PrescriptionFormData } from "@/interfaces/patient";
import { Table } from "flowbite-react";
import { FC, useRef, useState } from "react";
import {
  UseFormSetValue,
  UseFormRegister,
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
} from "react-hook-form";
import { FaMinus, FaPlus } from "react-icons/fa";

interface MedinceTableProps {
  register: UseFormRegister<PrescriptionFormData>;
  setValue: UseFormSetValue<PrescriptionFormData>;
  fields: FieldArrayWithId<PrescriptionFormData, "medicines", "id">[];
  append: UseFieldArrayAppend<PrescriptionFormData, "medicines">;
  remove: UseFieldArrayRemove;
}

const MedicinesTable: FC<MedinceTableProps> = ({
  setValue,
  register,
  fields,
  append,
  remove,
}) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredMedicines = medicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(term)
    );
    setSearchResults(filteredMedicines);
  };

  const handleMedicineSelection = (index: number, name: string) => {
    setValue(`medicines.${index}.name`, name);
    setSearchTerm("");
    if (searchRef.current) {
      searchRef.current.value = name;
    }
    setSearchResults([]);
  };
  return (
    <>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Dosage</Table.HeadCell>
          <Table.HeadCell>Instructions</Table.HeadCell>
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
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <div className="mb-4">
                        <input
                          type="text"
                          id="medicineSearch"
                          onChange={handleSearch}
                          ref={searchRef}
                          className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                        {searchTerm && (
                          <ul className="bg-white border border-gray-300 rounded mt-1">
                            {searchResults.map((medicine: any) => (
                              <li
                                key={medicine.name}
                                onClick={() =>
                                  handleMedicineSelection(index, medicine.name)
                                }
                                className="cursor-pointer hover:bg-gray-200 px-3 py-2"
                              >
                                {medicine.name}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="mb-4">
                        <input
                          type="number"
                          {...register(`medicines.${index}.dosage`)}
                          className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="mb-4">
                        <select
                          id="instructions"
                          {...register(`medicines.${index}.instructions`)}
                          className="border border-gray-300 rounded px-3 py-2 w-full"
                        >
                          <option value="">Select Instructions</option>
                          <option value="1-1-1">1-1-1</option>
                          <option value="2-2-2">2-2-2</option>
                          <option value="2-2">2-2</option>
                          <option value="1-1">1-1</option>
                        </select>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div
                        className="cursor-pointer rounded-full hover:bg-green-200 p-2 h-min w-min"
                        onClick={() => append(initialMedicine)}
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
                      {item.name}
                    </Table.Cell>
                    <Table.Cell>{item.dosage}</Table.Cell>
                    <Table.Cell>{item.instructions}</Table.Cell>
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

export default MedicinesTable;

const initialMedicine: Medicine = {
  name: "",
  grams: 0,
  dosage: "",
  instructions: "",
};

const medicines = [
  { name: "Medicine A" },
  { name: "Medicine B" },
  { name: "Medicine C" },
];
