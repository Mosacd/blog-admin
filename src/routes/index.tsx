import { Navigate, Route, Routes } from "react-router-dom";
import AdminAuthLayout from "../layout/authLayout";
import AuthGuardLogIn from "../components/route-guards/auth/forSignIn";
import AuthGuardLogOut from "../components/route-guards/auth/forSignOut";
import AdminLayout from "../layout/dashboardLayout";
import { ADMIN_ROUTES } from "./admin";
import { ADMIN_PATHS } from "./admin/index.enum";
import { AUTH_ROUTES } from "./auth";
import { AUTH_PATHS } from "./auth/index.enum";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={AUTH_PATHS.AUTH} replace />} />

      <Route
        path={AUTH_PATHS.AUTH}
        element={
          <AuthGuardLogIn>
            <AdminAuthLayout />
          </AuthGuardLogIn>
        }
      >
        <Route index element={<Navigate to={AUTH_PATHS.SIGN_IN} replace />} />
        {AUTH_ROUTES}
      </Route>

      <Route
        path={ADMIN_PATHS.ADMIN}
        element={
          <AuthGuardLogOut>
            <AdminLayout />
          </AuthGuardLogOut>
        }
      >
        {ADMIN_ROUTES}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
