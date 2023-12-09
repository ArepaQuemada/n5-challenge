import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "../../translations/en.json";
import esJson from "../../translations/es.json";

class I18N {
  private setConfig(config: InitOptions) {
    i18n.init(config);
  }

  private setDefaultConfig() {
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

  init(config?: InitOptions) {
    i18n.use(initReactI18next);
    if (config) {
      this.setConfig(config);
    } else {
      this.setDefaultConfig();
    }
  }

  getI18nInstance() {
    return i18n;
  }
}

export default I18N;
