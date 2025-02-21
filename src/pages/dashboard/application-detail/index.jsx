// import ApplicationDetailCard from "./ApplicationDetailCard"; //Applicant Card
// import FormPersonalInformation from "./FormPersonalInformation"; //Personal Information Form
// import FormTransactionDetail from "./FormTransactionDetail";
// import FormAcademicDetail from "./FormAcademicDetail";

// const ApplicationDetails = () => {
//   return (
//     <div className="flex flex-wrap">
//       <div className="flex flex-wrap flex-[0_0_30%]">
//         <ApplicationDetailCard />
//       </div>
//       <div className="flex flex-wrap flex-[0_0_70%]">
//         <div className="w-full pl-5">
//           {/* <FormPersonalInformation /> */}
//           {/* <FormTransactionDetail /> */}
//           <FormAcademicDetail />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplicationDetails;

import FormPersonalInformation from "./FormPersonalInformation";
import FormAcademicDetail from "./FormAcademicDetail";
import FormApplicationDocument from "./FormApplicationDocument";
import FormTransactionDetail from "./FormTransactionDetail";
import ApplicationDetailCard from "./ApplicationDetailCard";
import Button from "../../../components/ui/Button";
import { FaRegUser } from "react-icons/fa";
import UseTab from "../../../hooks/usetab";

const ApplicationDetails = () => {
  const tabsData = [
    {
      label: {
        icon: <FaRegUser />,
        text: "Personal Information",
      },
      content: <FormPersonalInformation />,
    },
    {
      label: {
        icon: <FaRegUser />,
        text: "Academic Details",
      },
      content: <FormAcademicDetail />,
    },
    {
      label: {
        icon: <FaRegUser />,
        text: "Documents",
      },
      content: <FormApplicationDocument />,
    },
    {
      label: {
        icon: <FaRegUser />,
        text: "Transaction Details",
      },
      content: <FormTransactionDetail />,
    },
  ];
  return (
    <div className="flex flex-wrap gap-5">
      <div className="flex flex-wrap flex-[0_0_27%]">
        <ApplicationDetailCard />
      </div>
      <div className="flex flex-1 shadow-flex rounded-lg bg-white-default">
        <div className="flex flex-col w-full">
          <UseTab tabs={tabsData} TabStyle={1} />
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
