import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { language } from "../../utils/languageConfig";
import { changeLanguage } from "../../utils/configSlice";

export const LanguageSupport = () => {
    const dispatch = useDispatch();

    // Redux store se current language code lo
    const config = useSelector(store => store.config);
    const currentLangCode = config.language;
    const currentLangData = language[currentLangCode]

    const [open, setOpen] = useState(false);

    const handleLangChange = ({ label, code }) => {
        dispatch(changeLanguage(code));  // redux store update
        setOpen(false);                  // dropdown close
    };

    return (
        <div className="relative inline-block w-[140px]">
            <button
                className="w-full flex items-center justify-between px-3 py-2 bg-black border border-white/20 text-white font-semibold text-sm rounded-md hover:border-white/40 transition-all duration-200"
                onClick={() => setOpen(!open)}
            >
                {currentLangData.label}
                <span className="text-xs ml-2">▼</span>
            </button>

            {open && (
                <ul className="absolute right-0 mt-2 w-full bg-[#181818] rounded-md shadow-lg text-white text-sm font-medium overflow-hidden">
                    {Object.values(language).map(({ label, code }) => (
                        <li
                            key={code}
                            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                            onClick={() => handleLangChange({ code })}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
