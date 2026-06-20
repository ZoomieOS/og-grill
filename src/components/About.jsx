import { useLanguage } from '../i18n/LanguageContext.jsx';

function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="about-visual reveal">
          <div className="flame-frame">
            <svg
              className="icon-caucasus"
              viewBox="0 0 120 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10,90 L35,45 L48,65 L62,30 L80,68 L92,50 L110,90 Z" />
              <circle cx="62" cy="22" r="5" fill="currentColor" stroke="none" />
            </svg>
          </div>
        </div>
        <div className="reveal">
          <span className="eyebrow">{a.eyebrow}</span>
          <h2>{a.h2}</h2>
          <span className="script">{a.tagline}</span>
          <p className="lead">{a.lead}</p>
          <div className="stat-row">
            <div className="stat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 21v-7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v7" />
                <path d="M9 21V12h6v9" />
              </svg>
              <b>{a.stat1.title}</b>
              <span>{a.stat1.desc}</span>
            </div>
            <div className="stat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2c2 3-1 4-1 7a3 3 0 1 0 6 0c0-1-1-2-1-2s2 1 2 5a8 8 0 1 1-16 0c0-5 4-7 4-7" />
              </svg>
              <b>{a.stat2.title}</b>
              <span>{a.stat2.desc}</span>
            </div>
            <div className="stat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12l2 2 6-6" />
              </svg>
              <b>{a.stat3.title}</b>
              <span>{a.stat3.desc}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
