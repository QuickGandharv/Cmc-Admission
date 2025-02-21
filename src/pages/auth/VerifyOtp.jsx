import Button from "../../components/ui/Button";
import InputField from "../../components/forms/inputfield";
import InputLink from "../../components/forms/InputLink";


const VerifyOtp = () => {
    return (
        <section className="flex flex-wrap justify-center items-center h-screen py-10">
            <div className="mx-auto max-w-400 w-full">
                <div className="flex flex-wrap items-center justify-center mb-6">
                    <img src="../src/assets/images/logo-black.png" className="" alt="Logo" />
                </div>
                <div className="bg-white-default rounded-md shadow-1x">
                    <form>
                        <div className="py-10 px-[30px] text-black-default">
                            <h2 className="text-3xl text-center pb-[10px]">Verify OTP</h2>
                            <p className="text-center text-black-200 font-normal border-b border-black-400 pb-4">
                                Fill the OTP that we sent on your email.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-6 justify-center">
                                <input
                                    className="border border-black-400 rounded-md text-base font-normal leading-5 p-2 w-10 h-9"
                                    type="text"
                                />
                                <input
                                    className="border border-black-400 rounded-md text-base font-normal leading-5 p-2 w-10 h-9"
                                    type="text"
                                />
                                <input
                                    className="border border-black-400 rounded-md text-base font-normal leading-5 p-2 w-10 h-9"
                                    type="text"
                                />
                                <input
                                    className="border border-black-400 rounded-md text-base font-normal leading-5 p-2 w-10 h-9"
                                    type="text"
                                />
                                <input
                                    className="border border-black-400 rounded-md text-base font-normal leading-5 p-2 w-10 h-9"
                                    type="text"
                                />
                                <input
                                    className="border border-black-400 rounded-md text-base font-normal leading-5 p-2 w-10 h-9"
                                    type="text"
                                />
                            </div>
                            <Button classname="w-full mt-8" text="Verify" />
                        <div>
                            <h6 className="font-normal leading-5 text-center mt-[15px] text-black-200">Resend OTP in <span className="text-parrotgreen-default">00:34</span></h6>
                        </div>
                            <InputLink text="Back to login" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default VerifyOtp;