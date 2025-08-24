import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import headerRu from "./locales/ru/header.json";
import headerEn from "./locales/en/header.json";
import headerKZ from "./locales/kz/header.json"
i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        header: headerRu
      },
      en: {
        header: headerEn
      },
      kz:
      {
        header: headerKZ
      }
    },
    lng: "kz",
    fallbackLng: "en",
    ns: ["header", "footer"],
    defaultNS: "header",
  });

export default i18n;
