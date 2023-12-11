import { languageToChange } from "../domain/language-to-change";
import { Languages } from "../domain/models/languages";
import I18N from "../infra/i18n/i18n";
import { I18NPublisher } from "../infra/i18n/i18n-publisher";

const SwitchLang = () => {
  const lang = new I18N().getI18nInstance().language as Languages;
  const langToChange = languageToChange(lang);

  const onLanguageChange = () => {
    I18NPublisher.changeLanguage(langToChange);
  };

  return (
    <>
      <button onClick={() => onLanguageChange()}>{langToChange}</button>
    </>
  );
};

export default SwitchLang;
