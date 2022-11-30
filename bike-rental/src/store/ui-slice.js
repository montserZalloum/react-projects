import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notifications: []
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        deleteNotification(state) {
            let prevState = [...state.notifications].slice(0,state.notifications.length - 1);
            state.notifications = prevState
        },
        showNotification(state,action) {
            state.notifications.push(action.payload)
        },
    }
})

export const uiActions = uiSlice.actions

export default uiSlice.reducer