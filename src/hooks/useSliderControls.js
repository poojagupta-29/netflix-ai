import { useRef } from "react";

export const useSliderControls = () => {
    const movieListRef = useRef(null);

    const handlePrev = () => {
        movieListRef.current.scrollLeft -= movieListRef.current.offsetWidth;
    };

    const handleNext = () => {
        movieListRef.current.scrollLeft += movieListRef.current.offsetWidth;
    };

    return { movieListRef, handlePrev, handleNext };
};
