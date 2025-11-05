import { createSlice } from "@reduxjs/toolkit";

const aisearchSlice = createSlice({
    name: 'aisearch',
    initialState: {
        showAISearch: false
    },
    reducers: {
        toggleAISearchView: (state) => {
            state.showAISearch = !state.showAISearch
        }
    }
})

export const { toggleAISearchView } = aisearchSlice.actions;

export default aisearchSlice.reducer;   