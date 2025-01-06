/* eslint-disable react-refresh/only-export-components */
import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AUTH_PATHS } from "../index.enum";

const SignInView = lazy(() => import("../../../pages/signIn/views/signInView"));

export const Sign_IN_ROUTE = [
  <Route
    path={AUTH_PATHS.SIGN_IN}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <SignInView />
      </Suspense>
    }
  />,
];
