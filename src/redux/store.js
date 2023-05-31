import { configureStore } from "@reduxjs/toolkit"
import noteReducer from "./features/notes/noteSlice"
import { apiSlice } from "./features/surveillance/api/apiSlice"
import authReducer from "./features/surveillance/slicers/AuthSlice"
import { ChargeApi } from "./features/charge/ChargeApiSlice"
import ConsultingEnseignantReducer from "./features/charge/ConsultingEnseignantSlice"

const persistedState = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : {}
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        ConsultingEnseignant: ConsultingEnseignantReducer,
        [ChargeApi.reducerPath]: ChargeApi.reducer,
        note: noteReducer,
    },
    preloadedState: persistedState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([apiSlice.middleware, ChargeApi.middleware]),
    devTools: true,
})
store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()))
})
