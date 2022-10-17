import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const translationApi = createApi({
  reducerPath: "translation",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://google-translate1.p.rapidapi.com/language/translate/v2",
  }),
  endpoints: (builder) => ({
    getLanguageList: builder.query({
      query: () => ({
        url: "/languages",
        headers: {
          "Accept-Encoding": "application/gzip",
          "X-RapidAPI-Key":
            "688bdd03demshed9ca1eb6022426p18e918jsnf58e6036150e",
          "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        },
      }),
    }),
    getTranslate: builder.mutation({
      query: ({ src, target, text }) => {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", text);
        encodedParams.append("target", target);
        encodedParams.append("source", src);
        return {
          url: "",
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "application/gzip",
            "X-RapidAPI-Key":"688bdd03demshed9ca1eb6022426p18e918jsnf58e6036150e",
            "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
          },
          data: encodedParams,
        };
      },
    }),
  }),
});

export const { useGetLanguageListQuery, useGetTranslateMutation } =
  translationApi;
