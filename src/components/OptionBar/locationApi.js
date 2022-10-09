import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = process.env.REACT_APP_BASE_URL_API;
const TOKEN_CYBERSOFT = process.env.REACT_APP_TOKEN_CYBERSOFT;

export const locationApi = createApi({
    reducerPath: 'location',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL, prepareHeaders: (headers, { getState }) => {
            headers.set('TokenCybersoft', TOKEN_CYBERSOFT)
            return headers
        }
    }),
    endpoints: (builder) => ({
        getLocation: builder.query({
            query: () => ({ url: '/vi-tri' })
        })
    }),
})

export const { useGetLocationQuery } = locationApi