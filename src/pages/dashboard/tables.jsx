import {
  Card,
  CardBody,
  Typography,
  Avatar,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import { FaRegEdit } from "react-icons/fa";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Swal from "sweetalert2";
import { authorsTableData as initialData } from "@/data"; // Assuming this is your data source

const cowBreeds = [
  "Holstein",
  "Jersey",
  "Guernsey",
  "Ayrshire",
  "Shorthorn",
  "Charolais",
  "Hereford",
  "Angus",
  "Simmental",
  "Limousin",
  "Dexter",
  "Zebu",
  "Sahiwal",
  "Kankrej",
];

export function Tables() {
  const [open, setOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentCow, setCurrentCow] = useState(null);
  const [cowData, setCowData] = useState(initialData);

  const handleOpen = () => setOpen(!open);

  const handleBreedChange = (e) => {
    const breed = e.target.value;
    setSelectedBreed(breed);
  };

  const handleEditClick = (cow) => {
    setIsEditMode(true);
    setCurrentCow(cow);
    setSelectedBreed(cow.breed);
    setOpen(true);
  };

  const handleFormSubmit = () => {
    const newCow = {
      img: "path/to/default/image.jpg", // Update this with the actual image path or file
      breed: selectedBreed,
      age: parseInt(document.querySelector('input[type="number"][placeholder="Age"]').value),
      price: parseFloat(document.querySelector('input[type="number"][placeholder="Price"]').value),
      litresOfMilk: parseFloat(document.querySelector('input[type="number"][placeholder="Litres of Milk"]').value),
      description: document.querySelector('textarea').value,
    };
  
    if (isEditMode) {
      const updatedCows = cowData.map((cow) => (cow === currentCow ? { ...cow, ...newCow } : cow));
      setCowData(updatedCows);
    } else {
      setCowData([...cowData, newCow]);
    }
  
    // Close the modal and reset the form
    setOpen(false);
    setSelectedBreed(""); // Reset selected breed after saving
  };
  

  const handleDeleteClick = (cow) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedData = cowData.filter((item) => item !== cow);
        setCowData(updatedData);

        Swal.fire({
          title: 'Deleted!',
          text: 'Your cow has been deleted.',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        });
      }
    });
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <div className="flex justify-between items-center mb-2 px-4">
            <Typography variant="h3" color="blue" className="font-bold pl-2 pr-4 rounded-lg mt-6 bg-indigo-100">
              Dairy Cows Table
            </Typography>
            <Button
              variant="gradient"
              color="blue"
              className="text-white mt-6 font-bold"
              onClick={() => {
                setIsEditMode(false);
                setCurrentCow(null);
                setOpen(true);
              }}
            >
              Add Product
            </Button>
          </div>

          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "Image",
                  "Breed",
                  "Age",
                  "Price",
                  "Description",
                  "Litres of Milk",
                  "Edit",
                  "Delete",
                ].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cowData.map((cow, key) => {
                const className = `py-3 px-5 ${
                  key === cowData.length - 1 ? "" : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={key}>
                    <td className={className}>
                      <Avatar src={cow.img} alt={cow.breed} size="sl" variant="rounded" className="w-20 h-20 object-cover" />
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">{cow.breed}</Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">{cow.age} years</Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">Kshs.{cow.price}</Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-normal text-blue-gray-500">{cow.description}</Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">{cow.litresOfMilk} litres</Typography>
                    </td>
                    <td className={className}>
                      <Typography as="a" href="#" className="text-xs">
                        <FaRegEdit className="h-5 w-5 text-blue-600" onClick={() => handleEditClick(cow)} />
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography as="a" href="#" className="text-xs">
                        <TrashIcon className="h-5 w-5 text-red-600" onClick={() => handleDeleteClick(cow)} />
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>

      <Dialog open={open} handler={handleOpen} size="md">
        <DialogHeader>{isEditMode ? "Edit Product" : "Add New Product"}</DialogHeader>
        <DialogBody divider>
          <form className="flex flex-col gap-2">
          <Select
  label="Breed"
  size="lg"
  value={selectedBreed}
  onChange={(value) => setSelectedBreed(value)} // Update the breed state on selection
>
  {cowBreeds.map((breed, index) => (
    <Option key={index} value={breed}>
      {breed}
    </Option>
  ))}
</Select>

            <Input label="Age" size="lg" type="number" placeholder="Age" defaultValue={isEditMode && currentCow ? currentCow.age : ""} />
            <Input label="Price" size="lg" type="number" placeholder="Price" defaultValue={isEditMode && currentCow ? currentCow.price : ""} />
            <Input label="Litres of Milk" size="lg" type="number" placeholder="Litres of Milk" defaultValue={isEditMode && currentCow ? currentCow.litresOfMilk : ""} />
            <form className="flex items-center space-x-6">
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                />
              </label>
            </form>
            <Textarea label="Description" size="lg" defaultValue={isEditMode && currentCow ? currentCow.description : ""} />
          </form>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
            Cancel
          </Button>
          <Button variant="gradient" color="blue" onClick={handleFormSubmit}>
            {isEditMode ? "Update" : "Save"}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default Tables;
