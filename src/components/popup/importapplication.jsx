import { RxCross2 } from "react-icons/rx";
import Button from "../ui/Button";
import SelectField from "../forms/SelectField";
import FileField from "../forms/FileFeild";
import { useForm } from "react-hook-form";

const ImportApplication = () => {
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
    <div className="max-w-[620px] w-full bg-white-default rounded-md shadow-flex">
      <div className="grid grid-cols-1 gap-7 text-black-default">
        <div className="flex items-center justify-between pt-7 pb-5 px-5 border-b">
          <h2 className="text-black-default text-xl font-bold">
            Import Applications
          </h2>
          <RxCross2 className="text-black-default size-5" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-7 px-5 py-4 text-black-default">
        <FileField label="Select File (Allowed Formats: xlsx, csv)." />
        <SelectField
          name="category"
          control={control}
          label="Select Default Status"
          options={options}
          placeholder="Select an option"
          className="w-1/3"
        />
        <div className="flex items-center gap-2.5 justify-end border-t pt-4">
          <Button
            text="Cancel"
            classname="py-2.5 px-8 [&]:rounded-full border-0 [&]:text-black-300 [&]:bg-primary-100"
          />
          <Button text="Import" classname="py-2.5 px-8 [&]:rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ImportApplication;
