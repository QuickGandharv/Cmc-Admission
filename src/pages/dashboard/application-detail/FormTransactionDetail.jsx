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
    <form action="" className={`w-full bg-white-default rounded-md `}>
      <div className="flex gap-10">
        <div className="w-full mt-0">
          <Inputfield label="Amount Paid" labelclass="font-medium" />
        </div>
        <div className="w-full mt-0">
          <Inputfield label="Date of Birth" labelclass="font-medium" />
        </div>
        <div className="w-full mt-0">
          <Inputfield label="UTR/Transaction ID" labelclass="font-medium" />
        </div>
      </div>
      <div className="flex gap-10 items-end">
        <div className="w-full">
          <Inputfield
            label="Mode of Payment(NEFT, RTGS, IMPS, GPay etc)"
            labelclass="font-medium"
          />
        </div>
        <div className="w-full">
          <Inputfield label="Sender’s Name" labelclass="font-medium" />
        </div>
        <div className="w-full">
          <SelectField
            name="category"
            control={control}
            label="Sender’s Branch"
            labelclass="mb-2"
            options={options}
            placeholder="Select a Nationality"
            rules={{ required: "Category is required" }}
            className="flex flex-wrap flex-col mt-6"
          />
        </div>
      </div>
      <div className="flex justify-end gap-3.5 mt-6">
        <Button
          text="Cancel"
          classname="[&]:py-2.5 [&]:px-7 [&]:rounded-full border-0 [&]:text-black-300 [&]:bg-primary-100"
        />
        <Button
          text="Save Changes"
          classname="[&]:rounded-full px-7 [&]:py-2.5"
        />
      </div>
    </form>
  );
};

export default FormPersonalInformation;
