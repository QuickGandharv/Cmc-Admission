import Inputfield from "../../../components/forms/Inputfield";
import GraduateOfCmc from "./registration-form-components/GraduateOfCmc";
import PeriodOfService from "./registration-form-components/PeriodOfService";
import NeetPgDetails from "./registration-form-components/NeetPgDetails";
import GraduateOfOther from "./registration-form-components/GraduateOfOther";
import { useForm } from "react-hook-form";

const AcademicInfo = () => {
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
            <Inputfield label="Name collage" labelclass="font-medium" />
          </div>
          <div className="w-full mt-0">
            <Inputfield label="Name of University" labelclass="font-medium" />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="Date of Passing"
              type="date"
              labelclass="font-medium"
            />
          </div>
        </div>
        <div className="flex gap-10 items-end">
          <div className="w-full">
            <Inputfield
              label="Intership Completion Date"
              type="date"
              labelclass="font-medium"
            />
          </div>
        </div>
        <div className="table-form mt-6">
          <div className="grid grid-cols-5 gap-4 text-left font-medium text-black-default text-2xl leading-5">
            <div>Examination/Year</div>
            <div>Max. Marks</div>
            <div>Marks Obtained</div>
            <div>% Gained</div>
            <div>No. Of Attempts</div>
          </div>
          <div className="grid grid-cols-5 gap-4 items-end">
            <div className="font-medium text-base leading-5 text-black-default self-center">
              First
            </div>
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="First Max. Marks"
              labelclass="text-base font-medium leading-5"
            />
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="First Marks Obtained"
              labelclass="text-base font-medium leading-5"
            />
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="First Gained"
              labelclass="text-base font-medium leading-5"
            />
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="First No. Of Attempts"
              labelclass="text-base font-medium leading-5"
            />
          </div>
          <div className="grid grid-cols-5 gap-4 items-end">
            <div className="font-medium text-base leading-5 text-black-default self-center">
              Second
            </div>
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="Second Max. Marks"
              labelclass="text-base font-medium leading-5"
            />
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="Second Marks Obtained"
              labelclass="text-base font-medium leading-5"
            />
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="Second Gained"
              labelclass="text-base font-medium leading-5"
            />
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="Second No. Of Attempts"
              labelclass="text-base font-medium leading-5"
            />
          </div>
          <div className="grid grid-cols-5 gap-4 items-end">
            <div className="font-medium text-base leading-5 text-black-default self-center">
              Third
            </div>
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="Third Max. Marks"
              labelclass="text-base font-medium leading-5"
            />
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="Third Marks Obtained"
              labelclass="text-base font-medium leading-5"
            />
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="Third Gained"
              labelclass="text-base font-medium leading-5"
            />
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="Third No. Of Attempts"
              labelclass="text-base font-medium leading-5"
            />
          </div>
          <div className="grid grid-cols-5 gap-4 items-end">
            <div className="font-medium text-base leading-5 text-black-default self-center">
              Final
            </div>
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="Final Max. Marks"
              labelclass="text-base font-medium leading-5"
            />
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="Final Marks Obtained"
              labelclass="text-base font-medium leading-5"
            />
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="Final Gained"
              labelclass="text-base font-medium leading-5"
            />
            <Inputfield
              inputclass="w-full text-base font-normal text-purple-default"
              text="text"
              label="Final No. Of Attempts"
              labelclass="text-base font-medium leading-5"
            />
          </div>
          <div className="grid grid-cols-5 items-end">
            <div className="font-medium text-base leading-5 text-black-default self-center ">
              Total:
            </div>
            <div className="col-span-4">
              <Inputfield
                inputclass="w-full text-base font-normal text-purple-default"
                type="text"
                label="Grand Total %"
                labelclass="text-base font-medium leading-5"
              />
            </div>
          </div>
        </div>
        <GraduateOfCmc />
        <GraduateOfOther />
        <PeriodOfService />
        <NeetPgDetails />
      </form>
    </div>
  );
};

export default AcademicInfo;
