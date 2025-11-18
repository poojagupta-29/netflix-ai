import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import aisearchReducer from "./aisearchSlice";
import configReducer from "./configSlice"
import gptReducer from "./gptSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        aisearch: aisearchReducer,
        config: configReducer,
        gpt: gptReducer
    }
});

export default appStore;