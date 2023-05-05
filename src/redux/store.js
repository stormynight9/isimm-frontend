import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { ChargeApi } from "./features/charge/ChargeApiSlice"
import ConsultingEnseignantReducer from "./features/charge/ConsultingEnseignantSlice"
export const store = configureStore({
    reducer: {
        ConsultingEnseignant: ConsultingEnseignantReducer,
        [ChargeApi.reducerPath]: ChargeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([ChargeApi.middleware]),
})
