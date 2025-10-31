import { useNowPlayingMovies } from "../../hooks/useNowPlayingMovies"

export const Browse = () => {
    useNowPlayingMovies();

    return (
        <div>Browse</div>
    )
}
