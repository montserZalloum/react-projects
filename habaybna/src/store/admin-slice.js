import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notifications: []
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        deleteNotification(state) {
            let prevState = [...state.notifications].slice(0,state.notifications.length - 1) 
            state.notifications = prevState
        },
        showNotification(state,action) {
            state.notifications.push(action.payload)
        },
    }
})

export const adminActions = adminSlice.actions

export default adminSlice.reducer