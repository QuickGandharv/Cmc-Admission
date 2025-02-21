import AddRole from "./addrole";
import AddRolePermissions from "./addrole-permissions";
import RolesAndPermissionsList from "./roles-permissions";

const RolesAndPermissions = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div className="flex-1">
          <RolesAndPermissionsList />
        </div>
        <div className="basis-1/2">
          <AddRolePermissions />
        </div>
      </div>
    </div>
  );
};

export default RolesAndPermissions;
