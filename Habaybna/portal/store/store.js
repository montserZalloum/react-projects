import { createStore,applyMiddleware ,compose} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import userSlice from "./userSlice";
const middleWare = [thunk];

// const store = createStore(rootReducer, compose(
//     applyMiddleware(...middleWare)
// ));
const store = configureStore({
    reducer: {
        user: userSlice
    },
});

export default store;