import { API_MOVIE_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

export const useFeatureTrailerMovie = () => {
    const dispatch = useDispatch();
    const movies = useSelector((store) => store.movies?.popularMovies);

    useEffect(() => {
        if (!movies || movies.length < 2) return;

        const fetchFeatureTrailer = async () => {
            try {
                const movieId = movies[1].id;

                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos`,
                    API_MOVIE_OPTIONS
                );
                const data = await response.json();

                const trailerVideos = data.results.filter(
                    (video) => video.type === "Trailer" && video.site === "YouTube"
                );

                if (trailerVideos.length > 0) {
                    dispatch(addTrailerVideo(trailerVideos[0].key));
                } else {
                    console.warn("No YouTube trailer found for this movie.");
                }
            } catch (err) {
                console.error("Error fetching trailer:", err);
            }
        };

        fetchFeatureTrailer();
    }, [movies, dispatch]);


    return movies ? movies[1] : null;
};
