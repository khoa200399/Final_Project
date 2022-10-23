import { lazy } from "react";

export const auth = [
  {
    path: "login",
    name: "Login Page",
    Component: lazy(() => import("../modules/features/Authentication/Login/index")),
  },
  {
    path: "register",
    name: "Register Page",
    Component: lazy(() => import("../modules/features/Authentication/Register/index")),
  },
];
const protectedRoutes = [...auth];

export default protectedRoutes;
