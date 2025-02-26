import InputField from "../../components/forms/Inputfield";
import Button from "../../components/ui/Button";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const newPassword = watch("newPassword");

  const onSubmit = (data) => {
    console.log("Form submitted", data);
    reset();
  };

  return (
    <div>
      <form
        className="max-w-[520px] flex flex-col w-full rounded-md bg-white-default shadow-flex p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col mb-7">
          <h1 className="text-2xl text-black-default mb-3">Change Password</h1>
          <p className="text-base font-normal text-black-default">
            Here you can change the password to your account.
          </p>
        </div>

        <div className="mb-2.5 relative">
          <InputField
            label="Current Password"
            type="password"
            className="text-black-default"
            {...register("currentPassword", {
              required: { value: 8, message: "Password is Required" },
            })}
          />
          {errors.currentPassword && (
            <p className="text-sm text-red-700 font-semibold">
              {errors.currentPassword.message}
            </p>
          )}
          <FaEyeSlash className="size-5 text-black-default absolute top-[46px] right-6" />
        </div>

        <div className="mb-2.5 relative">
          <InputField
            label="New Password"
            type="password"
            className="text-black-default"
            {...register("newPassword", {
              required: { value: true, message: "New Password is required" },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.newPassword && (
            <p className="text-sm text-red-700 font-semibold">
              {errors.newPassword.message}
            </p>
          )}
          <FaEyeSlash className="size-5 text-black-default absolute top-[46px] right-6" />
        </div>

        <div className="mb-5 relative">
          <InputField
            label="Confirm New Password"
            type="password"
            className="text-black-default relative"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === newPassword || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-700 font-semibold">
              {errors.confirmPassword.message}
            </p>
          )}
          <FaEyeSlash className="size-5 text-black-default absolute top-[46px] right-6" />
        </div>
        <div className="text-right">
          <Button
            text="Change"
            classname="[&]:px-12 [&]:py-2.5 [&]:rounded-full"
          />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
