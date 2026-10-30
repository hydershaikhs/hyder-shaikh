import { InstagramIcon, LinkedInIcon, FacebookIcon, WhatsAppIcon } from './SocialIcons';
import { Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">
              Hyder <span className="logo-accent">Shaikh</span>
            </h3>
            <p className="footer-tagline">
              Short-Form Video Editor &amp; UGC-Style Ad Creative Maker for E-commerce &amp; Local Brands.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-contact-item">
              <Mail size={15} className="text-accent" />
              <a href="mailto:hydershaikhsahab875@gmail.com" className="footer-link">
                hydershaikhsahab875@gmail.com
              </a>
            </div>
            <div className="footer-contact-item">
              <Phone size={15} className="text-accent" />
              <a href="https://wa.me/923292061421" target="_blank" rel="noreferrer" className="footer-link">
                +92 329 2061421 (WhatsApp)
              </a>
            </div>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/hydershaikhofficial"
              target="_blank"
              rel="noreferrer"
              className="footer-social-icon"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href="https://wa.me/923292061421"
              target="_blank"
              rel="noreferrer"
              className="footer-social-icon"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </a>
            <a
              href="https://www.instagram.com/hafizhydershaikh"
              target="_blank"
              rel="noreferrer"
              className="footer-social-icon"
              title="Instagram"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577739728113"
              target="_blank"
              rel="noreferrer"
              className="footer-social-icon"
              title="Facebook"
              aria-label="Facebook"
            >
              <FacebookIcon size={18} />
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-copyright-wrap">
          <p className="footer-copyright">
            &copy; {year} Hyder Shaikh. Available for freelance projects &amp; monthly retainers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
