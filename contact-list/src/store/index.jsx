import { configureStore } from "@reduxjs/toolkit";
import { contactSlice } from "./slices/ContactSlice";

const store = configureStore({
    reducer: {
        contacts: contactSlice.reducer,
    },
})

export default store;