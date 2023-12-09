/* eslint-disable @typescript-eslint/ban-ts-comment */
import I18N from "./i18n";
// @ts-ignore
import { I18NPublisher } from "Host/I18NPublisher";

const i18n = new I18N();
i18n.init();
I18NPublisher.subscribe(i18n.getI18nInstance());
