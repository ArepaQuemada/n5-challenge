import { InitOptions } from "i18next";

export interface I18NSubscriber {
  init(config: InitOptions): void;
  changeLanguage(language: string): void;
}
