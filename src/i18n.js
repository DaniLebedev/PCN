import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import headerRu from "./locales/ru/header.json";
import headerEn from "./locales/en/header.json";
import headerKZ from "./locales/kz/header.json"

import homeRu from "./locales/ru/home.json";
import homeEn from "./locales/en/home.json";
import homeKZ from "./locales/kz/home.json"
i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        header: headerRu,
        home: homeRu
      },
      en: {
        header: headerEn,
        home: homeEn
      },
      kz:
      {
        header: headerKZ,
        home: homeKZ
      }
    },
    lng: "ru",
    fallbackLng: "en",
    ns: ["header", "footer"],
    defaultNS: "header",
  });

export default i18n;
