"use client";
import { Button } from "flowbite-react";
import { FC } from "react";
import AddPrescriptionModal from "../add.prescription";
import { useFieldArray, useForm } from "react-hook-form";
import MedicinesTable from "../table";

interface RoomProps {}

const Room: FC<RoomProps> = ({}) => {
  const { register, handleSubmit, control, setValue } =
    useForm<PrescriptionFormData>({
      defaultValues: {
        medicines: [{ dosage: "", grams: 0, instructions: "", name: "" }],
      },
    });

  return (
    <div>
      <div className="flex items-center justify-between border-b border-gray-200 bg-white p-4 m-4 rounded">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">General Medicle</h1>
        </div>
        <div className="flex items-center">
          <Button color={"success"}>Next</Button>
        </div>
      </div>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 m-4 rounded">
        <div className="grid grid-cols-3 space-y-1">
          <div>Name: Azam Dildar</div>
          <div>Father Name: Dildar</div>
          <div>Gender : Male</div>
          <div>CINC : 12345-1234567-1</div>
          <div>Visit ID : 12345678</div>
          <div>MRN : 12345678</div>
          <div>Address : Mansehra</div>
          <div>Date : 12-12-12</div>
        </div>
      </div>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 m-4 rounded">
        <div className="">
          <h1 className="text-lg font-bold">Prescriptions</h1>
          <MedicinesTable
            control={control}
            setValue={setValue}
            register={register}
          />
          <div className="flex space-x-4 mt-4">
            {/* <AddPrescriptionModal
              append={append}
              index={fields.length}
              register={register}
              setValue={setValue}
            /> */}
            <Button color={"purple"}>Add Diagnose</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;

interface PrescriptionFormData {
  medicines: Medicine[];
}

interface Medicine {
  name: string;
  grams: number;
  dosage: string;
  instructions: string;
}

const initialMedicine: Medicine = {
  name: "",
  grams: 0,
  dosage: "",
  instructions: "",
};
const medicines: Medicine[] = [
  { name: "Medicine A", grams: 0, dosage: "", instructions: "" },
  { name: "Medicine B", grams: 0, dosage: "", instructions: "" },
  { name: "Medicine C", grams: 0, dosage: "", instructions: "" },
];
