import { LANGS } from '../i18n/translations.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switch" role="group" aria-label="Choose language / Wybierz język">
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`lang-btn${lang === l.code ? ' active' : ''}`}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          title={l.name}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
