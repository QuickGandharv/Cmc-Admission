import Inputfield from "../../components/forms/Inputfield";
import Button from "../../components/ui/Button";

const BibleAcademic = () => {
  return (
    <>
      <div className="table-form mt-6 border px-5 py-6 rounded-md mb-5">
        <div className="grid grid-cols-[80px_repeat(4,_1fr)] gap-10 text-left font-bold text-black-default text-lg leading-5">
          <div></div>
          <div>BOARD</div>
          <div>YEAR OF PASSING</div>
          <div>STATE FROM WHERE COMPLETED</div>
          <div>RESULT (CGPA/PERCENTAGE)</div>
        </div>
        {/* <div className="grid grid-cols-5 gap-4 items-end"> */}
        <div className="grid grid-cols-[80px_repeat(4,_1fr)] gap-10 items-end">
          <div className="font-medium text-base leading-5 text-black-default self-start mt-6">
            X STD
          </div>
          <Inputfield
            inputclass="w-full text-base font-normal text-purple-default"
            text="text"
            label="X STD Board"
            labelclass="text-base font-medium leading-5"
          />
          <Inputfield
            inputclass="w-full text-base font-normal text-purple-default"
            text="text"
            label="X STD Year Passing"
            labelclass="text-base font-medium leading-5"
          />
          <Inputfield
            inputclass="w-full text-base font-normal text-purple-default"
            text="text"
            label="X STD State"
            labelclass="text-base font-medium leading-5"
          />
          <Inputfield
            inputclass="w-full text-base font-normal text-purple-default"
            text="text"
            label="X STD Result"
            labelclass="text-base font-medium leading-5"
          />
        </div>
        <div className="grid grid-cols-[80px_repeat(4,_1fr)] gap-10 items-end">
          <div className="font-medium text-base leading-5 text-black-default self-start mt-6">
            XI STD
          </div>
          <Inputfield
            inputclass="w-full text-base font-normal text-purple-default"
            text="text"
            label="X STD Board"
            labelclass="text-base font-medium leading-5"
          />
          <Inputfield
            inputclass="w-full text-base font-normal text-purple-default"
            text="text"
            label="X STD Year Passing"
            labelclass="text-base font-medium leading-5"
          />
          <Inputfield
            inputclass="w-full text-base font-normal text-purple-default"
            text="text"
            label="X STD State"
            labelclass="text-base font-medium leading-5"
          />
          <Inputfield
            inputclass="w-full text-base font-normal text-purple-default"
            text="text"
            label="X STD Result"
            labelclass="text-base font-medium leading-5"
          />
        </div>
        <div className="grid grid-cols-[80px_repeat(4,_1fr)] gap-10 items-end">
          <div className="font-medium text-base leading-5 text-black-default self-start mt-6">
            XI STD
          </div>
          <Inputfield
            inputclass="w-full text-base font-normal text-purple-default"
            text="text"
            label="X STD Board"
            labelclass="text-base font-medium leading-5"
          />
          <Inputfield
            inputclass="w-full text-base font-normal text-purple-default"
            text="text"
            label="X STD Year Passing"
            labelclass="text-base font-medium leading-5"
          />
          <Inputfield
            inputclass="w-full text-base font-normal text-purple-default"
            text="text"
            label="X STD State"
            labelclass="text-base font-medium leading-5"
          />
          <Inputfield
            inputclass="w-full text-base font-normal text-purple-default"
            text="text"
            label="X STD Result"
            labelclass="text-base font-medium leading-5"
          />
        </div>
      </div>
      <div className="text-right">
        <Button
          text="Next"
          classname="[&]:rounded-full self-end [&]:px-10 [&]:py-2.5"
        />
      </div>
    </>
  );
};

export default BibleAcademic;
