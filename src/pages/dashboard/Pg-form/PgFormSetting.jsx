import Button from "../../../components/ui/Button";
import { FaPenClip } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import ToggleButton from "../../../components/ui/ToggleButton";

const PgForm = () => {
  return (
    <>
      <div className="flex gap-12 mb-10">
        <div className="px-8 py-6 max-w-[650px] w-full bg-white-default rounded-lg shadow-flex">
          <h2
            id="pgForm-Documents"
            className="text-black-default mb-14 capitalize"
          >
            Ask Documents
          </h2>
          <div className="flex items-center justify-between border-b">
            <span className="text-lg font-normal text-black-300 px-1.5 py-3">
              NEET PG-2024 Admit Card
            </span>
            <ToggleButton id="toggel-1" />
          </div>
          <div className="flex items-center justify-between border-b">
            <span className="text-lg font-normal text-black-300 px-1.5 py-3">
              NEET PG-2024 Score Card
            </span>
            <ToggleButton id="toggel-2" />
          </div>
          <div className="flex items-center justify-between border-b">
            <span className="text-lg font-normal text-black-300 px-1.5 py-3">
              Matriculation (10th Class Certificate)
            </span>
            <ToggleButton id="toggel-3" />
          </div>
          <div className="flex items-center justify-between border-b">
            <span className="text-lg font-normal text-black-300 px-1.5 py-3">
              Baptism Certificate
            </span>
            <ToggleButton id="toggel-4" />
          </div>
          <div className="flex items-center justify-between border-b">
            <span className="text-lg font-normal text-black-300 px-1.5 py-3">
              Church Membership Certificate
            </span>
            <ToggleButton id="toggel-5" />
          </div>
          <div className="flex items-center justify-between border-b">
            <span className="text-lg font-normal text-black-300 px-1.5 py-3">
              PG Letter of Service Commitment (Sponsorship Letter)
            </span>
            <ToggleButton id="toggel-6" />
          </div>
          <div className="flex items-center justify-between border-b">
            <span className="text-lg font-normal text-black-300 px-1.5 py-3">
              UG Service Obligation Completion/Service Cerficate
            </span>
            <ToggleButton id="toggel-7" />
          </div>
          <div className="flex items-center justify-between border-b">
            <span className="text-lg font-normal text-black-300 px-1.5 py-3">
              Domicile/Residence Certificate
            </span>
            <ToggleButton id="toggel-8" />
          </div>
          <div className="flex items-center justify-between border-b">
            <span className="text-lg font-normal text-black-300 px-1.5 py-3">
              Aadhar Card
            </span>
            <ToggleButton id="toggel-9" />
          </div>
          <div className="flex items-center justify-between border-b">
            <span className="text-lg font-normal text-black-300 px-1.5 py-3">
              Affidavit of Service (as per Format B).
            </span>
            <ToggleButton id="toggel-10" />
          </div>
          <div className="flex items-center justify-between border-b">
            <span className="text-lg font-normal text-black-300 px-1.5 py-3">
              PG Diploma
            </span>
            <ToggleButton id="toggel-11" />
          </div>
          <div className="flex items-center justify-between border-b">
            <span className="text-lg font-normal text-black-300 px-1.5 py-3">
              Profile Pic
            </span>
            <ToggleButton id="toggel-12" />
          </div>
        </div>
        <div className="px-8 py-6 max-w-[650px] w-full bg-white-default rounded-lg shadow-flex">
          <h2 className="text-black-default capitalize mb-9">
            Church Member Bodies
          </h2>
          <div className="flex justify-between border border-primary-default rounded-full mb-6">
            <input
              type="text"
              className="text-black-200 w-full px-5 py-2.5 bg-transparent"
              placeholder="Enter church body name here..."
            />
            <Button
              text="Add"
              classname="[&]:px-6 [&]:py-2.5 [&]:rounded-full border-0"
            />
          </div>
          <div className="px-1.5 py-2.5 flex items-center justify-between border-b">
            <span className="text-black-300 text-base font-normal ">
              SYNODICAL BOARD OF HEALTH SERVICES CHURCH OF NORTH INDIA
            </span>
            <span className="flex items-center gap-2.5">
              <FaPenClip className="text-black-default" />
              <FaTrashCan className="text-black-default" />
            </span>
          </div>
          <div className="px-1.5 py-2.5 flex items-center justify-between border-b">
            <span className="text-black-300 text-base font-normal ">
              CHURCH OF SOUTH INDIA
            </span>
            <span className="flex items-center gap-2.5">
              <FaPenClip className="text-black-default" />
              <FaTrashCan className="text-black-default" />
            </span>
          </div>
          <div className="px-1.5 py-2.5 flex items-center justify-between border-b">
            <span className="text-black-300 text-base font-normal ">
              COUNCIL OF BAPTIST CHURCHES IN NORTH EAST INDIA
            </span>
            <span className="flex items-center gap-2.5">
              <FaPenClip className="text-black-default" />
              <FaTrashCan className="text-black-default" />
            </span>
          </div>
          <div className="px-1.5 py-2.5 flex items-center justify-between border-b">
            <span className="text-black-300 text-base font-normal ">
              COUNCIL OF MEDICAL WORK, METHODIST CHURCH IN INDIA
            </span>
            <span className="flex items-center gap-2.5">
              <FaPenClip className="text-black-default" />
              <FaTrashCan className="text-black-default" />
            </span>
          </div>
          <div className="px-1.5 py-2.5 flex items-center justify-between border-b">
            <span className="text-black-300 text-base font-normal ">
              DIOCESE OF AMRITSAR (CNI)
            </span>
            <span className="flex items-center gap-2.5">
              <FaPenClip className="text-black-default" />
              <FaTrashCan className="text-black-default" />
            </span>
          </div>
          <div className="px-1.5 py-2.5 flex items-center justify-between border-b">
            <span className="text-black-300 text-base font-normal ">
              DIOCESE OF CHANDIGARH (CNI)
            </span>
            <span className="flex items-center gap-2.5">
              <FaPenClip className="text-black-default" />
              <FaTrashCan className="text-black-default" />
            </span>
          </div>
          <div className="px-1.5 py-2.5 flex items-center justify-between border-b">
            <span className="text-black-300 text-base font-normal ">
              EASTERN REGIONAL BOARD OF HEALTH SERVICES (CNI)
            </span>
            <span className="flex items-center gap-2.5">
              <FaPenClip className="text-black-default" />
              <FaTrashCan className="text-black-default" />
            </span>
          </div>
          <div className="px-1.5 py-2.5 flex items-center justify-between border-b">
            <span className="text-black-300 text-base font-normal ">
              EMMANUEL HOSPITAL ASSOCIATION
            </span>
            <span className="flex items-center gap-2.5">
              <FaPenClip className="text-black-default" />
              <FaTrashCan className="text-black-default" />
            </span>
          </div>
        </div>
      </div>
      <div className="px-8 py-6 max-w-[650px] w-full bg-white-default rounded-lg shadow-flex">
        <h2 className="text-black-default capitalize mb-9">States</h2>
        <div className="flex justify-between border border-primary-default rounded-full mb-6">
          <input
            type="text"
            className="text-black-200 w-full px-5 py-2.5 bg-transparent"
            placeholder="Enter church body name here..."
          />
          <Button
            text="Add"
            classname="[&]:px-6 [&]:py-2.5 [&]:rounded-full border-0"
          />
        </div>
        <div className="px-1.5 py-2.5 flex items-center justify-between border-b">
          <span className="text-black-300 text-base font-normal ">Kolkata</span>
          <span className="flex items-center gap-2.5">
            <FaPenClip className="text-black-default" />
            <FaTrashCan className="text-black-default" />
          </span>
        </div>
        <div className="px-1.5 py-2.5 flex items-center justify-between border-b">
          <span className="text-black-300 text-base font-normal ">Delhi</span>
          <span className="flex items-center gap-2.5">
            <FaPenClip className="text-black-default" />
            <FaTrashCan className="text-black-default" />
          </span>
        </div>
        <div className="px-1.5 py-2.5 flex items-center justify-between border-b">
          <span className="text-black-300 text-base font-normal ">Mumbai</span>
          <span className="flex items-center gap-2.5">
            <FaPenClip className="text-black-default" />
            <FaTrashCan className="text-black-default" />
          </span>
        </div>
        <div className="px-1.5 py-2.5 flex items-center justify-between border-b">
          <span className="text-black-300 text-base font-normal ">Kochi</span>
          <span className="flex items-center gap-2.5">
            <FaPenClip className="text-black-default" />
            <FaTrashCan className="text-black-default" />
          </span>
        </div>
        <div className="px-1.5 py-2.5 flex items-center justify-between border-b">
          <span className="text-black-300 text-base font-normal ">Chennai</span>
          <span className="flex items-center gap-2.5">
            <FaPenClip className="text-black-default" />
            <FaTrashCan className="text-black-default" />
          </span>
        </div>
        <div className="px-1.5 py-2.5 flex items-center justify-between border-b">
          <span className="text-black-300 text-base font-normal ">Mohali</span>
          <span className="flex items-center gap-2.5">
            <FaPenClip className="text-black-default" />
            <FaTrashCan className="text-black-default" />
          </span>
        </div>
        <div className="px-1.5 py-2.5 flex items-center justify-between border-b">
          <span className="text-black-300 text-base font-normal ">
            Ludhiana
          </span>
          <span className="flex items-center gap-2.5">
            <FaPenClip className="text-black-default" />
            <FaTrashCan className="text-black-default" />
          </span>
        </div>
      </div>
    </>
  );
};

export default PgForm;
