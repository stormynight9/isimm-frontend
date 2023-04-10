import { configureStore } from "@reduxjs/toolkit"
import noteReducer from "./features/notes/noteSlice"

const persistedState = localStorage.getItem("reduxState") ? JSON.parse(localStorage.getItem("reduxState")) : {}
export const store = configureStore({
    reducer: { note: noteReducer },
    preloadedState: persistedState,
})
store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()))
})
