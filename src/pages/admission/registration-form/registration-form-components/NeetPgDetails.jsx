import Inputfield from "../../../../components/forms/Inputfield";

const NeetPgDetails = () => {
  return (
    <>
      <div className="mt-8">
        <h2 className="text-black-default leading-5 capitalize">
        NEET PG 2024 DETAILS
        </h2>
        <div className="flex gap-10">
          <div className="w-full mt-0">
            <Inputfield
              label="Neet Marks"
              type="text"
              labelclass="font-medium"
            />
          </div>
          <div className="w-full mt-0">
            <Inputfield label="Neet Percentile" labelclass="font-medium" />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="Neet PG 2024 Rank"
              type="date"
              labelclass="font-medium"
            />
          </div>
        </div>
        <div className="flex items-end gap-10">
          <div className="w-full mt-0">
            <Inputfield label="Membership & Denomination of the Church:" type="text" labelclass="font-medium" />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="Duration of Membership( in years ): "
              labelclass="font-medium"
            />
          </div>
          <div className="w-full mt-0">
            <Inputfield
              label="Name of Body"
              type="text"
              labelclass="font-medium"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NeetPgDetails;
