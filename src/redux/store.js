import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { MatiereApi } from "./features/charge/MatiereApiSlice"
import ConsultingEnseignantReducer from "./features/charge/ConsultingEnseignantSlice"
export const store = configureStore({
    reducer: {
        ConsultingEnseignant: ConsultingEnseignantReducer,
        [MatiereApi.reducerPath]: MatiereApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([MatiereApi.middleware]),
})
