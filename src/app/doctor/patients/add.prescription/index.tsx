import { Button, Modal } from "flowbite-react";
import { FC, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { HiPlus } from "react-icons/hi";

interface PrescriptionFormData {
  patientName: string;
  medicine: string;
  dosage: string;
  grams: number;
  instructions: string;
}

interface Medicine {
  name: string;
  gramsOptions: number[];
}

const medicines: Medicine[] = [
  { name: "Medicine A", gramsOptions: [100, 250, 500, 1000] },
  { name: "Medicine B", gramsOptions: [200, 400, 600, 800] },
  { name: "Medicine C", gramsOptions: [50, 100, 150, 200] },
];

interface AddPrescriptionProps {}

const AddPrescriptionModal: FC<AddPrescriptionProps> = ({}) => {
  const [isOpen, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PrescriptionFormData>();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Medicine[]>([]);
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(
    null
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    console.log(event.target.value);

    const filteredMedicines = medicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(term)
    );
    setSearchResults(filteredMedicines);
  };

  const onSubmit = (data: PrescriptionFormData) => {
    // Handle form submission and data processing here
    console.log(data);
  };

  return (
    <>
      <Button color="purple" onClick={() => setOpen(true)}>
        <div className="flex items-center gap-x-3">
          <HiPlus className="text-base" />
          Add Prescription
        </div>
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <Modal.Header className="border-b border-gray-200 !p-6 ">
          <strong>Add Medicine</strong>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto bg-white p-6 rounded shadow"
          >
            <div className="mb-4">
              <label
                htmlFor="patientName"
                className="block text-gray-700 font-bold mb-2"
              >
                Patient Name
              </label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                // ref={register({ required: true })}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              {errors.patientName && (
                <span className="text-red-500 text-xs italic">
                  Patient Name is required
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="medicine"
                className="block text-gray-700 font-bold mb-2"
              >
                Medicine
              </label>
              <input
                type="text"
                id="medicine"
                name="medicine"
                onChange={handleSearch}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              {searchTerm && (
                <ul className="bg-white border border-gray-300 rounded mt-1 z-50 absolute">
                  {searchResults.map((medicine) => (
                    <li
                      key={medicine.name}
                      // onClick={() => handleMedicineSelection(medicine)}
                      className="cursor-pointer hover:bg-gray-200 px-3 py-2"
                    >
                      {medicine.name}
                    </li>
                  ))}
                </ul>
              )}
              {errors.medicine && (
                <span className="text-red-500 text-xs italic">
                  Medicine is required
                </span>
              )}
            </div>
            {selectedMedicine && (
              <div className="mb-4">
                <label
                  htmlFor="grams"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Grams
                </label>
                <select
                  id="grams"
                  name="grams"
                  // ref={register({ required: true })}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                >
                  <option value="">Select Grams</option>
                  {selectedMedicine.gramsOptions.map((gramsOption) => (
                    <option key={gramsOption} value={gramsOption}>
                      {gramsOption}g
                    </option>
                  ))}
                </select>
                {errors.grams && (
                  <span className="text-red-500 text-xs italic">
                    Grams are required
                  </span>
                )}
              </div>
            )}
            <div className="mb-4">
              <label
                htmlFor="dosage"
                className="block text-gray-700 font-bold mb-2"
              >
                Dosage
              </label>
              <input
                type="text"
                id="dosage"
                name="dosage"
                // ref={register({ required: true })}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              {errors.dosage && (
                <span className="text-red-500 text-xs italic">
                  Dosage is required
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="instructions"
                className="block text-gray-700 font-bold mb-2"
              >
                Instructions
              </label>
              <select
                id="instructions"
                name="instructions"
                // ref={register({ required: true })}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              >
                <option value="">Select Instructions</option>
                <option value="1-1-1">1-1-1</option>
                <option value="2-2-2">2-2-2</option>
                <option value="2-2">2-2</option>
                <option value="1-1">1-1</option>
              </select>
              {errors.instructions && (
                <span className="text-red-500 text-xs italic">
                  Instructions are required
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="primary" type="submit">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPrescriptionModal;
