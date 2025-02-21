import Title from "../../components/ui/Title";
import Inputfield from "../../components/forms/Inputfield";
import Button from "../../components/ui/Button";
import OutlineButton from "../../components/ui/OutlineButton";

const Account = () => {
  return (
    <>
      <div className="max-w-[520px] w-full bg-white-default rounded-md mb-5 shadow-flex">
        <div className="p-5 grid gap-7">
          <Title
            title="My Profile"
            classname="mb-3 text-3xl leading-5 font-medium"
          />
          <div className="flex items-center gap-4">
            <div className="size-[100px]">
              <img
                src="../src/assets/avatars/edit-user-popup-avtar.png"
                alt="Edit User Popup Avatar"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
            <div className="flex items-center gap-2.5">
              <OutlineButton
                text="Change"
                classname="pt-1 pb-1.5 px-5 border-primary-default text-primary-default"
              />
              <Button
                text="Remove"
                classname="pt-1 pb-1.5 px-5 [&]:rounded-full border-0 [&]:text-black-300 [&]:bg-primary-100"
              />
            </div>
          </div>
          <Inputfield
            label="Full Name"
            placeholder="Full Name"
            className="text-black-300"
          />
          <Inputfield
            label="Email"
            placeholder="Email"
            className="text-black-300"
          />
          <Inputfield
            label="Role"
            placeholder="User"
            type="Password"
            id="Confirm Password"
            className="text-black-300"
          />
          <div className="text-right">
            <Button
              text="Update"
              classname="px-8 py-2.5 [&]:rounded-full w-fit text-right [&]:bg-primary-default"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[520px] w-full bg-white-default rounded-md shadow-flex">
        <div className="p-5 grid gap-7">
          <div>
            <Title
              title="Change Password"
              classname="mb-3 text-3xl leading-5 font-medium"
            />
            <p className="text-black-default font-normal leading-5">
              Here you can change the password of your account.
            </p>
          </div>
          <Inputfield
            label="Current Password"
            placeholder="Enter Current Password"
            type="Password"
            id="CurrentPassword"
            className="text-black-300"
          />
          <Inputfield
            label="New Password"
            placeholder="New Password"
            type="Password"
            id="New Password"
            className="text-black-300"
          />
          <Inputfield
            label="Confirm Password"
            placeholder="Confirm Password"
            type="Password"
            id="Confirm Password"
            className="text-black-300"
          />
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
    </>
  );
};

export default Account;
