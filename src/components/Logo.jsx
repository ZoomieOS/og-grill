function Logo() {
  return (
    <a className="logo-mark" href="#top">
      <span className="logo-badge">
        <svg className="flame" viewBox="0 0 100 100">
          <path
            d="M50,5 C68,24 78,40 73,58 C88,53 94,74 79,89 C69,97 56,94 50,98 C44,94 31,97 21,89 C6,74 12,53 27,58 C22,40 32,24 50,5 Z"
            fill="#DD2A1C"
          />
        </svg>
        <span className="og">OG</span>
        <svg className="grate" viewBox="0 0 60 18">
          <rect x="2" y="2" width="56" height="9" rx="1.5" fill="none" stroke="#0C0706" strokeWidth="3" />
          <line x1="14" y1="2" x2="14" y2="11" stroke="#0C0706" strokeWidth="2.5" />
          <line x1="30" y1="2" x2="30" y2="11" stroke="#0C0706" strokeWidth="2.5" />
          <line x1="46" y1="2" x2="46" y2="11" stroke="#0C0706" strokeWidth="2.5" />
          <line x1="8" y1="11" x2="6" y2="17" stroke="#0C0706" strokeWidth="2.5" />
          <line x1="52" y1="11" x2="54" y2="17" stroke="#0C0706" strokeWidth="2.5" />
        </svg>
      </span>
      <span className="logo-word">
        ORIGINAL <b>GRILL</b>
      </span>
    </a>
  );
}

export default Logo;
