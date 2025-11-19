const LanguageFilterBar = ({ selectedLanguage, setSelectedLanguage }) => {

    const languages = [
        { code: "all", name: "All" },
        { code: "hi", name: "Hindi" },
        { code: "en", name: "English" },
        { code: "ta", name: "Tamil" },
        { code: "te", name: "Telugu" },
        { code: "mr", name: "Marathi" },
    ];

    const handleSelectedLang = (lang) => {
        setSelectedLanguage(lang);
    };

    return (
        <div className="flex gap-4 overflow-x-auto p-4 bg-[#141414] border-b border-[#333] scrollbar-hide mt-10">
            {
                languages.map((lang) => (
                    <button
                        key={lang.code}
                        className={`flex items-center space-x-1 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ease-in-out text-white min-w-[100px] justify-center border 
          ${selectedLanguage.code === lang.code ? "bg-red-600 text-white border-none" : "text-white border-gray-400"}`}
                        onClick={() => handleSelectedLang(lang)}
                    >
                        <span>{lang.name}</span>
                    </button>
                ))
            }
        </div>

    );
};

export default LanguageFilterBar;
