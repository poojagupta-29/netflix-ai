import { MovieCardList } from "./MovieCardList"
import { useSelector } from "react-redux";

import { addTrendingMovies, addTopRatedMovies, addUpcomingMovies, addPopularMovies } from "../../../utils/moviesSlice";
import { useFetchMoviesTypes } from "../../../hooks/useFetchMoviesTypes";

export const MovieList = () => {

    const { trendingVideos, topRatedMovies, upcomingMovies, popularMovies } = useSelector((store) => store.movies);

    useFetchMoviesTypes("popular", addPopularMovies);
    useFetchMoviesTypes("trending", addTrendingMovies);
    useFetchMoviesTypes("top_rated", addTopRatedMovies);
    useFetchMoviesTypes("upcoming", addUpcomingMovies);

    return (
        <div className="bg-black">
            <MovieCardList title='Popular Movies' movies={popularMovies} />
            <MovieCardList title='Trending Movies' movies={trendingVideos} />
            <MovieCardList title='Top Rated Movies' movies={topRatedMovies} />
            <MovieCardList title='Upcoming Movies' movies={upcomingMovies} />
        </div>
    )
}
