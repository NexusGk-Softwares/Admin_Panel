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
import { authorsTableData } from "@/data"; // Assuming this is your data source

// Sample list of breeds and corresponding genders
const cowBreeds = {
  "Holstein": "Female",
  "Jersey": "Female",
  "Guernsey": "Female",
  "Ayrshire": "Female",
  "Shorthorn": "Female",
  "Charolais": "Male",
  "Hereford": "Male",
  "Angus": "Male",
  "Simmental": "Male",
  "Limousin": "Male",
  "Dexter": "Female",
  "Zebu": "Male",
  "Sahiwal": "Female",
  "Kankrej": "Male",
};

export function Tables() {
  const [open, setOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [gender, setGender] = useState("");

  const handleOpen = () => setOpen(!open);

  const handleBreedChange = (e) => {
    const breed = e.target.value;
    setSelectedBreed(breed);
    setGender(cowBreeds[breed] || ""); // Set gender based on breed
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      {/* Dairy Cows Table */}
      <Card>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <div className="flex justify-between items-center mb-2 px-4">
            {/* Table Title */}
            <Typography variant="h2" color="blue" className="font-bold">
              Dairy Cows Table
            </Typography>
            {/* Add Product Button */}
            <Button
              variant="gradient"
              color="blue"
              className="text-white font-bold"
              onClick={handleOpen}
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
                  "Gender",
                  "Edit",
                  "Delete",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                (
                  { img, breed, age, price, description, litresOfMilk, gender },
                  key
                ) => {
                  const className = `py-3 px-5 ${
                    key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={key}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar
                            src={img}
                            alt={breed}
                            size="sm"
                            variant="rounded"
                          />
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {breed}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {age} years
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          ${price}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {description}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {litresOfMilk} litres
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {gender}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography as="a" href="#" className="text-xs">
                          <FaRegEdit className="h-5 w-5 text-blue-gray-600" />
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography as="a" href="#" className="text-xs">
                          <TrashIcon className="h-5 w-5 text-red-600" />
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>

      {/* Modal for Adding Product */}
      <Dialog open={open} handler={handleOpen} size="md">
        <DialogHeader>Add New Product</DialogHeader>
        <DialogBody divider>
          <form className="flex flex-col gap-2">
            {/* Column form layout */}
            <Select
              label="Breed"
              size="lg"
              value={selectedBreed}
              onChange={handleBreedChange}
            >
              {Object.keys(cowBreeds).map((breed) => (
                <Option key={breed} value={breed}>
                  {breed}
                </Option>
              ))}
            </Select>
            <Input
              label="Age"
              size="lg"
              type="number"
            />
            <Input
              label="Price"
              size="lg"
              type="number"
            />
            <Input
              label="Litres of Milk"
              size="lg"
              type="number"
            />
            <Input
              label="Gender"
              size="lg"
              value={gender}
              readOnly
            />
            <Input
              label="Image URL"
              size="lg"
            />
            <Textarea
              label="Description"
              size="lg"
            />
          </form>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
            Cancel
          </Button>
          <Button variant="gradient" color="blue" onClick={handleOpen}>
            Add
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default Tables;
