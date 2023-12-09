import { I18NSubscriber } from "./i18n-subscriber";

export class I18NPublisher {
  private static i18nSubscribers: I18NSubscriber[] = [];

  static subscribe(subscriber: I18NSubscriber) {
    this.i18nSubscribers.push(subscriber);
  }

  static changeLanguage(language: string) {
    I18NPublisher.i18nSubscribers.forEach((subscriber) => {
      subscriber.changeLanguage(language);
    });
  }
}
