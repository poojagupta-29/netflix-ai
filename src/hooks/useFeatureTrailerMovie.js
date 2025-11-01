import { API_MOVIE_OPTIONS } from "../utils/constant"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/moviesSlice"
import { useSelector } from "react-redux"

export const useFeatureTrailerMovie = () => {
    const dispatch = useDispatch();
    const movies = useSelector((store) => store.movies?.addNowPlayingMovies);

    useEffect(() => {
        const FeatureTrailerMovie = async () => {
            if (!movies) return null;
            const movieId = movies[0]?.id;

            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos`,
                API_MOVIE_OPTIONS
            );
            const data = await response.json();

            const trailerVideos = data.results.filter(
                (video) => video.type === "Trailer" && video.site === "YouTube"
            );
            const trailerVideoKey = trailerVideos[0]?.key;
            dispatch(addTrailerVideo(trailerVideoKey));
        };

        FeatureTrailerMovie();
    }, [movies]);

    return movies ? movies[0] : null;
}