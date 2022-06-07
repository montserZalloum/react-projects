import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from "./gamesSlice";
import userSlice from "./userSlice";


const store = configureStore({
    reducer: {
        user: userSlice,
        games: gamesSlice,
    }
})

export default store