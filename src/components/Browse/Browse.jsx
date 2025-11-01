import { useNowPlayingMovies } from "../../hooks/useNowPlayingMovies"

import { FeaturedTrailer } from "./components/FeaturedTrailer";

export const Browse = () => {
    useNowPlayingMovies();

    return (
        <FeaturedTrailer />
    )
}
