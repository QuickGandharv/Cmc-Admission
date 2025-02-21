import UseTab from "../../hooks/usetab";
import AddRole from "./addrole";
import AddPermissions from "./addpermissions";

const AddRolePermissions = () => {
  const tabsData = [
    {
      label: {
        text: "Add Role",
      },
      content: <AddRole />,
    },
    {
      label: {
        text: "Add Permissions",
      },
      content: <AddPermissions />,
    },
  ];

  return (
    <div className="add-role-tabs bg-white-default rounded-md shadow-flex">
      <UseTab tabs={tabsData} TabStyle={1} />
    </div>
  );
};

export default AddRolePermissions;
