import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./admin-slice";
import uiSlice from "./ui-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: { admin: adminSlice, ui: uiSlice, user: userSlice },
});

export default store;
