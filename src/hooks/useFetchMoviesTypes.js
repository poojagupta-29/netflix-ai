import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { apiHelper } from "../utils/apiHelper"

export const useFetchMoviesTypes = (movieTypes, action) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!movieTypes || !action) return;
        const fetchMovies = async () => {
            try {
                const data = await apiHelper(movieTypes);
                dispatch(action(data));
            } catch (err) {
                console.error("Error fetching movies:", err);
            }
        };
        fetchMovies();
    }, [dispatch, movieTypes, action]);
};
