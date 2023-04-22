import { apiSlice } from "../api/apiSlice"

export const authEndpoints = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/user/login/",
                method: "POST",
                body: { ...credentials },
            }),
        }),
        credentials: builder.query({
            query: () => ({
                url: "/auth/user/get_user_profile/",
                method: "GET",
            }),
        }),
    }),
})

export const { useLoginMutation, useCredentialsQuery } = authEndpoints
