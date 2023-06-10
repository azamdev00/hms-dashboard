import { AddDoctor, Doctor } from "@/interfaces/doctor";
import { Button, Label, Modal } from "flowbite-react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { HiPlus } from "react-icons/hi";
import { joiResolver } from "@hookform/resolvers/joi";
import { DoctorSchema } from "@/validations/doctor";
import { toast } from "react-toastify";
import { fetchAPIPOSTRequest } from "@/config";
import { ResponseObject } from "@/interfaces/response";

interface AddDoctorProps {
  setDoctors: Function;
}

const AddDoctorModal: FC<AddDoctorProps> = ({ setDoctors }) => {
  const [isOpen, setOpen] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<AddDoctor>({
    resolver: joiResolver(DoctorSchema, {
      errors: { wrap: { label: "" } },
      abortEarly: false,
    }),
  });

  const handleAddDoctor = async (postdata: AddDoctor) => {
    const id = toast.loading("Adding Doctor");
    const data: ResponseObject = await fetchAPIPOSTRequest("doctor", postdata);
    const status: "error" | "success" =
      data.status === "fail" || data.status === "error" ? "error" : "success";

    if (status === "success")
      setDoctors((prev: Doctor[]) => [...prev, data.items]);
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
          Add user
        </div>
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <Modal.Header className="border-b border-gray-200 !p-6 ">
            <strong>Add New Doctor</strong>
          </Modal.Header>
          <Modal.Body>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label>Full Name</Label>
                <div className="mt-1">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Full Name"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <div className="text-red-600 text-sm">
                      {errors.fullName.message}
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
              <div>
                <Label>state</Label>
                <div className="mt-1">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Islamabad"
                    {...register("state")}
                  />
                  {errors.state && (
                    <div className="text-red-600 text-sm">
                      {errors.state.message}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <Label>Specialization</Label>
                <div className="mt-1">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Cardiologist"
                    {...register("speciality")}
                  />
                  {errors.speciality && (
                    <div className="text-red-600 text-sm">
                      {errors.speciality.message}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <Label>Year Of Experience</Label>
                <div className="mt-1">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="00"
                    {...register("yearOfExperience")}
                  />
                  {errors.yearOfExperience && (
                    <div className="text-red-600 text-sm">
                      {errors.yearOfExperience.message}
                    </div>
                  )}
                </div>
              </div>
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

export default AddDoctorModal;
