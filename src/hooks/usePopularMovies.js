import { useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_MOVIE_OPTIONS } from "../utils/constant"

export const usePopularMovies = () => {
    const movieListRef = useRef(null);
    const dispatch = useDispatch();
    const popularMovieData = useSelector((store) => store.movies?.addPopularMovies);
    // console.log("popularMovieData:", popularMovieData);

    const handlePrev = () => {
        movieListRef.current.scrollLeft -= movieListRef.current.offsetWidth;
    }

    const handleNext = () => {
        movieListRef.current.scrollLeft += movieListRef.current.offsetWidth;
    }

    // get movies data from redux store and map through it to display movie cards
    useEffect(() => {
        const popularMovies = async () => {
            if (popularMovieData && popularMovieData.length > 0) return;

            const response = await fetch('https://api.themoviedb.org/3/movie/popular', API_MOVIE_OPTIONS)
            const data = await response.json();
            dispatch(addPopularMovies(data.results));
        }

        popularMovies()
    }, []);

    return { popularMovieData, movieListRef, handlePrev, handleNext };
}