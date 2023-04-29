import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    //   credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = localStorage.getItem("token")
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    },
})

export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ["surveillance"],
    endpoints: (builder) => ({}),
})
