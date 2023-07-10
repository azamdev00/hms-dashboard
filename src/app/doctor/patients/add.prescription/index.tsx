import { Button, Modal } from "flowbite-react";
import { FC, useState } from "react";
import {
  UseFieldArrayAppend,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { HiPlus } from "react-icons/hi";

const medicines = [
  { name: "Medicine A" },
  { name: "Medicine B" },
  { name: "Medicine C" },
];

interface AddPrescriptionProps {
  append: UseFieldArrayAppend<PrescriptionFormData, "medicines">;
  index: number;
  register: UseFormRegister<PrescriptionFormData>;
  setValue: UseFormSetValue<PrescriptionFormData>;
}

const initialMedicine: Medicine = {
  name: "",
  grams: 0,
  dosage: "",
  instructions: "",
};

const AddPrescriptionModal: FC<AddPrescriptionProps> = ({
  append,
  index,
  register,
  setValue,
}) => {
  const [isOpen, setOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredMedicines = medicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(term)
    );
    setSearchResults(filteredMedicines);
  };

  const handleMedicineSelection = (name: string) => {
    setValue(`medicines.${index}.name`, name);
    setSearchTerm(name);
    setSearchResults([]);
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
          <div className="mb-4">
            <label
              htmlFor="medicineSearch"
              className="block text-gray-700 font-bold mb-2"
            >
              Search Medicine
            </label>
            <input
              type="text"
              id="medicineSearch"
              // name="medicineSearch"
              onChange={handleSearch}
              value={searchTerm}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            {searchTerm && (
              <ul className="bg-white border border-gray-300 rounded mt-1">
                {searchResults.map((medicine: any) => (
                  <li
                    key={medicine.name}
                    onClick={() => handleMedicineSelection(medicine.name)}
                    className="cursor-pointer hover:bg-gray-200 px-3 py-2"
                  >
                    {medicine.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="border border-gray-300 rounded p-4 mb-4">
            <div className="mb-4">
              <label
                htmlFor={`medicines[${index}].dosage`}
                className="block text-gray-700 font-bold mb-2"
              >
                Dosage
              </label>
              <input
                type="number"
                {...register(`medicines.${index}.dosage`)}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor={`medicines[${index}].instructions`}
                className="block text-gray-700 font-bold mb-2"
              >
                Instructions
              </label>
              <select
                id="instructions"
                {...register(`medicines.${index}.instructions`)}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              >
                <option value="">Select Instructions</option>
                <option value="1-1-1">1-1-1</option>
                <option value="2-2-2">2-2-2</option>
                <option value="2-2">2-2</option>
                <option value="1-1">1-1</option>
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="primary"
            type="button"
            onClick={() => {
              append(initialMedicine);
              setOpen(false);
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPrescriptionModal;

interface PrescriptionFormData {
  medicines: Medicine[];
}

interface Medicine {
  name: string;
  grams: number;
  dosage: string;
  instructions: string;
}
