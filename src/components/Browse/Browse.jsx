import { FeaturedTrailer } from "./components/FeaturedTrailer";
import { MovieList } from "./components/MovieList";
import { useSelector } from "react-redux";
import AISearchBar from "../AISearch/AISearchBar";

export const Browse = () => {

    const showAISearchBar = useSelector(store => store.aisearch.showAISearch);

    return (
        showAISearchBar ?
            <AISearchBar /> :
            <>
                <FeaturedTrailer />
                <MovieList />
            </>
    )
}
