import { GoHome } from "react-icons/go";
import Cards from "../../components/ui/Cards"; // Cards
import { FaArrowDown } from "react-icons/fa6"; // Down Arrow
import { BsBarChartLine } from "react-icons/bs"; // BarsIcon
import DisableApplicants from "../../components/ui/DisableApplicants"; // disable applicants components
import RecentApplications from "../../components/ui/RecentApplications";
import Calender from "./Calander";
const Dashboard = () => {
  return (
    <div className="flex">
      <div className="flex-[0_0_75%] pr-5">
        <div className="flex flex-wrap gap-5 mb-6">
          <Cards
            title="128"
            subtitle="Applications Complete"
            downarrowicon={<FaArrowDown />}
            numbertext="- 17.06%"
            text="than last 6 month"
            roundedicon={<BsBarChartLine />}
            classname="bg-warning-default" // circle color
            arrowbg="bg-danger-300" // arrow icon's background-color
            arrowicon="text-danger-default" // arrow icon color change
            numbercolor="text-danger-default" // with the arrow number color
          />
          <Cards
            title="72"
            subtitle="total applications"
            downarrowicon={<FaArrowDown />}
            numbertext="- 17.06%"
            text="than last 6 month"
            roundedicon={<BsBarChartLine />}
            classname="bg-purple-default" // color circle
            arrowbg="bg-parrotgreen-200" // arrow icon's background-color
            arrowicon="text-parrotgreen-default" // arrow icon color change
            numbercolor="text-parrotgreen-default" // with the arrow number color
          />
          <Cards
            title="40%"
            subtitle="Pending Applications"
            downarrowicon={<FaArrowDown />}
            numbertext="- 17.06%"
            text="than last 6 month"
            roundedicon={<BsBarChartLine />}
            classname="bg-info-default" // circle color
            arrowbg="bg-danger-300" // arrow icon's background-color
            arrowicon="text-danger-default" // arrow icon color change
            numbercolor="text-danger-default" // with the arrow number color
          />
        </div>

        <div>
          <RecentApplications />
        </div>
      </div>
      <div className="flex-[0_0_25%]">
        <div>
          <Calender />
          <DisableApplicants />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
