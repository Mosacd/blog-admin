/* eslint-disable react-refresh/only-export-components */
import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ADMIN_PATHS } from "../index.enum";

const UsersListView = lazy(
  () => import("../../../pages/admin-pages/users/view/list"),
);
const UsersCreateView = lazy(
  () => import("../../../pages/admin-pages/users/view/create"),
);
const UsersUpdateView = lazy(
  () => import("../../../pages/admin-pages/users/view/update"),
);

export const USER_ROUTES = [
  <Route
    path={ADMIN_PATHS.USER_LIST}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <UsersListView />
      </Suspense>
    }
  />,

  <Route
    path={ADMIN_PATHS.USER_CREATE}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <UsersCreateView />
      </Suspense>
    }
  />,

  <Route
    path={ADMIN_PATHS.USER_UPDATE + "/:id"}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <UsersUpdateView />
      </Suspense>
    }
  />,
];
