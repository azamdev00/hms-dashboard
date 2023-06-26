import { Button, Label, Modal } from "flowbite-react";
import { FC, useState } from "react";
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

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Patient>({
    resolver: joiResolver(PatientSchema, {
      errors: { wrap: { label: "" } },
      abortEarly: false,
    }),
  });

  const handleAddPatient = async (postdata: Patient) => {
    const id = toast.loading("Adding Patient");
    const data: ResponseObject = await fetchAPIPOSTRequest("patient", postdata);
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
      reset();
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
        <form onSubmit={handleSubmit(handleAddPatient)}>
          <Modal.Header className="border-b border-gray-200 !p-6 ">
            <strong>Add New Patient</strong>
          </Modal.Header>
          <Modal.Body>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label>First Name</Label>
                <div className="mt-1">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="First Name"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <div className="text-red-600 text-sm">
                      {errors.firstName.message}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <Label>Last Name</Label>
                <div className="mt-1">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Last Name"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <div className="text-red-600 text-sm">
                      {errors.lastName.message}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Label>Email</Label>
                <div className="mt-1">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="example@domain.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <div className="text-red-600 text-sm">
                      {errors.email.message}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <Label>Phone number</Label>
                <div className="mt-1">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="03*********"
                    {...register("mobile")}
                  />
                  {errors.mobile && (
                    <div className="text-red-600 text-sm">
                      {errors.mobile.message}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <Label>CNIC</Label>
                <div className="mt-1">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="12345-1234567-1"
                    {...register("cnic")}
                  />
                  {errors.cnic && (
                    <div className="text-red-600 text-sm">
                      {errors.cnic.message}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <Label>Password</Label>
                <div className="mt-1">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <div className="text-red-600 text-sm">
                      {errors.password.message}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <Label>address</Label>
                <div className="mt-1">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Phase-A"
                    {...register("address")}
                  />
                  {errors.address && (
                    <div className="text-red-600 text-sm">
                      {errors.address.message}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <Label>city</Label>
                <div className="mt-1">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Bharia Town"
                    {...register("city")}
                  />
                  {errors.city && (
                    <div className="text-red-600 text-sm">
                      {errors.city.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="primary" type="submit">
              Add Patient
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default AddPatientModal;
