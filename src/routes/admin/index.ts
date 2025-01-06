import { BLOG_ROUTES } from "./blogs";
import { USER_ROUTES } from "./users";

export const ADMIN_ROUTES = [...BLOG_ROUTES, ...USER_ROUTES];
