import { API_MOVIE_OPTIONS } from "../utils/constant"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const useFetchMoviesTypes = (url, action) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchMoviesTypes = async () => {
            try {
                const response = await fetch(url, API_MOVIE_OPTIONS);
                const data = await response.json();
                dispatch(action(data.results));
            } catch (error) {
                console.error("Error fetching now playing movies:", error)
            }
        }

        fetchMoviesTypes()
    }, [dispatch, url, action]);

}