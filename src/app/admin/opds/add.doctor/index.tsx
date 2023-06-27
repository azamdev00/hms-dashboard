import { Button, Modal } from "flowbite-react";
import { FC, FormEvent, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { toast } from "react-toastify";
import { fetchAPIPOSTRequest } from "@/config";
import { ResponseObject } from "@/interfaces/response";
import { Patient } from "@/interfaces/patient";
import { Opd } from "@/interfaces/opd";
import { Doctor } from "@/interfaces/doctor";

interface AddDoctorProps {
  setOpds: Function;
  doctors: Doctor[];
}

const AssignDoctorModal: FC<AddDoctorProps> = ({ setOpds, doctors }) => {
  const [isOpen, setOpen] = useState(false);

  const handleAddDoctor = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);
    // const postData = {};
    // const id = toast.loading("Adding Doctor");
    // const data: ResponseObject = await fetchAPIPOSTRequest("patient", postData);
    // const status: "error" | "success" =
    //   data.status === "fail" || data.status === "error" ? "error" : "success";

    // if (status === "success") setOpds((prev: Opd[]) => [...prev, data.items]);
    // toast.update(id, {
    //   render: data.message,
    //   type: status,
    //   isLoading: false,
    //   autoClose: 5000,
    // });
    // if (status === "success") {
    //   setOpen((prev: boolean) => !prev);
    // }
  };

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        <div className="flex items-center gap-x-3">
          <HiPlus className="text-base" />
          Assign Doctor
        </div>
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <form onSubmit={handleAddDoctor}>
          <Modal.Header className="border-b border-gray-200 !p-6 ">
            <strong>Assign Doctor</strong>
          </Modal.Header>
          <Modal.Body>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select a doctor.
              </label>
              <select
                name="doctor"
                defaultValue={""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option value={""}>Choose a doctor</option>
                {doctors.map((doctor: Doctor, index: number) => (
                  <option value={doctor._id} key={index}>
                    {doctor.fullName}
                  </option>
                ))}
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

export default AssignDoctorModal;
