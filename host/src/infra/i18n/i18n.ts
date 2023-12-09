import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "../../translations/en.json";
import esJson from "../../translations/es.json";

class I18N {
  init() {
    i18n.use(initReactI18next).init({
      resources: {
        en: enJson,
        es: esJson,
      },
      lng: "en",
      interpolation: {
        escapeValue: false,
      },
    });
  }

  getI18nInstance() {
    return i18n;
  }
}

export default I18N;
