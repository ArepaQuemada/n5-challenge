import { useTranslation } from "react-i18next";
import { languageToChange } from "../../domain/language-to-change";
import { Languages } from "../../domain/models/languages";
import I18N from "../../infra/i18n/i18n";
import { I18NPublisher } from "../../infra/i18n/i18n-publisher";
import { SwitchLangStyled } from "./styled";

const SwitchLang = () => {
  const lang = new I18N().getI18nInstance().language as Languages;
  const { langToChange, translationKey } = languageToChange(lang);
  const { t } = useTranslation();
  const onLanguageChange = () => {
    I18NPublisher.changeLanguage(langToChange);
  };

  return (
    <>
      <SwitchLangStyled onClick={() => onLanguageChange()}>
        {t(translationKey)}
      </SwitchLangStyled>
    </>
  );
};

export default SwitchLang;
