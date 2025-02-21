import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import MainLayout from "../layout/MainLayout";
import Maintenance from "../pages/maintenance-mode";

const RegistrationForm = lazy(() =>
  import("../pages/admission/registration-form/index")
);
const BibleTest = lazy(() => import("../pages/Bibletestcenter/index"));
const UserProfile = lazy(() => import("../pages/user-profile/index"));
const UserHome = lazy(() => import("../pages/user-profile/UserHome"));

const AppRoutes = () => {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        {/* pages with header, footer and sidebar */}
        <Route element={<MainLayout />}>
          <Route path="/*" element={<ProtectedRoutes />} />
        </Route>

        {/* students pages */}
        <Route path="/registration-form" element={<RegistrationForm />} />

        {/* Bible Test */}
        <Route path="/bible-test" element={<BibleTest />} />

        {/* User-Profile */}
        <Route path="/user-profile" element={<UserProfile />} />

        {/* User-Profile */}
        <Route path="/user-home" element={<UserHome />} />

        {/* Maintenance */}
        <Route path="admin/maintenance-mode" element={<Maintenance />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
