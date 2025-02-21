import Title from "../../components/ui/Title";
import Inputfield from "../../components/forms/Inputfield";
import Button from "../../components/ui/Button";
import Sidebar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
import { PiChurch } from "react-icons/pi";

const UserProfile = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar  */}
      <Sidebar />

      {/* Content Area - Start */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="w-full py-4 px-5">
            <div>
              <div className="flex flex-col mb-5 bg-white-default rounded-md">
                <div className="w-full">
                  <img
                    src="src/assets/images/user-profile-bg.png"
                    className="h-[150px] w-full object-cover object-center rounded-t-md"
                    alt=""
                  />
                </div>
                <div className="max-w-[1192px] w-full flex items-center px-5 gap-3.5">
                  <div className="relative -top-9">
                    <img
                      src="/assets/avatars/user-profile-avtar.jpg"
                      className="h-[150px] w-[150px] [&]:max-w-[150px] rounded-full object-cover"
                      alt="User Profile Avatar"
                    />
                  </div>
                  <div className="w-full">
                    <Title
                      title="Anisha sandalas"
                      classname="text-3xl font-medium mb-2.5"
                    />
                    <div className="flex justify-between">
                      <div>
                        <p className="text-black-200 mb-3">
                          Registeration ID : PGM24-05
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="text-black-200 flex items-center">
                            <PiChurch className="mr-1.5" />
                            Church of south india
                          </p>
                          <span className="text-black-200">|</span>
                          <p className="text-black-200 flex items-center">
                            <PiChurch className="mr-1.5" />
                            15-55A, Raj cottage, Chemponvilai.
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-black-200 mb-3">
                          Date of Birth : 28-11-2003
                        </p>
                        <p className="text-black-200">Gender : Female</p>
                      </div>
                      <div>
                        <p className="text-black-200 mb-3">
                          Date of Birth : 28-11-2003
                        </p>
                        <p className="text-black-200">
                          Email : anishasandalas@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[452px] w-full bg-white-default rounded-md">
                <div className="p-5 flex flex-col self-center">
                  <div>
                    <Title
                      title="Change Password"
                      classname="mb-3 text-3xl leading-5 font-medium"
                    />
                    <p className="text-black-default font-normal leading-5">
                      Here you can change the password of your account.
                    </p>
                  </div>
                  <div className="">
                    <Inputfield
                      label="Current Password"
                      placeholder="Enter Current Password"
                      type="Password"
                      id="CurrentPassword"
                    />
                  </div>
                  <div>
                    <Inputfield
                      label="New Password"
                      placeholder="New Password"
                      type="Password"
                      id="New Password"
                    />
                  </div>
                  <div>
                    <Inputfield
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      type="Password"
                      id="Confirm Password"
                    />
                  </div>
                  <div className="flex gap-2.5 items-center justify-end mt-6">
                    <Button
                      text="Cancel"
                      classname="px-8 py-2.5 [&]:text-black-300 [&]:rounded-full [&]:bg-primary-200 border-0"
                    />
                    <Button
                      text="Update Password"
                      classname="px-8 py-2.5 [&]:rounded-full border-0"
                    />
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

export default UserProfile;
