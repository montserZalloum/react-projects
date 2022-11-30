import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: localStorage.getItem('t_isLoggedIn') ? true : false,
    userData: localStorage.getItem('t_userData') ? JSON.parse(localStorage.getItem('t_userData')) : null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state,payload) {
            state.isLoggedIn = true;
            localStorage.setItem('t_isLoggedIn',true);
            localStorage.setItem('t_userData',JSON.stringify(payload.payload));
            state.user = payload.payload
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user = null;
            localStorage.removeItem('t_isLoggedIn')
            localStorage.removeItem('t_userData')
        },
        // isLogin(state) {
        //     const isLoggedIn = localStorage.getItem('t_isLoggedIn');
        //     if (isLoggedIn) {
        //         state.isLoggedIn = true
        //         state.user = localStorage.getItem('t_userData')
        //     } else {
        //         state.isLoggedIn = false
        //         state.user = null
        //     }
        // }
    }
})

export const userActions = userSlice.actions;

export default userSlice.reducer