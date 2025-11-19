
const NoMoviesFound = ({ selectedLanguage }) => {
    return (
        <div className="bg-[#090908] flex items-center justify-center my-10">
            <img src="/popcorn.png" alt="empty" width="250" />
            <span className="text-white text-4xl">Oops! <br />No movies in <span className="text-[#DC2627]">{selectedLanguage.name}</span> language.</span>
        </div>
    );
}

export default NoMoviesFound
