import { Button, Modal } from "flowbite-react";
import { FC, FormEvent, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { toast } from "react-toastify";
import { fetchAPIPOSTRequest } from "@/config";
import { ResponseObject } from "@/interfaces/response";
import { Opd } from "@/interfaces/opd";
import { Department } from "@/interfaces/department";

interface AddOPDProps {
  setOpds: Function;
  departments: Department[];
}

const AddOPDModal: FC<AddOPDProps> = ({ setOpds, departments }) => {
  const [isOpen, setOpen] = useState(false);

  const handleAddOPD = async (e: FormEvent<HTMLFormElement>) => {
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
      <Button color="success" onClick={() => setOpen(true)}>
        <div className="flex items-center gap-x-3">
          <HiPlus className="text-base" />
          Add OPD
        </div>
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <form onSubmit={handleAddOPD}>
          <Modal.Header className="border-b border-gray-200 !p-6 ">
            <strong>Add OPD</strong>
          </Modal.Header>
          <Modal.Body>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select an OPD.
              </label>
              <select
                name="doctor"
                defaultValue={""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option value={""}>Choose an OPD</option>
                {departments.map((department: Department, index: number) => (
                  <option value={department._id} key={index}>
                    {department.name}
                  </option>
                ))}
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="primary" type="submit">
              Add OPD
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default AddOPDModal;
