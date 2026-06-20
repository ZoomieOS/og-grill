import { useLanguage } from '../i18n/LanguageContext.jsx';

function Marquee() {
  const { t } = useLanguage();
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        <span>{t.marquee}</span>
        <span>{t.marquee}</span>
      </div>
    </div>
  );
}

export default Marquee;
