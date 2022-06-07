import { configureStore } from "@reduxjs/toolkit";
import conferenceSlice from "./conferenceSlice";
import userSlice from "./userSlice";


const store = configureStore({
    reducer: {
        user: userSlice,
        conference: conferenceSlice,
    }
})

export default store