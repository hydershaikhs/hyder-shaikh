import { Mail, Phone } from 'lucide-react';
import { InstagramIcon, LinkedInIcon, FacebookIcon, WhatsAppIcon } from './SocialIcons';
import logoImg from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { href: 'https://wa.me/923266739989', label: 'WhatsApp', Icon: WhatsAppIcon },
    { href: 'https://www.linkedin.com/in/hydershaikhofficial', label: 'LinkedIn', Icon: LinkedInIcon },
    { href: 'https://www.instagram.com/hafizhydershaikh', label: 'Instagram', Icon: InstagramIcon },
    { href: 'https://www.facebook.com/profile.php?id=61577739728113', label: 'Facebook', Icon: FacebookIcon },
    { href: 'mailto:hydershaikhsahab875@gmail.com', label: 'Email', Icon: Mail },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          {/* Left — Logo + Name + Title */}
          <div className="footer-left">
            <div className="footer-brand-box">
              <img src={logoImg} alt="Hyder Shaikh Logo" className="footer-logo-img" />
            </div>
            <div className="footer-brand-info">
              <p className="footer-name">Hyder Shaikh</p>
              <p className="footer-title">Digital Marketer</p>
            </div>
          </div>

          {/* Right — Social Icons */}
          <div className="footer-right">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label={label}
                title={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {year} Hyder Shaikh. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
