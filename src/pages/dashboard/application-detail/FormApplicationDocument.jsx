import OutlineButton from "../../../components/ui/OutlineButton";
import Button from "../../../components/ui/Button";
import StudentsDocumentData from "./application-detail-components/StudentsDocumentData";
import { MdMessage } from "react-icons/md"; //Message icon
import SelectField from "../../../components/forms/SelectField";
import { useForm } from "react-hook-form";

const FormApplicationDocument = () => {
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
    <div>
      <div className="flex justify-end p-5">
        <Button
          text="Add Remark"
          icon={<MdMessage className="h-4 w-4 mr-1.5" />}
          classname="[&]:rounded-full [&]:px-5 [&]:py-2.5 flex items-center"
        />
      </div>

      <div className="grid grid-rows-1">
        <div className="grid grid-cols-5 text-black-default bg-black-100 px-5 py-3">
          <div className="text-base font-medium leading-5">Document</div>
          <div className="text-base font-medium leading-5">Document Name</div>
          <div className="text-base font-medium leading-5">Date</div>
          <div className="text-base font-medium leading-5">Status</div>
          <div className="text-base font-medium leading-5">Actions</div>
        </div>
      </div>

      {/* Student Data -1 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="NEET PG-2024 Admit Card"
        date="23 June 2022"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -2 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="NEET PG-2024 Score Card"
        date="23 June 2022"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -3 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="Matriculation (10th Class Certificate )"
        date="28 April 2023"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -4 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="Baptism Certificate"
        date="11 Nov 2021"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -5 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="Church Membership Certificate"
        date="09 May 2024"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -6 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="PG Letter of Service Commitment (Sponsorship Letter)"
        date="23 June 2022"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -7 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="UG Service Obligation Completion/Service Certificate"
        date="23 June 2024"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -8 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="Domicile/Regidence Certificate"
        date="28 April 2023"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -9 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="Adhar Card"
        date="11 Nov 2021"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -10 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="Affidavit of Service (as per Formate B)"
        date="09 May 2024"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -11 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="PG Diploma"
        date="23 June 2022"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -12 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="Profile Pic"
        date="23 June 2024"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -13 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="Signature Pic"
        date="28 April 2023"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -14 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="MBBS First Prof Marksheet"
        date="11 Nov 2021"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -15 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="MBBS Second Prof Marksheet"
        date="09 May 2024"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -16 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="MBBS Third Prof Marksheet"
        date="23 June 2022"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -17 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="MBBS Final Prof Marksheet"
        date="23 June 2024"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -18 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="MBBS Degree"
        date="23 June 2024"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -19 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="Certificate as per Formate A (if applicable)"
        date="28 April 2023"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -20 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="Intership Completion Certificate "
        date="11 Nov 2021"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      {/* Student Data -21 */}
      <StudentsDocumentData
        documentsrc="../src/assets/images/default-applicants-image.jpeg"
        documentname="Online Document Verification"
        date="09 May 2024"
        verified={<SelectField
          name="category"
          control={control}
          options={options}
          placeholder="Verified"
          rules={{ required: "option is required" }}
          className="flex flex-wrap flex-col w-full"
          selectclass="py-1.5"
        />}
      />

      <div className="text-right pt-5 pr-5">
        <Button text="Next" classname="[&]:rounded-full [&]:px-5 [&]:py-1" />
      </div>
    </div>
  );
};

export default FormApplicationDocument;
