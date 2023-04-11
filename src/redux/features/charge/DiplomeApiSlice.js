import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const URL = "http://localhost:8090/api/isimm/distributionCharge/"

export const DiplomeApi = createApi({
    reducerPath: "DiplomeApi",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        getSemestre: builder.query({
            query: () => ({
                url: "semestre",
                method: "GET",
            }),
        }),
    }),
})

export const { useGetSemestreQuery } = DiplomeApi
