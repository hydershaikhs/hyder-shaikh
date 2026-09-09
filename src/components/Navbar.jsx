import { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Dynamic active section detection
      const scrollPosition = window.scrollY + 200;
      const sections = navLinks.map(l => document.getElementById(l.id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <a 
          href="#home" 
          className="nav-logo" 
          onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
        >
          <img src="/logo.png" alt="Hyder Shaikh Logo" className="logo-img" />
          <span className="logo-text">
            Hyder <span className="logo-accent">Shaikh</span>
          </span>
        </a>

        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`nav-link ${activeSection === l.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.id);
                }}
              >
                {l.label}
                {activeSection === l.id && <span className="nav-active-pill" />}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a 
            href="/cv/Hyder-Shaikh-CV.pdf" 
            download 
            className="btn btn-outline btn-cv"
            title="Download Hyder Shaikh CV"
          >
            <Download size={15} /> <span>CV</span>
          </a>

          <a 
            href="#contact" 
            className="btn btn-primary-glow btn-call"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
          >
            <span>Let's Talk</span>
          </a>

          <button 
            className="nav-toggle" 
            onClick={() => setOpen(!open)} 
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu-backdrop ${open ? 'mobile-menu-backdrop-open' : ''}`} onClick={() => setOpen(false)} />
      
      <div className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="nav-logo">
            <img src="/logo.png" alt="Hyder Shaikh Logo" className="logo-img" />
            <span>Hyder <span className="logo-accent">Shaikh</span></span>
          </div>
          <button className="mobile-close-btn" onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="mobile-links-wrap">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`mobile-link ${activeSection === l.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l.id);
              }}
            >
              <span>{l.label}</span>
              <ArrowRight size={16} className="mobile-arrow" />
            </a>
          ))}
        </div>

        <div className="mobile-actions">
          <a href="/cv/Hyder-Shaikh-CV.pdf" download className="btn btn-outline btn-full" onClick={() => setOpen(false)}>
            <Download size={16} /> Download CV
          </a>
          <a href="#contact" className="btn btn-primary-glow btn-full" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;