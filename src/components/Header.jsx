import { useState } from 'preact/hooks';
import Logo from './Logo.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const close = () => setOpen(false);

  return (
    <header>
      <div className="wrap">
        <nav>
          <Logo />
          <div className={`nav-links${open ? ' open' : ''}`} id="navLinks">
            <a href="#about" onClick={close}>{t.nav.about}</a>
            <a href="#menu" onClick={close}>{t.nav.menu}</a>
            <a href="#gallery" onClick={close}>{t.nav.gallery}</a>
            <a href="#contacts" onClick={close}>{t.nav.contacts}</a>
          </div>
          <div className="nav-cta">
            <LanguageSwitcher />
            <a className="btn btn-ghost" href="#contacts">{t.nav.findUs}</a>
            <button className="burger" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
              ☰
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
