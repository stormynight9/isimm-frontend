import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { DiplomeApi } from "./features/charge/DiplomeApiSlice"
export const store = configureStore({
    reducer: {
        [DiplomeApi.reducerPath]: DiplomeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([DiplomeApi.middleware]),
})
