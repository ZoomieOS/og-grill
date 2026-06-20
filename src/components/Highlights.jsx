import { useLanguage } from '../i18n/LanguageContext.jsx';

// Иконки не зависят от языка — только текст рядом с ними переводится.
const ICONS = [
  {
    id: 'lunch',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4ECDA" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    id: 'shashlik',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4ECDA" strokeWidth="2">
        <line x1="4" y1="20" x2="20" y2="4" />
        <circle cx="8" cy="16" r="2" />
        <circle cx="14" cy="10" r="2" />
      </svg>
    ),
  },
  {
    id: 'about',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4ECDA" strokeWidth="2">
        <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10z" />
      </svg>
    ),
  },
  {
    id: 'guests',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4ECDA" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: 'location',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4ECDA" strokeWidth="2">
        <path d="M12 2v6m0 14v-6m10-2h-6M2 12h6" />
      </svg>
    ),
  },
  {
    id: 'promo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4ECDA" strokeWidth="2">
        <line x1="19" y1="5" x2="5" y2="19" />
        <circle cx="7" cy="7" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    id: 'atmosphere',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4ECDA" strokeWidth="2">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="11" r="2" />
        <path d="M21 16l-5-4-4 3-3-2-3 3" />
      </svg>
    ),
  },
];

function Highlights() {
  const { t } = useLanguage();
  const h = t.highlights;

  return (
    <section id="menu">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{h.eyebrow}</span>
          <h2>{h.h2}</h2>
        </div>
        <div className="h-grid reveal">
          {h.items.map((item, i) => (
            <div className="h-card" key={ICONS[i].id}>
              <div className="h-badge">{ICONS[i].icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
          <div
            className="h-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: 'var(--red)',
              borderColor: 'var(--red)',
            }}
          >
            <h3 style={{ marginBottom: '14px' }}>{h.ctaTitle}</h3>
            <a
              className="btn btn-ghost"
              style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
              href="#contacts"
            >
              {h.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
