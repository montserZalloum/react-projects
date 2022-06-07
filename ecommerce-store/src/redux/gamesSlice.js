import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addGame = createAsyncThunk(
  "game/add",
  async (game) => {
    const resp = await axios.post("http://localhost:4000/games", game);
    return resp.data;
  }
);

export const getAllGames = createAsyncThunk("game/get", async () => {
  const resp = await axios.get(`http://localhost:4000/games`);
  return resp.data;
});

const gamesSlice = createSlice({
  name: "game",
  initialState: {
    loading: false,
  },
  extraReducers: {
    [addGame.pending]: (state, action) => {
      state.loading = true;
    },
    [addGame.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [addGame.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default gamesSlice.reducer;
