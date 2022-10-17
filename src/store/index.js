import { configureStore } from "@reduxjs/toolkit";
import { locationApi } from "store/locationApi";
import { translationApi } from "store/translationApi";
import commonReducer from "./common";

export const store = configureStore({
  reducer: {
    common: commonReducer,
    [locationApi.reducerPath]: locationApi.reducer,
    [translationApi.reducerPath]: translationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      locationApi.middleware,
      translationApi.middleware
    ),
});
