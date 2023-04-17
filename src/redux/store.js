import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { MatiereApi } from "./features/charge/MatiereApiSlice"
export const store = configureStore({
    reducer: {
        [MatiereApi.reducerPath]: MatiereApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([MatiereApi.middleware]),
})
