import { useLanguage } from '../i18n/LanguageContext.jsx';

function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">{h.eyebrow}</span>
          <h1>
            {h.h1Line1}
            <br />
            <span>{h.h1Span}</span> {h.h1OG}
          </h1>
          <span className="script">{h.tagline}</span>
          <p className="lead">{h.lead}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#menu">{h.ctaPrimary}</a>
            <a className="btn btn-ghost" href="#contacts">{h.ctaSecondary}</a>
          </div>
          <div className="hero-meta">
            <div><strong>{h.metaHours.label}</strong>{h.metaHours.value}</div>
            <div><strong>{h.metaAddress.label}</strong>{h.metaAddress.value}</div>
            <div><strong>{h.metaLang.label}</strong>{h.metaLang.value}</div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glow" />
          <div className="flame-frame">
            <svg
              className="icon-skewer"
              viewBox="0 0 100 140"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="50" y1="6" x2="50" y2="134" />
              <circle cx="50" cy="26" r="13" />
              <rect x="35" y="46" width="30" height="20" rx="4" />
              <circle cx="50" cy="86" r="13" />
              <rect x="35" y="106" width="30" height="18" rx="4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
