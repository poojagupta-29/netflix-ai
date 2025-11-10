import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import aisearchReducer from "./aisearchSlice";
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        aisearch: aisearchReducer,
        config: configReducer
    }
});

export default appStore;