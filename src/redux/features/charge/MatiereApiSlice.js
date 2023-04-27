import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const MatiereApi = createApi({
    reducerPath: "MatiereApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8090/api/isimm/distributionCharge" }),
    endpoints: (builder) => ({
        getMatiere: builder.query({
            query: (id) => ({
                url: `/matiere/${id}`,
                method: "GET",
            }),
        }),
    }),
})

export const { useGetMatiereQuery } = MatiereApi
