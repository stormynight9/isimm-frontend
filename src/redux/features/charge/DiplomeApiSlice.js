import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const DiplomeApi = createApi({
    reducerPath: "DiplomeApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    endpoints: (builder) => ({
        getSemestre: builder.query({
            query: () => ({
                url: "/semestre",
                method: "GET",
            }),
        }),
    }),
})

export const { useGetSemestreQuery } = DiplomeApi
