import { useFeatureTrailerMovie } from "../../../hooks/useFeatureTrailerMovie"
import { useSelector } from "react-redux";
import { Buttons } from "../../Buttons/Buttons";
import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

export const FeaturedTrailer = () => {

    const movies = useFeatureTrailerMovie();
    const { trailerVideo } = useSelector((store) => store.movies);
    console.log("movies:", movies);

    const { title, overview } = movies || {};

    return (
        <>
            <iframe
                width="100%"
                height="auto"
                className="w-screen aspect-video absolute top-0 left-0"
                src={`
                    https://www.youtube.com/embed/${trailerVideo}?si=jfjqisg_1Vikz3Ti?autoplay=1&mute=1`
                }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
            <div class="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-100"></div>

            <div className="relative z-10 text-white mx-auto flex flex-col justify-center h-full top-[100px] w-[80%] gap-5">
                <div className="w-[50%]">
                    <h1 className="text-6xl font-bold">{title}</h1>
                    <p className="text-lg line-clamp-3 mt-5">{overview}</p>

                    <div className="mt-7 flex gap-4">
                        <Buttons
                            btnText="Play"
                            spacing="mb-0 min-w-[125px] h-full min-h-[44px]"
                            width="w-auto"
                            textStyle="rounded text-white font-bold flex-row-reverse"
                            icon={<FaPlay size={24} />}
                            type="submit"
                            bgColor="bg-white text-black hover:bg-gray-300"
                        />

                        <Buttons
                            btnText="More Info"
                            spacing="mb-0 min-w-[125px] h-full min-h-[44px]"
                            width="w-auto"
                            textStyle="rounded text-white font-bold flex-row-reverse"
                            icon={<MdInfoOutline size={24} />}
                            type="submit"
                            bgColor="bg-gray-500 text-white bg-opacity-70 hover:bg-gray-300"
                        />
                    </div>
                </div>

            </div>
        </>

    )
}
