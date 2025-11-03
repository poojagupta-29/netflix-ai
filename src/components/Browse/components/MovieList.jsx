import { MovieCardList } from "./MovieCardList"
import { useSelector } from "react-redux";

import { addTrendingMovies, addTopRatedMovies, addUpcomingMovies } from "../../../utils/moviesSlice";
import { useFetchMoviesTypes } from "../../../hooks/useFetchMoviesTypes";

export const MovieList = () => {

    const popularMovies = useSelector((store) => store.movies?.addPopularMovies);

    // trending movies fetch
    useFetchMoviesTypes('https://api.themoviedb.org/3/trending/movie/week?api_key=0fde070c17834063cf9e9c7304e276ad', addTrendingMovies);
    const trendingMovies = useSelector((store) => store.movies?.addTrendingMovies);

    // top rated movies fetch
    useFetchMoviesTypes('https://api.themoviedb.org/3/movie/top_rated?api_key=0fde070c17834063cf9e9c7304e276ad&language=en-US&page=1', addTopRatedMovies);
    const topRatedMovies = useSelector((store) => store.movies?.addTopRatedMovies);

    // upcoming movies fetch
    useFetchMoviesTypes('https://api.themoviedb.org/3/movie/upcoming?api_key=0fde070c17834063cf9e9c7304e276ad&language=en-US&page=1', addUpcomingMovies);
    const upcomingMovies = useSelector((store) => store.movies?.addUpcomingMovies);

    return (
        <div className="bg-black">
            <MovieCardList title='Popular Movies' movies={popularMovies} />
            <MovieCardList title='Trending Movies' movies={trendingMovies} />
            <MovieCardList title='Top Rated Movies' movies={topRatedMovies} />
            <MovieCardList title='Upcoming Movies' movies={upcomingMovies} />
        </div>
    )
}
