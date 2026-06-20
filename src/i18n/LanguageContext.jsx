import { createContext } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';
import { translations, DEFAULT_LANG, HTML_LANG, OG_LOCALE } from './translations.js';

const STORAGE_KEY = 'og-lang';

const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: translations[DEFAULT_LANG],
});

function readInitialLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch {
    // localStorage может быть недоступен (приватный режим и т.п.) — просто игнорируем
  }
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readInitialLang);

  useEffect(() => {
    const t = translations[lang];
    // ISO 639-1 код языка для <html lang>, а не наш внутренний UI-код (важно для GE → ka)
    document.documentElement.lang = HTML_LANG[lang] || lang;

    if (t?.meta?.title) document.title = t.meta.title;
    if (t?.meta?.description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    }
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', OG_LOCALE[lang] || 'pl_PL');

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  function setLang(code) {
    if (translations[code]) setLangState(code);
  }

  const value = { lang, setLang, t: translations[lang] };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
