import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./features/surveillance/api/apiSlice"
import authReducer from "./features/surveillance/slicers/AuthSlice"

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})
