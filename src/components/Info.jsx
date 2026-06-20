import { useLanguage } from '../i18n/LanguageContext.jsx';

function Info() {
  const { t } = useLanguage();
  const i = t.info;

  return (
    <section id="contacts">
      <div className="wrap">
        <div className="info-grid reveal">
          <div className="info-col dark">
            <div className="info-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
              <div>
                <b>{i.hoursLabel}</b>
                <span>{i.hoursValue}</span>
              </div>
            </div>
            <div className="info-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13z" />
                <circle cx="12" cy="9" r="3" />
              </svg>
              <div>
                <b>{i.addressLabel}</b>
                <span>{i.addressValue}</span>
              </div>
            </div>
            <div className="info-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 8c0 7 6 11 7 11s7-4 7-11a7 7 0 0 0-14 0z" />
                <path d="M5 8h14" />
              </svg>
              <div>
                <b>{i.langLabel}</b>
                <span>{i.langValue}</span>
              </div>
            </div>
            <div className="info-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1" fill="currentColor" />
              </svg>
              <div>
                <b>{i.instaLabel}</b>
                <span>{i.instaValue}</span>
              </div>
            </div>
          </div>
          <div className="info-col red">
            <h3>
              {i.ctaLine1}
              <br />
              {i.ctaLine2}
            </h3>
            <p>{i.ctaText}</p>
            <div className="info-ctas">
              <a className="btn btn-primary" href="#">{i.ctaPrimary}</a>
              <a className="btn btn-ghost" href="#">{i.ctaSecondary}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
