import { PrescriptionFormData } from "@/interfaces/patient";
import { FC, RefObject } from "react";
import { FieldArrayWithId } from "react-hook-form";

interface PrintProps {
  medicinefields: FieldArrayWithId<PrescriptionFormData, "medicines", "id">[];
  testsfields: FieldArrayWithId<PrescriptionFormData, "tests", "id">[];
  diagnosefields: FieldArrayWithId<PrescriptionFormData, "diagnosis", "id">[];
  printRef: RefObject<HTMLDivElement>;
}

const PrintPrescription: FC<PrintProps> = ({
  medicinefields,
  printRef,
  testsfields,
  diagnosefields,
}) => {
  return (
    <div className="h-[11.7in] hidden" ref={printRef}>
      <div className="flex justify-between items-cneter">
        <div className="p-8">
          <div className="flex flex-col text-blue-900 h-content">
            <span className="font-bold text-2xl">
              Polyclinic Hospital Islamabad
            </span>
            <span>General OPD</span>
            <span>Mon Jul 10 2023</span>
            <span>14:35:52 GMT+0500 (Pakistan Standard Time)</span>
            <span>Dr. Ihsan Khan (General Medical Officer)</span>
          </div>
        </div>

        <div className="flex gap-16 items-cneter px-24 text-blue-900 font-bold text-xl">
          <div className="my-auto">
            <div className="text-center">Visit ID</div>
            <div className="text-center font-normal">0810928093812083</div>
          </div>
          <div className="my-auto">
            <div className="text-center">Patient ID</div>
            <div className="text-center font-normal">0810928093812083</div>
          </div>
        </div>
      </div>

      <div className="flex h-full border-t border-black">
        <div className="w-1/6 border-r border-black h-full px-4 py-8">
          <div className="h-1/3">
            <div className="text-white rounded-lg px-4 py-2 text-xl w-full bg-blue-900">
              Dignosis
            </div>

            {diagnosefields.map((item, index) => (
              <div
                className={`text-blue-900 px-6 my-4 p-2 rounded-xl bg-blue-50 ${
                  item.title === "" && "hidden"
                }`}
                key={index}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="h-2/3">
            <div className="text-white rounded-lg px-4 py-2 text-xl w-full bg-blue-900 ">
              Lab Test
            </div>

            {testsfields.map((item, index) => (
              <div
                className={`text-blue-900 px-6 my-4 p-2 bg-blue-50 rounded-lg ${
                  item.title === "" && "hidden"
                }`}
                key={index}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>

        <div className="w-5/6 p-6">
          <div className="font-bold text-4xl text-blue-900">Rx</div>
          {medicinefields.map((item, index) => (
            <div className="my-4 text-blue-900 text-xl flex justify-between p-4 rounded bg-gray-50">
              <span>
                {item.name} {item.dosage}mg
              </span>
              <span>{item.instructions}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrintPrescription;
