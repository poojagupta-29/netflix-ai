import { useSelector } from "react-redux";
import { IMAGE_BACKDROP_PATH_URL } from "../../utils/constant";

// Responsive 3-4 columns, square cards with bold title overlay
const MovieListGrid = ({ selectedLanguage }) => {
    const movies = useSelector(store => store.gpt.searchResults || []);
    console.log(selectedLanguage, movies)

    // movie.original_language === selectedLanguage

    const filterMovies = selectedLanguage.code === "all" ? movies : movies.filter((movie) => movie.original_language === selectedLanguage.code)
    console.log("filterMovies:" + filterMovies)

    if (!filterMovies.length) return (
        <div className="text-center text-white py-10">
            No movies found for the selected language.
        </div>
    );;

    return (
        <div className="py-10">

            {/* <h2 className="text-3xl text-white font-bold mb-6">Movies</h2> */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {filterMovies.map((movie) =>
                    !!movie && (
                        <div
                            key={movie.id}
                            className="relative rounded-sm overflow-hidden cursor-pointer bg-black shadow-lg transition-transform hover:scale-105"
                            style={{ aspectRatio: "1 / 1" }}
                        >
                            <img
                                src={
                                    movie.poster_path
                                        ? `${IMAGE_BACKDROP_PATH_URL}${movie.poster_path}`
                                        : "https://via.placeholder.com/400x520?text=No+Image"
                                }
                                alt={movie.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-3 py-3">
                                <h3 className="text-xl font-bold text-white drop-shadow-lg uppercase tracking-wider truncate">{movie.title}</h3>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>

    );
};

export default MovieListGrid;
