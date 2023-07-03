import { Button, Modal } from "flowbite-react";
import { FC, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { fetchAPIPOSTRequest } from "@/config";
import { ResponseObject } from "@/interfaces/response";
import { Opd } from "@/interfaces/opd";

interface OPDStatusProps {
  setOpds: Function;
  id: string;
  isOpen: boolean;
  handleOpen: () => void;
}

const OpdStatusModal: FC<OPDStatusProps> = ({
  setOpds,
  id,
  isOpen,
  handleOpen,
}) => {
  const handleAddOPD = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    console.log(formValues);

    const toastId = toast.loading("Status Changing...");
    const data: ResponseObject = await fetchAPIPOSTRequest(`opd/changestatus`, {
      ...formValues,
      id,
    });
    const status: "error" | "success" =
      data.status === "fail" || data.status === "error" ? "error" : "success";

    console.log(data);

    toast.update(toastId, {
      render: data.message,
      type: status,
      isLoading: false,
      autoClose: 5000,
    });
    if (status === "success") {
      setOpds((prev: Opd[]) =>
        prev.map((opd: Opd) =>
          opd._id === id
            ? {
                ...opd,
                status: formValues.status,
              }
            : opd
        )
      );
      handleOpen();
    }
  };

  return (
    <>
      <Modal onClose={handleOpen} show={isOpen}>
        <form onSubmit={handleAddOPD}>
          <Modal.Header className="border-b border-gray-200 !p-6 ">
            <strong>Change Status</strong>
          </Modal.Header>
          <Modal.Body>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Change OPD Status.
              </label>
              <select
                name="status"
                defaultValue={""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option value={""}>Choose a Status</option>
                <option value={"Idle"}>Idle</option>
                <option value={"Closed"}>Closed</option>
                <option value={"Start"}>Start</option>
                <option value={"Stopped"}>Stopped</option>
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="success" type="submit">
              Change
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default OpdStatusModal;
