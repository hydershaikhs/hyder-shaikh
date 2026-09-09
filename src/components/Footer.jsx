import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { InstagramIcon, LinkedInIcon, FacebookIcon } from './SocialIcons';
import logoImg from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const services = [
    { label: 'Meta Ads Campaigns', id: 'experience' },
    { label: 'Search Engine Optimization', id: 'experience' },
    { label: 'Content Writing & Copywriting', id: 'experience' },
    { label: 'Short-Form Video Editing', id: 'experience' },
    { label: 'Social Media Management', id: 'experience' },
    { label: 'Social Media Design', id: 'experience' },
  ];

  const socials = [
    { href: 'https://www.linkedin.com/in/hydershaikhofficial', label: 'LinkedIn', Icon: LinkedInIcon },
    { href: 'https://www.instagram.com/hafizhydershaikh', label: 'Instagram', Icon: InstagramIcon },
    { href: 'https://www.facebook.com/profile.php?id=61577739728113', label: 'Facebook', Icon: FacebookIcon },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">

          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
              <img src={logoImg} alt="Hyder Shaikh Logo" className="footer-logo-img" />
              <span>Hyder <span className="text-accent">Shaikh</span></span>
            </a>
            <p className="footer-tagline">
              Performance Digital Marketer helping brands scale with laser-focused Meta Ads, organic SEO, compelling copy, and viral social content.
            </p>
            <div className="footer-socials">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="footer-social-btn" title={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a 
                    href={`#${l.id}`} 
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(l.id);
                    }}
                  >
                    <span className="footer-link-dot" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Expertise</h4>
            <ul className="footer-links">
              {services.map((s, idx) => (
                <li key={idx}>
                  <a 
                    href={`#${s.id}`} 
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(s.id);
                    }}
                  >
                    <span className="footer-link-dot" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-col-title">Direct Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <a href="mailto:hydershaikhsahab875@gmail.com" className="footer-contact-item">
                  <Mail size={16} className="footer-contact-icon text-accent" />
                  <span>hydershaikhsahab875@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+923266739989" className="footer-contact-item">
                  <Phone size={16} className="footer-contact-icon text-accent" />
                  <span>+92 32 66739989</span>
                </a>
              </li>
              <li>
                <span className="footer-contact-item">
                  <MapPin size={16} className="footer-contact-icon text-accent" />
                  <span>Sindh, Pakistan</span>
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copyright">
            &copy; {year} <span className="text-accent">Hyder Shaikh</span>. All rights reserved.
          </p>
          <p className="footer-made">
            Engineered for High-Performance Growth &amp; Conversions.
          </p>
          <button
            className="footer-back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;