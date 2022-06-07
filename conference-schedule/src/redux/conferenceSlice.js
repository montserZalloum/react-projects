import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addConference = createAsyncThunk(
  "conference/add",
  async (conf) => {
    const resp = await axios.post("http://localhost:4000/conference", conf);
    return resp.data;
  }
);

export const getConference = createAsyncThunk("conference/get", async () => {
  const resp = await axios.get(`http://localhost:4000/conference`);
  return resp.data;
});

const conferenceSlice = createSlice({
  name: "conference",
  initialState: {
    loading: false,
  },
  extraReducers: {
    [addConference.pending]: (state, action) => {
      state.loading = true;
    },
    [addConference.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [addConference.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default conferenceSlice.reducer;
