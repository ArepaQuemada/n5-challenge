import I18N from "./i18n";
import { I18NPublisher } from "Host/I18NPublisher";

const i18n = new I18N();
i18n.init();
I18NPublisher.subscribe(i18n.getI18nInstance());
