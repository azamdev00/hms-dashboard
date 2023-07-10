"use client";
import { Button } from "flowbite-react";
import { FC, useRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import MedicinesTable from "../table";
import { useReactToPrint } from "react-to-print";
import { FaPrint } from "react-icons/fa";
import PrintPrescription from "../print";
import { PrescriptionFormData } from "@/interfaces/patient";
import DiagnoseTable from "../diagnose";
import TestsTable from "../tests";

interface RoomProps {}

const Room: FC<RoomProps> = ({}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, control, setValue } =
    useForm<PrescriptionFormData>({
      defaultValues: {
        medicines: [{ dosage: "", grams: 0, instructions: "", name: "" }],
        diagnosis: [{ title: "" }],
        tests: [{ title: "" }],
      },
    });

  const {
    fields: diagnoseFields,
    append: diagnoseAppend,
    remove: diagnoseRemove,
  } = useFieldArray<PrescriptionFormData, "diagnosis", "id">({
    control,
    name: "diagnosis",
  });

  const {
    fields: testsFields,
    append: testsAppend,
    remove: testsRemove,
  } = useFieldArray<PrescriptionFormData, "tests", "id">({
    control,
    name: "tests",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "medicines",
  });

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div className="flex items-center justify-between border-b border-gray-200 bg-white p-4 m-4 rounded">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">General Medicle</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            color={"warning"}
            onClick={() => {
              componentRef.current?.classList.toggle("hidden");
              handlePrint();
              componentRef.current?.classList.toggle("hidden");
            }}
          >
            <FaPrint className="mr-2" />
            Print
          </Button>
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
          <h1 className="text-lg font-bold">Diagnosis</h1>
          <DiagnoseTable
            register={register}
            fields={diagnoseFields}
            remove={diagnoseRemove}
            append={diagnoseAppend}
          />
        </div>
      </div>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 m-4 rounded">
        <div className="">
          <h1 className="text-lg font-bold">Lab Tests</h1>
          <TestsTable
            register={register}
            fields={testsFields}
            remove={testsRemove}
            append={testsAppend}
          />
        </div>
      </div>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 m-4 rounded">
        <div className="">
          <h1 className="text-lg font-bold">Prescriptions</h1>
          <MedicinesTable
            setValue={setValue}
            register={register}
            fields={fields}
            remove={remove}
            append={append}
          />
        </div>
      </div>
      <PrintPrescription
        medicinefields={fields}
        testsfields={testsFields}
        diagnosefields={diagnoseFields}
        printRef={componentRef}
      />
    </div>
  );
};

export default Room;
