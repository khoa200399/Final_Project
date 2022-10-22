import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import moment from "moment";

const BASE_URL = process.env.REACT_APP_BASE_URL_API;
const TOKEN_CYBERSOFT = process.env.REACT_APP_TOKEN_CYBERSOFT;
const userInfo = JSON.parse(localStorage.getItem("userInfo"));
const token = localStorage.getItem("token");

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
    addComment: builder.mutation({
      query: ({ roomId, comment }) => ({
        url: "/binh-luan",
        method: "POST",
        headers: {
          token: token,
        },
        body: {
          id: Math.floor(Math.random() * (10 - 0) + 0),
          maPhong: roomId,
          maNguoiBinhLuan: userInfo.id,
          ngayBinhLuan: moment().format("DD/MM/YYYY"),
          noiDung: comment,
          saoBinhLuan: Math.floor(Math.random() * (5 - 1) + 1),
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useAddCommentMutation } = authApi;
