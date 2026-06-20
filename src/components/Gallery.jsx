import { useLanguage } from '../i18n/LanguageContext.jsx';

const ICONS = [
  {
    id: 'grill-entrance',
    shift: false,
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M50,10 C66,28 74,42 70,58 C84,54 89,72 76,85 C67,92 56,89 50,93 C44,89 33,92 24,85 C11,72 16,54 30,58 C26,42 34,28 50,10 Z" />
      </svg>
    ),
  },
  {
    id: 'open-kitchen',
    shift: false,
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="20" y="55" width="60" height="14" rx="2" />
        <line x1="30" y1="55" x2="30" y2="69" />
        <line x1="50" y1="55" x2="50" y2="69" />
        <line x1="70" y1="55" x2="70" y2="69" />
        <line x1="26" y1="69" x2="22" y2="85" />
        <line x1="74" y1="69" x2="78" y2="85" />
      </svg>
    ),
  },
  {
    id: 'spices',
    shift: false,
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M35,40 a15,15 0 1,1 30,0 v35 a15,15 0 0 1 -30,0 z" />
        <line x1="35" y1="55" x2="65" y2="55" />
      </svg>
    ),
  },
  {
    id: 'family-tables',
    shift: false,
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="20" y="50" width="60" height="6" />
        <line x1="30" y1="56" x2="30" y2="78" />
        <line x1="70" y1="56" x2="70" y2="78" />
        <circle cx="40" cy="40" r="6" />
        <circle cx="60" cy="40" r="6" />
      </svg>
    ),
  },
];

function Gallery() {
  const { t } = useLanguage();
  const g = t.gallery;

  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{g.eyebrow}</span>
          <h2>{g.h2}</h2>
        </div>
        <div className="g-grid reveal">
          {g.items.map((label, i) => (
            <div className={`g-item${ICONS[i].shift ? ' shift' : ''}`} key={ICONS[i].id}>
              <div className="flame-frame">
                {ICONS[i].icon}
                <span>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
