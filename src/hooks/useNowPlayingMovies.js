import { API_MOVIE_OPTIONS } from "../utils/constant"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchNowPlayingMovies = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_MOVIE_OPTIONS);
                const data = await response.json();
                dispatch(addNowPlayingMovies(data.results));
                console.log("Movies data before dispatch:", data.results);
            } catch (error) {
                console.error("Error fetching now playing movies:", error)
            }
        }

        fetchNowPlayingMovies()
    }, [dispatch]);
}