import { lazy } from "react";

export const auth = [
  {
    path: "login",
    name: "Login Page",
    Component: lazy(() => import("../modules/features/Login/index")),
  },
];
const protectedRoutes = [...auth];

export default protectedRoutes;
