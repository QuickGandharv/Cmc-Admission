import Title from "../../components/ui/Title";
import Inputfield from "../../components/forms/Inputfield";
import Button from "../../components/ui/Button";
import Sidebar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
import { RxCross2 } from "react-icons/rx";
import { PiChurch } from "react-icons/pi";
import Cards from "../../components/ui/Cards"; // Cards
import { FaArrowDown } from "react-icons/fa6"; // Down Arrow
import { BsBarChartLine } from "react-icons/bs"; // BarsIcon
import UserCard from "./user-components/usercard"; // usercard
import { FaRegFileAlt } from "react-icons/fa";

const UserHome = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar  */}
      <Sidebar />

      {/* Content Area - Start */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="w-full py-4 px-5">
            <div className="flex items-center justify-between bg-parrotgreen-200 px-5 py-2.5 rounded-full border border-parrotgreen-default mb-5">
              <p className="text-parrotgreen-default">
                Lorem ipsum dolor sit amet consectetur adipiscing elit etiam ac
                nunc gravida, vel vitae varius purus sapien facilisis netus eros
              </p>
              <RxCross2 className="text-parrotgreen-default" />
            </div>

            <div className="flex">
              <div className="pr-5">
                <div className="flex flex-col gap-5">
                  <UserCard
                    className="bg-info-300"
                    icon={
                      <FaRegFileAlt className="size-[60px] text-info-default" />
                    }
                    titletext={
                      <Title
                        title="Aisha Sharma"
                        classname="font-medium [&]:text-black-300 capitalize"
                      />
                    }
                    textlink="View Profile"
                    btntext="Active"
                    textcolor="text-parrotgreen-default"
                    bgcolor="bg-parrotgreen-200"
                  />

                  <UserCard
                    className="bg-purple-300"
                    icon={
                      <FaRegFileAlt className="size-[60px] text-purple-default" />
                    }
                    titletext={
                      <Title
                        title="Application"
                        classname="font-medium [&]:text-black-300 capitalize"
                      />
                    }
                    textlink="2024-1234"
                    btntext="Completed"
                    textcolor="text-parrotgreen-default"
                    bgcolor="bg-parrotgreen-200"
                  />

                  <UserCard
                    className="bg-warning-300"
                    icon={
                      <FaRegFileAlt className="size-[60px] text-warning-default" />
                    }
                    titletext={
                      <Title
                        title="Documents"
                        classname="font-medium [&]:text-black-300 capitalize"
                      />
                    }
                    textlink="8 Documents"
                    btntext="Pending"
                    textcolor="text-warning-default"
                    bgcolor="bg-warning-300"
                  />
                </div>
              </div>
              <div className="flex flex-1 bg-white-default rounded-xl shadow-flex">
                <div className="p-5">
                  <Title
                    title="Instructions For Making Payment"
                    classname="mb-2.5"
                  />
                  <ul className="text-black-300 font-normal list-disc ml-5 mb-8 grid gap-3">
                    <li>
                      Payment is to be done in the following account using any
                      online method - NEFT, IMPS, UPI, etc.
                    </li>
                    <li>Payment is to be done ONLINE only</li>
                    <li>
                      Details of payment - UTR No, Debit account details, etc.
                      are to be filled in this online form.
                    </li>
                    <li>
                      Candidates are advised to check with their bank in case of
                      any issues with the payment and fill the correct payment
                      details after confirmation of a successful transfer. 
                    </li>
                    <li>
                      Details of payment - UTR No, Debit account details, etc.
                      are to be filled in this online form.
                    </li>
                  </ul>
                  <div className="text-black-300 grid uppercase gap-3">
                    <p>
                      BENEFICIARY NAME: 
                      <strong>
                        CHRISTIAN MEDICAL COLLEGE LUDHIANA SOCIETY
                      </strong>
                    </p>
                    <p>
                      BENEFICIARY ADDRESS: CMC, FINANCE DEPT.,BROWN ROAD,
                      LUDHIANA PINCODE-141008, PUNJAB, INDIA
                    </p>
                    <p>
                      BENEFICIARY ACCOUNT NUMBER:{" "}
                      <strong>99915999999990</strong>
                    </p>
                    <p>
                      BENEFICIARY BANK NAME: <strong>HDFC BANK</strong>
                    </p>
                    <p>
                      IFSC CODE: <strong>HDFC0000034</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Content Area - End */}
    </div>
  );
};

export default UserHome;
