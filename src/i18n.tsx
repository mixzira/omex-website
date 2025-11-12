import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { allowedLanguages } from "./config";

i18next.use(HttpBackend).use(initReactI18next).init({
    debug: false,
    fallbackLng: "br",
    lng: "br",
    ns: ["common", "hero", "games", "ranking", "personalize", "connections", "footer"],
    backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json"
    },
    interpolation: {
        escapeValue: false
    },
    supportedLngs: allowedLanguages
})