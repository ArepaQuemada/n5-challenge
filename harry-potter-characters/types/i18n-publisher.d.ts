declare module "Host/I18NPublisher" {
  export class I18NPublisher {
    static subscribe<T>(i18n: T): void;
  }
}
