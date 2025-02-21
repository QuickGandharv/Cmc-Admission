import { lazy, Suspense, useEffect } from "react";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  replace,
} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import PgForm from "../pages/dashboard/Pg-form/PgFormSetting.jsx";
import UserProfile from "../pages/user-profile/index.jsx";
import EditUser from "../components/popup/edituserpopup.jsx";
import AddNewUser from "../components/popup/addnewuser.jsx";
import ImportApplication from "../components/popup/importapplication.jsx";
import SystemSettings from "../pages/system-settings/index.jsx";
import RolesAndPermission from "../pages/roles-and-permissions/index.jsx";
import RolesAndPermissions from "../pages/roles-and-permissions/index.jsx";
import MyAccount from "../pages/myaccount/index.jsx";
import Notification from "../pages/notification/index.jsx";

const Users = lazy(() => import("../pages/dashboard/Users"));
const Dashboard = lazy(() => import("../pages/dashboard/index"));
const Applications = lazy(() => import("../pages/dashboard/Applications"));
const Reports = lazy(() => import("../pages/dashboard/Reports"));
const AdminPanel = lazy(() => import("../pages/dashboard/AdminPanel"));
const ApplicationDetails = lazy(() =>
  import("../pages/dashboard/application-detail/index")
);
const Remark = lazy(() =>
  import("../pages/dashboard/application-detail/Remark.jsx")
);
const StudentList = lazy(() => import("../pages/dashboard/StudentList.jsx"));
// const edituserpopup = lazy(() =>
//   import("../components/popup/edituserpopup.jsx")
// );
const addnewuser = lazy(() => import("../components/popup/addnewuser.jsx"));
const importapplication = lazy(() =>
  import("../components/popup/importapplication.jsx")
);
const Account = lazy(() =>
  import("../pages/user-profile/userprofilescreen.jsx")
);
const systemsettings = lazy(() => import("../pages/system-settings/index.jsx"));

const ProtectedRoutes = () => {
  var { userData } = useContext(UserContext);
  const location = useLocation();

  // if (!userData?.token) {
  //   return <Navigate to="/login" replace />;
  // }

  const isSuperAdmin = userData?.role === "super-admin";

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/applications" element={<Applications />} />
        <Route
          path="/applications/application-detail"
          element={<ApplicationDetails />}
        />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/Remark" element={<Remark />} />
        <Route path="/StudentList" element={<StudentList />} />
        <Route path="/admin/pg-form-settings" element={<PgForm />} />
        <Route path="/popup/edituser" element={<EditUser />} />
        <Route path="/popup/addnewuser" element={<AddNewUser />} />
        <Route path="/admin/system-settings" element={<SystemSettings />} />
        <Route path="/admin/notifications" element={<Notification />} />
        <Route
          path="/admin/roles-permissions"
          element={<RolesAndPermissions />}
        />
        <Route path="/admin/my-account" element={<MyAccount />} />
        <Route
          path="/popup/import-application"
          element={<ImportApplication />}
        />
        <Route path="/account" element={<Account />} />

        <Route
          path="/admin-panel"
          element={
            isSuperAdmin ? (
              <AdminPanel />
            ) : (
              <Navigate to="/" replace state={{ from: location }} />
            )
          }
        />

        <Route
          path="/account"
          element={
            isSuperAdmin ? (
              <Account />
            ) : (
              <Navigate to="/" replace state={{ from: location }} />
            )
          }
        />
      </Routes>
    </Suspense>
  );
};

export default ProtectedRoutes;
