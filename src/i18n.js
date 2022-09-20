import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import LangEn from "./lang/en.json";
import LangAz from "./lang/az.json";
import LangFr from "./lang/fr.json";
// localStorage.setItem("lang","en")
i18n
  .use(initReactI18next)
  .use(LanguageDetector) // passes i18n down to react-i18next
  .init({

    fallbackLng: "en",
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: LangEn,
      az: LangAz,
      fr: LangFr,
    },
  });
