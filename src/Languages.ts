import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import translationEN from "@src/locales/en/translation.json";
import translationRU from "@src/locales/ru/translation.json";

const resources = {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    }
};


i18next.use(HttpApi).use(LanguageDetector).init({
    debug: true,
    resources: resources,
    fallbackLng: "en"
})

export default i18next;