import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // resources: {
    //     en: {
    //       translation: {
    //         main: {
    //           amdhero: 'Welcome to this React Internationalization App',
    //         },
    //       },
    //     },
    //     fr: {
    //       translation: {
    //         main: {
    //           amdhero: "Bienvenue sur cette application d'internationalisation React",
    //         },
    //       },
    //     },
    //   },
  
    debug: true,
    fallbackLng: 'en',
    backend: {
        loadPath: '/SEG3125-Final/locales/{{lng}}/{{ns}}.json'
      }
  });
  i18n.changeLanguage('en');

export default i18n;