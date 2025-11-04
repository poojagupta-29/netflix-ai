import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { apiHelper } from "../utils/apiHelper"

export const useFetchMoviesTypes = (movieTypes, action) => {

    const movieListRef = useRef(null);
    const dispatch = useDispatch();

    const handlePrev = () => {
        movieListRef.current.scrollLeft -= movieListRef.current.offsetWidth;
    }

    const handleNext = () => {
        movieListRef.current.scrollLeft += movieListRef.current.offsetWidth;
    }

    useEffect(() => {
        const fetchMoviesTypes = async () => {
            try {
                const data = await apiHelper(movieTypes);
                dispatch(action(data));
            } catch (error) {
                console.error("Error fetching now playing movies:", error)
            }
        }

        fetchMoviesTypes()
    }, [dispatch, movieTypes, action]);

    return { movieListRef, handlePrev, handleNext };

}