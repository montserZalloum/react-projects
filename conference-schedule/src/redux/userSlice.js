import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk('user/add',async (user)=>{
    const resp = await axios.post('http://localhost:4000/user', user)
    return resp.data
})

export const getAllUsers = createAsyncThunk('user/getAll',async ()=>{
    const resp = await axios.get('http://localhost:4000/user')
    return resp.data
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: "",
        loading: false,
        error: null,
    },
    extraReducers: {
        [addUser.pending]: (state,action) => {
            state.loading = true
        },
        [addUser.fulfilled]: (state,action) => {
            state.loading = false
            state.name = action.payload.name
            state.email = action.payload.email
        },
        [addUser.rejected]: (state,action) => {
            state.loading = false
            state.error = action.error.message
        },
    }
});

export default userSlice.reducer;