import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.REACT_APP_BASE_URL_API;
const TOKEN_CYBERSOFT = process.env.REACT_APP_TOKEN_CYBERSOFT;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("TokenCybersoft", TOKEN_CYBERSOFT);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/signin",
        method: "POST",
        body: {
          email: email,
          password: password,
        },
      }),
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data.user);
          localStorage.setItem("userInfo", JSON.stringify(data.content.user));
          localStorage.setItem("token", data.content.token);
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
