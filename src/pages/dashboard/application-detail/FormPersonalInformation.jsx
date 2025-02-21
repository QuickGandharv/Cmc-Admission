import Inputfield from "../../../components/forms/Inputfield";
import SelectField from "../../../components/forms/SelectField";
import Button from "../../../components/ui/Button";
import { useForm } from "react-hook-form";

const FormPersonalInformation = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: "",
    },
  });
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="w-full">
      <form action="" className={`w-full bg-white-default rounded-md `}>
        <div className="flex gap-10">
          <div className="w-full mt-0">
            <Inputfield label="Name of Application" labelclass="font-medium" />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="BFUHS Registration Id"
              labelclass="font-medium"
            />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="NEET pg 2024 Roll No."
              labelclass="font-medium"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full">
            <Inputfield label="Date of Birth" labelclass="font-medium" />
          </div>
          <div className="w-full">
            <SelectField
              name="category"
              control={control}
              label="Gender"
              labelclass="mb-2"
              options={options}
              placeholder="Select a Gender"
              rules={{ required: "Gender is required" }}
              className="flex flex-wrap flex-col mt-6"
            />
          </div>
          <div className="w-full">
            <SelectField
              name="category"
              control={control}
              label="Nationality"
              labelclass="mb-2"
              options={options}
              placeholder="Select a Nationality"
              rules={{ required: "Category is required" }}
              className="flex flex-wrap flex-col mt-6"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full">
            <SelectField
              name="category"
              control={control}
              label="Religion"
              labelclass="mb-2"
              options={options}
              placeholder="Select a Relegion"
              rules={{ required: "Relegion is required" }}
              className="flex flex-wrap flex-col mt-6"
            />
          </div>
          <div className="w-full">
            <Inputfield label="Address" labelclass="font-medium" />
          </div>
          <div className="w-full">
            <SelectField
              name="category"
              control={control}
              label="City"
              labelclass="mb-2"
              options={options}
              placeholder="Select a City"
              rules={{ required: "City is required" }}
              className="flex flex-wrap flex-col mt-6"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full">
            <SelectField
              name="category"
              control={control}
              label="State"
              labelclass="mb-2"
              options={options}
              placeholder="Select a State"
              rules={{ required: "State is required" }}
              className="flex flex-wrap flex-col mt-6"
            />
          </div>
          <div className="w-full">
            <Inputfield label="Pin" labelclass="font-medium" />
          </div>
          <div className="w-full">
            <Inputfield label="Email" labelclass="font-medium" />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full">
            <Inputfield label="Mobile No. 1" labelclass="font-medium" />
          </div>
          <div className="w-full">
            <Inputfield label="Mobile No. 2" labelclass="font-medium" />
          </div>
          <div className="w-full">
            <SelectField
              name="category"
              control={control}
              label="State of domicile"
              labelclass="mb-2"
              options={options}
              placeholder="Select a State of domicile"
              rules={{ required: "State of domicile is required" }}
              className="flex flex-wrap flex-col mt-6"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full">
            <Inputfield label="Aadhar Number" labelclass="font-medium" />
          </div>
          <div className="w-full">
            <Inputfield label="Father’s Name" labelclass="font-medium" />
          </div>
          <div className="w-full">
            <Inputfield label="Mother’s Name" labelclass="font-medium" />
          </div>
        </div>
        <div className="flex justify-end gap-3.5 mt-6">
          <Button
            text="Cancel"
            classname="[&]:py-2.5 [&]:px-7 [&]:rounded-full border-0 [&]:text-black-300 [&]:bg-primary-100"
          />
          <Button text="Save Changes" classname="[&]:rounded-full px-7 [&]:py-2.5" />
        </div>
      </form>
    </div>
  );
};

export default FormPersonalInformation;
