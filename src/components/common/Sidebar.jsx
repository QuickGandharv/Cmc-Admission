import Badge from "../ui/Badge";
import SideNavLink from "../ui/SideNavLink";
import { LuLogOut } from "react-icons/lu"; // Applications
import { LuFiles } from "react-icons/lu"; // Pages
import { LiaToolsSolid } from "react-icons/lia"; // Maintenance icon
import { RiListCheck3, RiListSettingsLine } from "react-icons/ri"; // Change Password
import { GrSystem } from "react-icons/gr"; // States
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import useAxios from "../../hooks/UseAxios";
import { useNavigate } from "react-router-dom";
import {
  FaChartBar,
  FaFileAlt,
  FaHome,
  FaUserCog,
  FaUsers,
} from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import Joyride, { EVENTS } from "react-joyride";

const steps = [
  {
    target: "#admin-dashboard",
    content: "welcome to the Dashboard",
    placement: "center",
    data: {
      next: "/admin/users",
      previous: "/admin",
    },
  },
  {
    target: ".users-tab",
    content: "clikc on the user user tab and see users list",
    data: {
      next: "/admin/users",
      previous: "/admin",
    },
  },
  {
    target: "#users-list",
    content: "this is the users list page",
    data: {
      next: "/admin/users",
      previous: "/admin",
    },
  },
  {
    target: "#export",
    content: "Export the users list",
    data: {
      next: "/admin/users",
      previous: "/admin/users",
    },
  },
  {
    target: "#users-status",
    content: "Check Your Status",
    data: {
      next: "/admin/pg-form-settings",
      previous: "/admin/users",
    },
  },
  {
    target: "#pgForm-settings",
    content: "PG Form Settings",
    data: {
      next: "/admin/pg-form-settings",
      previous: "/",
    },
  },
  {
    target: "#pgForm-Documents",
    content: "Provide Documents As Per List",
    data: {
      next: "/admin/roles-permissions",
      previous: "/admin/pg-form-settings",
    },
  },
  {
    target: "#admin-Roles-Permissions",
    content: "Roles And Permissions",
    data: {
      next: "/admin/roles-permissions",
      previous: "/admin/pg-form-settings",
    },
  },
  {
    target: "#roles-permission",
    content: "Roles And Permissions",
    data: {
      next: "/admin",
      previous: "/admin/pg-form-settings",
    },
  },
];

const Sidebar = () => {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const BEARER_TOKEN = userData?.token;
  const { fetchData } = useAxios("/logout", "post", {
    headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
  });

  async function Logout() {
    await fetchData();
    setUserData({ token: "", role: null, permissions: {} });
    navigate("/login");
  }

  // const applicationLinks = [
  //   { href: "/admin/applications", text: "All Applications" },
  //   { href: "/admin/add-new", text: "Add New" },
  // ];

  const [stepIndex, setStepIndex] = useState(0);
  const handleJoyrideCallback = (data) => {
    const {
      action,
      index,
      status,
      step: {
        data: { next, previous },
      },
      type,
    } = data;

    if (type === EVENTS.STEP_AFTER) {
      const isPreviousAction = action === "prev";
      if (isPreviousAction) {
        navigate(previous);
      } else {
        navigate(next);
      }

      if (index === steps.length - 1) {
        setStepIndex(0);
      } else {
        setStepIndex(index + 1);
      }
    }
  };

  const CustomTooltip = ({
    step,
    index,
    totalSteps,
    backProps,
    primaryProps,
  }) => {
    const progress = ((index + 1) / totalSteps) * 100; // Calculate progress

    return (
      <div className="bg-white-default text-center p-4 rounded-lg shadow-lg w-80">
        {/* Progress Bar */}
        <div className="w-full bg-white-default h-2 rounded-full mb-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Tooltip Content */}
        <p className="text-black-default">{step.content}</p>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-4">
          {/* {index > 0 && (
            <button {...backProps} className="px-4 py-2 bg-gray-300 rounded">
              Back
            </button>
          )} */}
          <button
            {...primaryProps}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {index === totalSteps - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <aside className="max-w-[252px] w-full bg-primary-default shadow-side-Shadow overflow-auto">
      <Joyride
        steps={steps}
        stepIndex={stepIndex} // Control the current step
        // run={isJoyrideActive} // Control whether the tour is running
        continuous // Allow the tour to continue without stopping
        disableOverlayClose // Prevent closing the tour by clicking the overlay
        callback={handleJoyrideCallback} // Handle tour events
        // showSkipButton // Show a skip button
        showProgress // Show progress in the tour
        hideCloseButton // Hide the close button
        hideBackButton
        tooltipComponent={(props) => (
          <CustomTooltip {...props} totalSteps={steps.length} />
        )}
        // styles={{
        //   options: {
        //     zIndex: 10000,
        //   },
        //   spotlight: {
        //     borderRadius: "10px", // Rounded corners for highlight
        //     boxShadow: "0 0 10px rgba(0, 150, 255, 0.8)", // Blue glow effect
        //     backgroundColor: "rgba(0, 150, 255, 0.2)", // Light blue tint
        //   },
        //   overlay: {
        //     backgroundColor: "rgba(0, 0, 0, 0.6)", // Darken rest of the page
        //     // backdropFilter: "blur(1px)", // Blur effect
        //   },
        // }}
      />
      <div className="p-5">
        <img
          className="object-contain object-center rounded-full"
          src="/assets/images/logo.png"
          alt="Logo"
        />
      </div>
      <div className="pb-10">
        <Badge text="Main" />
        <ul>
          <li>
            <SideNavLink href="/admin" text="Dashboards" icon={<FaHome />} />
          </li>
          <li>
            <SideNavLink
              className="users-tab"
              href="/admin/users"
              text="Users"
              icon={<FaUsers />}
            />
          </li>
          <li>
            <SideNavLink
              id="application"
              text="Applications"
              href="/admin/applications"
              icon={<FaFileAlt />}
              // subLinks={applicationLinks}
            />
          </li>
          <li>
            <SideNavLink
              href="/admin/reports"
              text="Reports"
              icon={<FaChartBar />}
            />
          </li>
        </ul>

        <Badge text="Setting" />
        <ul>
          <li>
            <SideNavLink href="/admin/pages" text="Pages" icon={<LuFiles />} />
          </li>
          <li>
            <SideNavLink
              id="pgForm-settings"
              href="/admin/pg-form-settings"
              text="PG Form Settings"
              icon={<RiListSettingsLine />}
            />
          </li>
          <li>
            <SideNavLink
              href="/admin/system-settings"
              text="System Settings"
              icon={<GrSystem size={16} />}
            />
          </li>
          <li>
            <SideNavLink
              id="admin-Roles-Permissions"
              href="/admin/roles-permissions"
              text="Roles & Permissions"
              icon={<RiListCheck3 />}
            />
          </li>
          <li>
            <SideNavLink
              href="/admin/maintenance-mode"
              text="Maintenance"
              icon={<LiaToolsSolid />}
            />
          </li>
        </ul>

        <Badge text="Account" />
        <ul>
          <li>
            <SideNavLink
              href="/admin/my-account"
              text="My Account"
              icon={<FaUserCog />}
            />
          </li>
          <li>
            <SideNavLink
              href="/admin/notifications"
              text="Notification"
              icon={<MdNotificationsActive />}
            />
          </li>
          <li>
            <button
              onClick={Logout}
              className="w-full text-base font-medium leading-5 capitalize flex flex-wrap items-center px-5 pt-3 pb-4 hover:bg-primary-300 group"
            >
              <span className="text-xl font-medium mr-3.5">
                <LuLogOut />
              </span>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
