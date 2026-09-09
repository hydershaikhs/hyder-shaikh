import { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowRight, Home, User, Briefcase, Layers, Mail, Phone } from 'lucide-react';
import { InstagramIcon, LinkedInIcon, FacebookIcon } from './SocialIcons';
import logoImg from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Layers size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  // Handle scroll detection and active section spy
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const scrollPosition = window.scrollY + 220;
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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
    <>
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo */}
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
          >
            <img src={logoImg} alt="Hyder Shaikh Logo" className="logo-img" />
            <span className="logo-text">
              Hyder <span className="logo-accent">Shaikh</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
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

          {/* Action Buttons & Hamburger Toggle */}
          <div className="nav-actions">
            <a
              href="./cv/Hyder-Shaikh-CV.pdf"
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

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={`nav-toggle ${open ? 'nav-toggle-active' : ''}`}
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop - Placed outside header to avoid backdrop-filter trapping */}
      <div
        className={`mobile-menu-backdrop ${open ? 'mobile-menu-backdrop-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <aside className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-menu-header">
          <div className="nav-logo">
            <img src={logoImg} alt="Hyder Shaikh" className="logo-img" />
            <span className="logo-text">
              Hyder <span className="logo-accent">Shaikh</span>
            </span>
          </div>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-links-wrap">
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
              <span className="mobile-link-left">
                <span className="mobile-link-icon">{l.icon}</span>
                <span>{l.label}</span>
              </span>
              <ArrowRight size={16} className="mobile-arrow" />
            </a>
          ))}
        </nav>

        <div className="mobile-actions">
          <a
            href="./cv/Hyder-Shaikh-CV.pdf"
            download
            className="btn btn-outline btn-full"
            onClick={() => setOpen(false)}
          >
            <Download size={16} /> Download CV
          </a>
          <a
            href="#contact"
            className="btn btn-primary-glow btn-full"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
          >
            Let's Talk
          </a>
        </div>

        <div className="mobile-socials">
          <a
            href="https://www.linkedin.com/in/hydershaikhofficial"
            target="_blank"
            rel="noreferrer"
            className="mobile-social-icon"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="https://www.instagram.com/hafizhydershaikh"
            target="_blank"
            rel="noreferrer"
            className="mobile-social-icon"
            aria-label="Instagram"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61577739728113"
            target="_blank"
            rel="noreferrer"
            className="mobile-social-icon"
            aria-label="Facebook"
          >
            <FacebookIcon size={18} />
          </a>
          <a
            href="https://wa.me/923266739989"
            target="_blank"
            rel="noreferrer"
            className="mobile-social-icon"
            aria-label="WhatsApp"
          >
            <Phone size={18} />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
