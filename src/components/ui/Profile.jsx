import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri"; // Down-Arrow
import { GoHome } from "react-icons/go"; // Home {need to replace this icon}

const Profile = () => {
  return (
    <>
      <div className="group relative">
        <div className="flex flex-wrap gap-3">
          <img
            className="object-contain"
            src="/assets/images/profile.png"
            alt=""
          />
          <div>
            <h5 className="text-black-default font-medium leading-5">
              Alen Miller
            </h5>
            <p className="text-sm font-normal text-black-200 flex items-center">
              UI Designer
              <span className="text-xl">
                <RiArrowDownSLine />
              </span>
            </p>
          </div>
        </div>
        <div className="bg-white-default absolute shadow-md w-[160px] top-12 right-0 rounded-md">
          <ul className=" hidden group-hover:block transition-all text-black-default px-[10px]">
            <li>
              <Link
                to="/account"
                className="flex flex-wrap items-center gap-[10px] p-[10px]"
              >
                <span className="text-black-default text-xl">
                  <GoHome />
                </span>
                <span className="text-base font-medium text-black-default uppercase">
                  Account
                </span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex flex-wrap items-center gap-[10px] p-[10px]"
              >
                <span className="text-black-default text-xl">
                  <GoHome />
                </span>
                <span className="text-base font-medium text-black-default uppercase">
                  Inbox
                </span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex flex-wrap items-center gap-[10px] p-[10px]"
              >
                <span className="text-black-default text-xl">
                  <GoHome />
                </span>
                <span className="text-base font-medium text-black-default uppercase">
                  Taskboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex flex-wrap items-center gap-[10px] p-[10px]"
              >
                <span className="text-black-default text-xl">
                  <GoHome />
                </span>
                <span className="text-base font-medium text-black-default uppercase">
                  Settings
                </span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex flex-wrap items-center gap-[10px] p-[10px]"
              >
                <span className="text-black-default text-xl">
                  <GoHome />
                </span>
                <span className="text-base font-medium text-black-default uppercase">
                  Log Out
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
