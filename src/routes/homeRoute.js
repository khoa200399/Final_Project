import { lazy } from "react";

export const home = [
  {
    path: "/",
    name: "Home Page",
    Component: lazy(() => import("../modules/features/Home/index")),
  },
  {
    path: "/:location",
    name: "List Stays Page",
    Component: lazy(() => import("../modules/features/ListRoom/index")),
  },
  {
    path: "detail/:roomId",
    name: "Room Detail Page",
    Component: lazy(() => import("../modules/features/Detail/index")),
  },
  {
    path: "/profile",
    name: "Profile Page",
    Component: lazy(() => import("../modules/features/Profile/index")),
  },
];
const protectedRoutes = [...home];

export default protectedRoutes;
