import PersonalInfo from "./PersonalInfo";
import AcademicInfo from "./AcademicInfo";
import Document from "./Document";
import Payment from "./Payment";
import StudentHeader from "../../../components/common/StudentHeader";
import { FaRegUser } from "react-icons/fa";
import UseTab from "../../../hooks/usetab";

const RegistrationForm = () => {
  const tabsData = [
    {
      label: {
        icon: <FaRegUser />,
        text: "Personal Information",
      },
      content: <PersonalInfo />,
    },
    {
      label: {
        icon: <FaRegUser />,
        text: "Academic Details",
      },
      content: <AcademicInfo />,
    },
    {
      label: {
        icon: <FaRegUser />,
        text: "Documents",
      },
      content: <Document />,
    },
    {
      label: {
        icon: <FaRegUser />,
        text: "Payments",
      },
      content: <Payment />,
    },
  ];
  return (
    <div>
      <header>
        <StudentHeader />
      </header>
      <div className="w-full">
      <div className="py-5">
        <h1 className="text-center text-black-default">Registration form</h1>
      </div>
      <div className="shadow-flex rounded-lg max-w-lg w-full bg-white-default mx-auto mb-10">
        <UseTab tabs={tabsData} TabStyle={2} className="py-5" />
      </div>
    </div>
    </div>
  );
};

export default RegistrationForm;
