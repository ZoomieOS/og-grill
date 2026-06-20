import { useEffect } from 'preact/hooks';
import { LanguageProvider } from './i18n/LanguageContext.jsx';
import ClipDefs from './components/ClipDefs.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Highlights from './components/Highlights.jsx';
import Gallery from './components/Gallery.jsx';
import Info from './components/Info.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <ClipDefs />
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Highlights />
        <Gallery />
        <Info />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
