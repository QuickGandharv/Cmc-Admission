import Inputfield from "../../components/forms/Inputfield";
import SelectField from "../../components/forms/SelectField";
import Button from "../../components/ui/Button";
import { useForm } from "react-hook-form";
import Title from "../../components/ui/Title";
import ToggleButton from "../../components/ui/toggle-button";

const BiblePersonalInformation = () => {
  const { control } = useForm({
    defaultValues: {
      category: "",
      gender: "",
      religion: "",
      nationality: "",
      city: "",
      state: "",
      stateofdomicile: "",
    },
  });
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const Gender = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const Religion = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const Nationality = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const City = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const State = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const Stateofdomicile = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <form action="" className={`w-full bg-white-default`}>
      <h1 className="text-primary-default">Personal Info</h1>
      <div className="flex gap-10">
        <div className="w-full mt-0">
          <Inputfield
            label="Name of applicant(Full name as in Matriculation certificate) "
            labelclass="font-medium leading-5"
          />
        </div>
      </div>
      <div className="mt-8">
        <Title title="NEET DETAILS" />
        <div className="flex gap-10">
          <div className="w-full mt-0">
            <Inputfield
              label="Roll Number"
              type="text"
              labelclass="font-medium"
            />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="Neet Score"
              tupe="text"
              labelclass="font-medium"
            />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="All India Rank"
              type="text"
              labelclass="font-medium"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-10 mb-8">
        <div className="w-full mt-0">
          <Inputfield
            label="BFUHS REGISTRATION ID"
            labelclass="font-medium leading-5"
          />
        </div>
      </div>
      <div className="mt-8">
        <Title title="PERSONAL DETAILS" />
        <div className="flex gap-10">
          <div className="w-full mt-0">
            <Inputfield
              label="Father Name"
              type="text"
              labelclass="font-medium"
            />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="Mother Name"
              tupe="text"
              labelclass="font-medium"
            />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="Date of birth"
              type="text"
              labelclass="font-medium"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full mt-0">
            <SelectField
              name="Gender"
              control={control}
              label="Gender*"
              labelclass="mb-2"
              options={Religion}
              placeholder="Select a Gender"
              rules={{ required: "Gender is required" }}
              className="flex flex-wrap flex-col mt-6"
            />
          </div>
          <div className="w-full mt-0">
            <Inputfield label="RELIGION" tupe="text" labelclass="font-medium" />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="Member of which church"
              type="text"
              labelclass="font-medium"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full mt-0">
            <Inputfield
              label="Duration of Membership"
              type="text"
              labelclass="font-medium"
            />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="Date of Baptism"
              type="Date"
              labelclass="font-medium"
            />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="State of Domicile"
              type="text"
              labelclass="font-medium"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full mt-0">
            <Inputfield
              label="Correspondence Address"
              type="text"
              labelclass="font-medium"
            />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="Date of Baptism"
              type="date"
              labelclass="font-medium"
            />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="State of Domicile"
              type="text"
              labelclass="font-medium"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full mt-0">
            <Inputfield
              label="Landline Number"
              type="text"
              labelclass="font-medium"
            />
          </div>
          <div className="w-full mt-0">
            <Inputfield label="Mobile" tupe="text" labelclass="font-medium" />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="Alternative"
              type="text"
              labelclass="font-medium"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 mb-8">
        {/* 1rd radio */}
        <div className="w-full mt-0">
          <Inputfield
            label="Email Address"
            type="email"
            labelclass="font-medium"
          />
        </div>

        {/* 2rd radio */}
        <div className="mt-6">
          <h4 className="text-black-300 mb-2 leading-5">Course Applying for</h4>
          <div className="radio flex flex-wrap gap-5 items-center">
            <div className="text-black-default space-x-2 flex items-center">
              <input type="radio" id="MBBS" />
              <label htmlFor="MBBS" className="text-lg font-normal">
                MBBS
              </label>
            </div>
            <div className="text-black-default space-x-2 flex items-center">
              <input type="radio" id="BDS" />
              <label htmlFor="BDS" className="text-lg font-normal">
                BDS
              </label>
            </div>
            <div className="text-black-default space-x-2 flex items-center">
              <input type="radio" id="MBBS or BDS" />
              <label htmlFor="MBBS or BDS" className="text-lg font-normal">
                MBBS & BDS
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <Title title="Name of church/member body with whom the candidate is signing the service agreement with" />
        <div className="w-full mt-0">
          <Inputfield label="BDS" labelclass="font-medium leading-5" />
        </div>
      </div>
      <div className="mb-8">
        <Title title="Bible Test Center" />
        <div className="flex gap-10">
          <div className="w-full flex-[0_0_33.33%] mt-0">
            <SelectField
              name="1st Choice"
              control={control}
              label="1st Choice*"
              labelclass="mb-2"
              options={State}
              placeholder="Select a State"
              rules={{ required: "State is required" }}
              className="flex flex-wrap flex-col mt-6"
            />
          </div>
          <div className="w-full flex-[0_0_33.33%] mt-0">
            <SelectField
              name="2nd Choice"
              control={control}
              label="2nd Choice*"
              labelclass="mb-2"
              options={State}
              placeholder="Select a State"
              rules={{ required: "State is required" }}
              className="flex flex-wrap flex-col mt-6"
            />
          </div>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex items-center gap-10 mb-8">
          <Title title="COURSE" classname="flex-[0_0_10%]" />
          <Title title="CATEGORY THE CANDIDATE IS APPLYING ON" classname="flex-[0_0_90%]" />
        </div>
        <div className="flex items-center gap-10 mb-5">
          <div className="flex flex-[0_0_10%]">
            <label htmlFor="xyz" className="flex-[0_0_90%] text-black-default">
              MBBS
            </label>
          </div>
          <div className="flex gap-10">
          <ToggleButton text="2B" id="bds2B" />
          <ToggleButton text="2B" id="BDS2B" />
          <ToggleButton text="2C" id="BDS2C" />
          <ToggleButton text="2D" id="BDS2D" />
          <ToggleButton text="2E" id="BDS2E" />
          <ToggleButton text="2F" id="BDS2F" />
          <ToggleButton text="2G" id="BDS2G" />
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex flex-[0_0_10%]">
            <label htmlFor="xyz" className="flex-[0_0_90%] text-black-default">
              BDS
            </label>
          </div>
          <div className="flex gap-10">
          <ToggleButton text="2B" id="mbbs2B" />
          <ToggleButton text="2B" id="MBBS2B" />
          <ToggleButton text="2C" id="MBBS2C" />
          <ToggleButton text="2D" id="MBBS2D" />
          <ToggleButton text="2E" id="MBBS2E" />
          <ToggleButton text="2F" id="MBBS2F" />
          <ToggleButton text="2G" id="MBBS2G" />
          </div>
        </div>
      </div>
      <div className="">
        <Title title="Foot Note : State of Domicile" classname="mb-2.5" />
        <div className="">
          <p className="text-black-300 font-normal mb-5">A - Punjab ;</p>
          <p className="text-black-300 font-normal mb-5">B - Andhra Pradesh, Karnataka, Kerala, Puducherry, Tamil Nadu, Telengana;</p>
          <p className="text-black-300 font-normal mb-5">C - Goa, Maharashtra, Gujarat, Daman & Diu, Dadra & Nagar Haveli, Rajasthan, Lakshadweep;</p>
          <p className="text-black-300 font-normal mb-5">D - Madhya Pradesh, Chhatisgarh, Orissa, Jharkhand, West Bengal, Andaman & Nicobar Islands;</p>
          <p className="text-black-300 font-normal mb-5">E - Uttar Pradesh, Bihar, Uttarakhand, Arunachal Pradesh, Assam, Meghalaya, Manipur, Mizoram, Nagaland, Sikkim, Tripura ;</p>
          <p className="text-black-300 font-normal mb-5">F - Jammu & Kashmir, Ladakh, Himachal Pradesh, Delhi, Haryana, Chandigarh;</p>
          <p className="text-black-300 font-normal">G – Service Commitment with CMC Ludhiana & Its Outreach Centers. Candidates applying in the 2G category should have their forms endorsed by the Director, Christian Medical College Ludhiana</p>
        </div>
      </div>
      <div className="text-right mt-5">
        <Button
          text="Save"
          classname="[&]:rounded-full self-end [&]:px-10 [&]:py-2.5"
        />
      </div>
    </form>
  );
};

export default BiblePersonalInformation;
