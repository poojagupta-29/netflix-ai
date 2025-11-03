import { useNowPlayingMovies } from "../../hooks/useNowPlayingMovies"

import { FeaturedTrailer } from "./components/FeaturedTrailer";
import { MovieList } from "./components/MovieList";

export const Browse = () => {
    useNowPlayingMovies();

    return (
        <>
            <FeaturedTrailer />
            <MovieList />
        </>
    )
}
