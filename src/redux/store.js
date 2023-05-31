import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./features/surveillance/api/apiSlice"
import authReducer from "./features/surveillance/slicers/AuthSlice"
import { ChargeApi } from "./features/charge/ChargeApiSlice"
import ConsultingEnseignantReducer from "./features/charge/ConsultingEnseignantSlice"

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        ConsultingEnseignant: ConsultingEnseignantReducer,
        [ChargeApi.reducerPath]: ChargeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([apiSlice.middleware, ChargeApi.middleware]),
    devTools: true,
})
