import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        addNowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        addTrendingMovies: null,
        addTopRatedMovies: null,
        addUpcomingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.addNowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.addPopularMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.addTrendingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.addTopRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.addUpcomingMovies = action.payload;
        }
    }
})

export const {
    addNowPlayingMovies,
    addTrailerVideo,
    addPopularMovies,
    addTrendingMovies,
    addTopRatedMovies,
    addUpcomingMovies
} = moviesSlice.actions;

export default moviesSlice.reducer;