
import { FiSearch } from "react-icons/fi";

const AISearchBar = () => {
    return (
        <div className="w-[90%] md:w-[80%] mx-auto">
            <div className="searchBar relative flex items-center mt-[50px]">
                <FiSearch className="absolute left-4" color="white" size={22} />
                <input
                    type="search"
                    placeholder="Search movies using AI..."
                    className="w-full p-3 bg-black rounded-lg border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12 text-white text-md font-bold"
                />
            </div>

        </div>
    )
}

export default AISearchBar