import { API_KEY } from "./constant";
import { API_MOVIE_OPTIONS } from "./constant";

export const apiHelper = async (movieTypes) => {

    let url = "";

    if (movieTypes === "trending") {
        url = `https://api.themoviedb.org/3/${movieTypes}/movie/week?api_key=${API_KEY}`;
    } else {
        url = `https://api.themoviedb.org/3/movie/${movieTypes}?api_key=${API_KEY}&language=en-US&page=1`
    }


    try {
        const response = await fetch(url, API_MOVIE_OPTIONS);
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("API Helper Error:", error);
        throw error;
    }
}