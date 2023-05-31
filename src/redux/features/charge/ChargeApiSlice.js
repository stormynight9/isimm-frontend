import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const ChargeApi = createApi({
    reducerPath: "MatiereApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}/api/isimm/distributionCharge` }),
    endpoints: (builder) => ({
        getMatiere: builder.query({
            query: (id) => ({
                url: `/matiere/${id}`,
                method: "GET",
            }),
        }),
        getVoeuxEnseignant: builder.query({
            query: (enseignantId,matiereId,matiereType) => ({
                url: `/enseignantVoeux/getEnseignantVoeuxByEnseignantId?enseignantId=${enseignantId}&matiereId=${matiereId}&matiereType=${matiereType}`,
                method: "GET",
            }),
        }),
    }),
})

export const { useGetMatiereQuery,useGetVoeuxEnseignantQuery } = ChargeApi
