import { configureStore } from "@reduxjs/toolkit";
import { locationApi } from "store/locationApi";
import { translationApi } from "store/translationApi";
import { authApi } from "modules/features/Authentication/authApi";
import commonReducer from "./common";
import authReducer from "modules/features/Authentication/authSlice";

export const store = configureStore({
  reducer: {
    common: commonReducer,
    auth: authReducer,
    [locationApi.reducerPath]: locationApi.reducer,
    [translationApi.reducerPath]: translationApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      locationApi.middleware,
      translationApi.middleware,
      authApi.middleware
    ),
});
