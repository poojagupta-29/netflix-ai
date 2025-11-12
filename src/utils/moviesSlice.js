import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        trailerVideo: null,
        popularMovies: null,
        addTrendingMovies: null,
        addTopRatedMovies: null,
        addUpcomingMovies: null
    },
    reducers: {
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingVideos = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
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