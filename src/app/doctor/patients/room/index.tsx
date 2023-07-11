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
import { Opd } from "@/interfaces/opd";

interface RoomProps {
  data: any;
}

const Room: FC<RoomProps> = ({ data }) => {
  const componentRef = useRef<HTMLDivElement>(null);

  console.log(data);

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

  if (!data?.status || (data && data.status === "Closed"))
    return (
      <div className="flex items-center justify-between border-b border-gray-200 bg-white p-4 m-4 rounded">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">You Don't have any opd assigned</h1>
        </div>
      </div>
    );

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
          <div>
            Name: {data?.patient?.firstName + " " + data?.patient?.lastName}{" "}
          </div>
          <div>Father Name: {data?.patient.fatherName}</div>
          <div>Gender : {data?.patient?.gender} </div>
          <div>CINC : {data?.patient?.cnic} </div>
          <div>Visit ID : {data?.appointment?._id}</div>
          <div>MRN : {data?.patient?._id}</div>
          <div>Address : {data?.patient?.city}</div>
          <div>Date : {new Date().toISOString().split("T")[0]} </div>
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
