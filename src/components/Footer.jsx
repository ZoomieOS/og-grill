import Logo from './Logo.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <Logo />
          <div className="footer-links">
            <a href="#about">{t.nav.about}</a>
            <a href="#menu">{t.nav.menu}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#contacts">{t.nav.contacts}</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <LanguageSwitcher />
            <a
              className="insta-btn"
              href="https://www.instagram.com/o.g_originalgrill/"
              target="_blank"
              rel="noopener"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1" fill="currentColor" />
              </svg>
              @o.g_originalgrill
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="script" style={{ fontSize: '1.1rem' }}>
            {t.footer.tagline}
          </span>
          <span>{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
