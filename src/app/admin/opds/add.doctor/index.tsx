import { Button, Label, Modal } from "flowbite-react";
import { FC, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { HiPlus } from "react-icons/hi";
import { joiResolver } from "@hookform/resolvers/joi";
import { DoctorSchema } from "@/validations/doctor";
import { toast } from "react-toastify";
import { fetchAPIPOSTRequest } from "@/config";
import { ResponseObject } from "@/interfaces/response";
import { Patient } from "@/interfaces/patient";
import { PatientSchema } from "@/validations/patient";

interface AddPatientProps {
  setPatients: Function;
}

const AddPatientModal: FC<AddPatientProps> = ({ setPatients }) => {
  const [isOpen, setOpen] = useState(false);

  const handleAddDoctor = async (e: FormEvent) => {
    e.preventDefault();
    const postData = {};
    const id = toast.loading("Adding Doctor");
    const data: ResponseObject = await fetchAPIPOSTRequest("patient", postData);
    const status: "error" | "success" =
      data.status === "fail" || data.status === "error" ? "error" : "success";

    if (status === "success")
      setPatients((prev: Patient[]) => [...prev, data.items]);
    toast.update(id, {
      render: data.message,
      type: status,
      isLoading: false,
      autoClose: 5000,
    });
    if (status === "success") {
      setOpen((prev: boolean) => !prev);
    }
  };

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        <div className="flex items-center gap-x-3">
          <HiPlus className="text-xl" />
          Add Patient
        </div>
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <form onSubmit={handleAddDoctor}>
          <Modal.Header className="border-b border-gray-200 !p-6 ">
            <strong>Assign Patient</strong>
          </Modal.Header>
          <Modal.Body>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select an option
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="primary" type="submit">
              Add Doctor
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default AddPatientModal;
