import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.REACT_APP_BASE_URL_API;
const TOKEN_CYBERSOFT = process.env.REACT_APP_TOKEN_CYBERSOFT;

export const locationApi = createApi({
  reducerPath: "location",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("TokenCybersoft", TOKEN_CYBERSOFT);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLocation: builder.query({
      query: () => ({ url: "/vi-tri" }),
    }),
    getLocationPagination: builder.query({
      query: (params) => ({
        url: "/vi-tri/phan-trang-tim-kiem",
        params: params,
      }),
    }),
    getRoomByLocation: builder.query({
      query: (location) => ({
        url: "/phong-thue/lay-phong-theo-vi-tri",
        params: {
          maViTri: location,
        },
      }),
    }),
    getDetailRoom: builder.query({
      query: (id) => ({
        url: `/phong-thue/${id}`,
      }),
    }),
    getLocationById: builder.query({
      query: (id) => ({
        url: `/vi-tri/${id}`,
      }),
    }),
  }),
});

export const {
  useGetLocationQuery,
  useGetLocationPaginationQuery,
  useGetRoomByLocationQuery,
  useGetDetailRoomQuery,
  useGetLocationByIdQuery,
} = locationApi;
