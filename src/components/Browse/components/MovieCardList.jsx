import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import { IMAGE_BACKDROP_PATH_URL } from "../../../utils/constant";
import { usePopularMovies } from "../../../hooks/usePopularMovies";

export const MovieCardList = ({ title, movies }) => {
    const { movieListRef, handlePrev, handleNext } = usePopularMovies();

    return (
        <div className='movieCardListContainer w-[80%] mx-auto py-3'>
            <div className="movieCardListWrapper mb-6">
                <h1 className="text-2xl text-white my-3">{title}</h1>
                <div className='movieListWrapper relative'>

                    <div className='movieCardImages relative flex gap-[4px] overflow-hidden' ref={movieListRef}>
                        {
                            movies && movies.length > 0 && movies.map((movie) => (
                                <div key={movie.id} className="relative cursor-pointer rounded-md border border-white/20 min-w-[215px] w-full min-h-[125px] h-auto overflow-hidden">
                                    <img
                                        src={`${IMAGE_BACKDROP_PATH_URL}${movie.backdrop_path}`}
                                        alt={movie.title}
                                        className='w-full h-auto object-cover overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out'
                                    />
                                    <h6 className="absolute bottom-0 w-full text-center text-white text-sm font-semibold pt-3 pb-1 bg-gradient-to-t from-[#e50914]/60 via-[#e50914]/40 to-transparent line-clamp-2 leading-tight px-2 overflow-hidden">
                                        {movie.title}
                                    </h6>

                                </div>
                            ))
                        }
                    </div>

                    <div className='slider-btns w-full h-full flex items-center'>
                        <button className='left-btn absolute top-0 h-full bg-gradient-to-r from-black via-black/70 to-transparent' onClick={handlePrev}>
                            <MdKeyboardArrowLeft size={55} style={{ color: "white" }} />
                        </button>
                        <button className='right-btn h-full absolute top-0 left-auto right-0 bg-gradient-to-l from-black via-black/70 to-transparent' onClick={handleNext}>
                            <MdKeyboardArrowRight size={55} style={{ color: "white" }} />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
