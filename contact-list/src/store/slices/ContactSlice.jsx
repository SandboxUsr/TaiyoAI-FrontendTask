import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "name",
    initialState: [],
    reducers: {
        addContact(state, action) {
            state.push(action.payload);
        },
        deleteContact(state, action) {
            state.splice(action.payload, 1);
        },
        editContact(state, action) {
            state.splice(action.payload.id.id, 1, action.payload.contact);
        }
    }
});

export { contactSlice }
export const { addContact, deleteContact, editContact } = contactSlice.actions;