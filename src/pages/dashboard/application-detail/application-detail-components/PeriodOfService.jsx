import Inputfield from "../../../../components/forms/Inputfield";

const PeriodOfService = () => {
  return (
    <>
      <div className="mt-8">
        <h2 className="text-black-default leading-5 capitalize">
          Period of service obligation/service after MBBS course
        </h2>
        <div className="flex gap-10">
          <div className="w-full mt-0">
            <Inputfield
              label="Hospital/Sponsoring Agency"
              type="text"
              labelclass="font-medium"
            />
          </div>
          <div className="w-full mt-0">
            <Inputfield label="Remarks if Any" labelclass="font-medium" />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="Period of Service From:"
              type="date"
              labelclass="font-medium"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full mt-0">
            <Inputfield
              label="To:"
              type="date"
              labelclass="font-medium"
            />
          </div>
          <div className="w-full mt-0">
            <Inputfield label="Total( in Years and Months ): " labelclass="font-medium" />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="Diploma Holder"
              type="text"
              labelclass="font-medium"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PeriodOfService;
