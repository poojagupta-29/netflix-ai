
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import MovieList from "./MovieList";
import ShimmerMovieCard from "./ShimmerMovieCard";
import LanguageFilterBar from "./LanguageFilterBar";
import { useAISearchBar } from "../../hooks/useAISearchBar";

const AISearchBar = () => {

    const [selectedLanguage, setSelectedLanguage] = useState({ code: "all", name: "All" });

    const { query, setQuery, loading, movieList, handleSearch, currentLang, hasSearched } = useAISearchBar()

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
                !loading && !hasSearched && (
                    <div className="flex flex-col items-center justify-center h-96 w-full text-white text-center px-4 rounded-lg">
                        <div className="text-4xl mb-4">🎬</div>
                        <h2 className="text-2xl font-semibold mb-2">Start searching for your favorite movies</h2>
                        <p className="text-lg text-gray-400">Type your query in the search bar above and hit Enter to explore.</p>
                    </div>

                )
            }

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