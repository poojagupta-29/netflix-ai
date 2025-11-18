
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { language as langConfig } from "../../utils/languageConfig";
import { askGemini } from "../../utils/gemini";
import { useState, useEffect } from "react";
import { setSearchResults, setLoading, setError, clearResults } from "../../utils/gptSlice";
import { useDispatch } from "react-redux";
import { API_MOVIE_OPTIONS } from "../../utils/constant";
import MovieList from "./MovieList";
import ShimmerMovieCard from "./ShimmerMovieCard";
import LanguageFilterBar from "./LanguageFilterBar";

const AISearchBar = () => {

    const [selectedLanguage, setSelectedLanguage] = useState({ code: "all", name: "All" });

    const dispatch = useDispatch()

    const config = useSelector(store => store.config)
    const loading = useSelector(store => store.gpt.loading)
    const movieList = useSelector(store => store.gpt?.searchResults || [])

    const currentLang = langConfig[config.language]

    const [query, setQuery] = useState("");

    const handleSearch = async (e) => {
        if (e.key === "Enter") {
            const prompt = `Act as a Movie Recommendation system and suggest 5 movies for the query: "${query}". Only give me the exact movie names in a JSON array format like this: ["Gadar", "Sholay", "Don", "Golmaal", "Koi Mil Gaya"] Do not include any explanation or additional text.`
            try {
                dispatch(setLoading(true))
                const response = await askGemini(prompt);
                const movieArray = JSON.parse(response);

                // fetch TMDB details for all movie titles in parallel
                const movieDetailPromises = movieArray.map(async (title) => {
                    const encodedTitle = encodeURIComponent(title);
                    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodedTitle}&include_adult=false & language=en - US & page=1`, API_MOVIE_OPTIONS)
                    const data = await response.json()
                    return data.results
                })

                const detailedMoviesArray = await Promise.all(movieDetailPromises)
                const allMovies = detailedMoviesArray.flat()
                const filteredMovies = allMovies.filter(movie => !!movie.poster_path);

                dispatch(setSearchResults(filteredMovies))
                dispatch(setLoading(false))
            } catch (err) {
                dispatch(setError(err.message))
                console.error("Gemini Error:", err);
                dispatch(setLoading(false))
            }
        }
    };

    useEffect(() => {
        if (query.length === 0) {
            dispatch(clearResults());
        }
    }, [query, dispatch]);

    return (
        <div className="w-[90%] md:w-[80%] mx-auto">
            <div className="searchBar relative flex items-center mt-[50px]">
                <FiSearch className="absolute left-4" color="white" size={22} />
                <input
                    type="search"
                    placeholder={currentLang.aisearchPlaceholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleSearch}
                    className="w-full p-3 bg-black rounded-lg border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12 text-white text-lg"
                />
            </div>

            {
                loading ? (
                    <ShimmerMovieCard />
                ) : (
                    movieList.length > 0 && (
                        <>
                            <LanguageFilterBar
                                selectedLanguage={selectedLanguage}
                                setSelectedLanguage={setSelectedLanguage}
                            />
                            <MovieList selectedLanguage={selectedLanguage} />
                        </>
                    )
                )
            }
        </div>
    )
}

export default AISearchBar