import { allowedLanguages } from "@/config";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageMenu() {
    const { t } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleOpenDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLanguageSelect = (language: string) => {
        i18next.changeLanguage(language);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isDropdownOpen) {
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isDropdownOpen]);

    return (
        <div className="relative w-full h-full!">
            <div
                className="w-10 h-10 flex justify-center items-center border-2 border-(--gray-500) cursor-pointer hover:border-(--orange-400) transition-colors duration-150"
                onClick={handleOpenDropdown}
            >
                <div className="flex items-center gap-3">
                    <img src={`/flags/${i18next.language}.svg`} alt={t(`languages.${i18next.language}`)} className="w-6 h-4 object-cover rounded-sm" />
                </div>
            </div>

            {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-4 bg-(--gray-900) border-2 border-(--orange-500) z-10 max-h-48 overflow-y-auto min-w-[200px]">
                    {allowedLanguages.map((language) => (
                        <div
                            key={language}
                            className={`px-4 py-2 cursor-pointer transition-colors duration-150 ${i18next.language == language
                                ? 'bg-(--orange-500) text-(--gray-900)'
                                : 'text-(--gray-100) hover:bg-(--gray-800)'
                                }`}
                            onClick={() => handleLanguageSelect(language)}
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={`/flags/${language}.svg`}
                                    className="w-6 h-4 object-cover rounded-sm"
                                />
                                <p className="text-base leading-[90%]">{t(`languages.${language}`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}