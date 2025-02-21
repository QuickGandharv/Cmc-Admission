import NotificationSettings from "./notificationsettings";
import MailSettings from "../../pages/system-settings/mailsettings";
import CacheSettings from "../../pages/system-settings/cachesettings";
import GeneralSettings from "../../pages/system-settings/generalsettings";
import UseTab from "../../hooks/usetab";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineCached, MdOutlineNotificationsNone } from "react-icons/md";
import { LuMail } from "react-icons/lu";

const SystemSettings = () => {
  const tabsData = [
    {
      label: {
        icon: <FaRegUser />,
        text: "General",
      },
      content: <GeneralSettings />,
    },
    {
      label: {
        icon: <MdOutlineNotificationsNone size={20} />,
        text: "Notifications",
      },
      content: <NotificationSettings />,
    },
    {
      label: {
        icon: <LuMail size={18} />,
        text: "Mail",
      },
      content: <MailSettings />,
    },
    {
      label: {
        icon: <MdOutlineCached size={20} />,
        text: "Cache",
      },
      content: <CacheSettings />,
    },
  ];
  return (
    <div className="shadow-flex rounded-lg bg-white-default">
      <div className="flex flex-col w-full">
        <UseTab tabs={tabsData} TabStyle={1} />
      </div>
    </div>
  );
};

export default SystemSettings;
