import InputField from "../../components/forms/Inputfield";
import Button from "../../components/ui/Button";
import InputLink from "../../components/forms/InputLink";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect } from "react";
import useAxios from "../../hooks/UseAxios";
import { useNavigate } from "react-router-dom";

const Forgetpassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  var { userData } = useContext(UserContext);
  // var BEARER_TOKEN = userData.token;

  const { loading, error, status, fetchData } = useAxios(
    "/forgot-password/send-otp",
    "post"
  );
  // , {headers: {'Authorization': 'Bearer ' + BEARER_TOKEN}}

  const onSubmit = async (formData) => {
    await fetchData({ data: formData });
  };

  useEffect(() => {
    if (status === 200) {
      navigate("/verify-otp");
    }
  }, [status]);

  return (
    <section className="flex flex-wrap justify-center items-center h-screen py-10">
      <div className="mx-auto max-w-400 w-full">
        <div className="flex flex-wrap items-center justify-center mb-6">
          <img
            src="../src/assets/images/logo-black.png"
            className=""
            alt="Logo"
          />
        </div>
        <div className="bg-white-default rounded-md shadow-1x">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-10 px-[30px] text-black-default">
              <h2 className="text-3xl text-center border-b border-black-400 pb-6">
                Forgot password
              </h2>
              <InputField
                label="Email Address"
                placeholder="Enter Your Email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
                error={
                  errors.email?.type === "required"
                    ? "Email is required"
                    : errors.email?.type === "pattern"
                    ? "Email is not correct"
                    : undefined
                }
              />
              <Button
                classname="w-full mt-8"
                text={loading ? "Loading in..." : "Send Password Reset Link"}
                disabled={loading}
              />
              <InputLink href="/login" text="Back To Login" />
              {error && (
                <p className="bg-red-100 py-2.5 px-5 text-red-800 mt-3 rounded-md font-normal">
                  {error}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Forgetpassword;
