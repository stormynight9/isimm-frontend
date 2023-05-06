import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, token: null },
    reducers: {
        setToken: (state, action) => {
            const token = action.payload.token
            state.token = token
            localStorage.setItem("token", token)
        },
        setUser: (state, action) => {
            const user = action.payload
            state.user = user
        },
    },
})

export const { setToken, setUser } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
