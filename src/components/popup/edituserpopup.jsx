import { RxCross2 } from "react-icons/rx";
import OutlineButton from "../ui/OutlineButton";
import Button from "../ui/Button";
import Inputfield from "../forms/Inputfield";
import ToggleButton from "../ui/ToggleButton";

const EditUser = () => {
  return (
    // <div className="max-w-[670px] w-full bg-white-default">
    //   <div className="flex items-center justify-between pt-7 pb-5 px-5 border-b">
    //     <h2 className="text-black-default text-xl font-medium">Edit User</h2>
    //     <RxCross2 className="text-black-default size-5" />
    //   </div>
    //   <div className="px-5 py-4">
    //     <div className="flex items-center gap-4">
    //       <div className="size-[73px]">
    //         <img
    //           src="../src/assets/avatars/edit-user-popup-avtar.png"
    //           alt="Edit User Popup Avatar"
    //           className="h-full w-full rounded-full object-cover object-center"
    //         />
    //       </div>
    //       <div className="flex items-center gap-2.5">
    //         <OutlineButton
    //           text="Change"
    //           classname="pt-1 pb-1.5 px-5 border-primary-default text-primary-default"
    //         />
    //         <Button
    //           text="Remove"
    //           classname="pt-1 pb-1.5 px-5 [&]:rounded-full border-0 [&]:text-black-300 [&]:bg-primary-100"
    //         />
    //       </div>
    //     </div>
    //     <div className="w-full">
    //       <Inputfield label="Full Name" />
    //     </div>
    //     <div className="w-full">
    //       <Inputfield label="Email" />
    //     </div>
    //     <div className="w-full">
    //       <Inputfield label="Role?" />
    //     </div>
    //     <div className="w-full">
    //       <Inputfield label="Password" type="password" />
    //     </div>
    //     <div className="w-full mb-2.5">
    //       <Inputfield label="Confirm Password" type="password" />
    //     </div>
    //     <div className="flex items-center gap-2.5">
    //       <span className="text-black-300 font-medium text-lg">Status</span>
    //       <ToggleButton />
    //     </div>
    //   </div>
    // </div>

    <div className="max-w-[670px] w-full bg-white-default rounded-md shadow-flex">
      <div className="grid grid-cols-1 gap-7 text-black-default">
        <div className="flex items-center justify-between pt-7 pb-5 px-5 border-b">
          <h2 className="text-black-default text-xl font-bold">Edit User</h2>
          <RxCross2 className="text-black-default size-5" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-7 px-5 py-4 text-black-default">
        <div className="flex items-center gap-4">
          <div className="size-[73px]">
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
        <Inputfield label="Full Name" />
        <Inputfield label="Email" />
        <Inputfield label="Role?" />
        <Inputfield label="Password" type="password" />
        <Inputfield label="Confirm Password" type="password" />
        <div className="flex items-center gap-2.5">
          <span className="text-black-300 font-medium text-lg">Status</span>
          <ToggleButton />
        </div>
        <div className="flex items-center gap-2.5 justify-end border-t pt-4">
          <Button
            text="Cancel"
            classname="py-2.5 px-8 [&]:rounded-full border-0 [&]:text-black-300 [&]:bg-primary-100"
          />
          <Button text="Update User" classname="py-2.5 px-8 [&]:rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default EditUser;
