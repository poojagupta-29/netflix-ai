import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        searchResults: [],
        loading: false,
        error: null
    },
    reducers: {
        setSearchResults(state, action) {
            state.searchResults = action.payload
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        },
        clearResults(state) {
            state.searchResults = [];
            state.error = null;
        }
    }
})

export const { setSearchResults, setLoading, setError, clearResults } = gptSlice.actions;

export default gptSlice.reducer