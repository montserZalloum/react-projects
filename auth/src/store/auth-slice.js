import {  createSlice } from "@reduxjs/toolkit" 
const initialState = {
    token: '',
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state,action){
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        logout(state){
            state.token = null;
            state.isLoggedIn = false
        },
    }
})
export const authActions = authSlice.actions

export default  authSlice.reducer