import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
// import backend from "i18next-http-backend";
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from "react-i18next";


i18n
  .use(detector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
 
    lng: 'en',
    fallbackLng: 'en',
    whitelist: ['en', 'ru'],
 
    interpolation: {
      escapeValue: false,
    },
 
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

  });

export default i18n;