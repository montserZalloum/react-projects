import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk('user/add',async (user)=>{
    const response = await axios.post('http://localhost:4000/user', user)
    return response.data
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "",
            email: "",
        },
        error: false,
        loading: false,
    },
    reducers: {
        // register: (state,action) => {
        //     state.loading = true;
        //     state.user = action.payload;
        // },
        // successUser: (state,action) => {
        //     state.loading = false;
        //     state.user = action.payload;
        // },
        // errorUser: (state,action) => {
        //     state.loading = false;
        //     state.error = true;
        // },
        // login: (state, action) => {
        //     state.name = action.payload.name;
        //     state.email = action.payload.email;
        //     state.isLoggedIn = true;
        // },
        // loading: (state, action) => {
        //     state.loading = true;
        // },
        // logout: (state, action) => {
        //     state.name = "";
        //     state.email = "";
        //     state.isLoggedIn = false;
        // },
    },
    extraReducers: {
        [addUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        [addUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        [addUser.pending]: (state, action) => {
            state.loading = true;
        }
    }
});

export const { login, logout, loading,successUser,errorUser } = userSlice.actions;
export default userSlice.reducer;

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     count: 0,
//   },
//   reducers: {
//     increment: (state) => {
//         state.count += 1;
//     }
//   },
// });

// export const { increment } = counterSlice.actions;

// export default counterSlice.reducer;
