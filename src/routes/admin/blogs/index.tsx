/* eslint-disable react-refresh/only-export-components */
import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ADMIN_PATHS } from "../index.enum";

const BlogsListView = lazy(
  () => import("../../../pages/admin-pages/blogs/view/list"),
);
const BlogsCreateView = lazy(
  () => import("../../../pages/admin-pages/blogs/view/create"),
);
const BlogsUpdateView = lazy(
  () => import("../../../pages/admin-pages/blogs/view/update"),
);

export const BLOG_ROUTES = [
  <Route
    path={ADMIN_PATHS.BLOG_LIST}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <BlogsListView />
      </Suspense>
    }
  />,

  <Route
    path={ADMIN_PATHS.BLOG_CREATE}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <BlogsCreateView />
      </Suspense>
    }
  />,

  <Route
    path={ADMIN_PATHS.BLOG_UPDATE + "/:id"}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <BlogsUpdateView />
      </Suspense>
    }
  />,
];
