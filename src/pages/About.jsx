import { Briefcase, GraduationCap, Heart, Target } from 'lucide-react';
import Reveal from '../components/Reveal';
import heroImg from '../assets/hero.png';
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from '../components/SocialIcons';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="about-bg-ambient" aria-hidden="true"></div>

      <div className="container about-container">
        {/* ============ 3-COLUMN HERO COMPOSITION (REFERENCE-INSPIRED) ============ */}
        <Reveal>
          <div className="about-stage-grid">
            {/* ---- LEFT COLUMN ---- */}
            <div className="about-left-col">
              <div className="about-greeting-block">
                <span className="about-greeting-sub">Hy! I Am</span>
                <h2 className="about-greeting-name">Hyder Shaikh.</h2>
              </div>

              {/* Dashed curved pointer arrow */}
              <div className="about-arrow-wrap" aria-hidden="true">
                <svg className="about-dashed-arrow" viewBox="0 0 160 80" fill="none">
                  <path
                    d="M10 65 C 50 70, 95 18, 146 30"
                    stroke="var(--accent, #00f0ff)"
                    strokeWidth="2.2"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M138 23 L 148 30 L 139 39"
                    stroke="var(--accent, #00f0ff)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Years Experience Stat */}
              <div className="about-exp-highlight">
                <span className="about-exp-number">01+</span>
                <span className="about-exp-label">
                  YEARS<br />EXPERIENCE
                </span>
              </div>

              {/* Social Media Links */}
              <div className="about-socials-row">
                <a
                  href="https://www.linkedin.com/in/hyder-shaikh-25a83a378/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-btn"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon size={18} />
                </a>
                <a
                  href="https://www.instagram.com/hydershaikh.875/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-btn"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href="https://www.facebook.com/hydershaikh.875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-btn"
                  aria-label="Facebook Profile"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="https://wa.me/923232115162"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-btn"
                  aria-label="WhatsApp Contact"
                >
                  <WhatsAppIcon size={18} />
                </a>
              </div>
            </div>

            {/* ---- CENTER COLUMN (RECTANGLE IMAGE) ---- */}
            <div className="about-center-col">
              <div className="about-photo-frame-rect">
                <div className="about-photo-glow" aria-hidden="true"></div>
                <div className="about-photo-border">
                  <div className="about-rect-img-wrap">
                    <img
                      src={heroImg}
                      alt="Hyder Shaikh — Performance Digital Marketer"
                      className="about-rect-img"
                    />
                  </div>
                </div>
                <div className="about-center-badge">
                  <span className="pulse-dot"></span>
                  <span>Available for Full-Time &amp; Remote Roles</span>
                </div>
              </div>
            </div>

            {/* ---- RIGHT COLUMN ---- */}
            <div className="about-right-col">
              <p className="about-pitch-text">
                "I craft data-driven Meta Ads campaigns, high-converting ad creatives, and videos that turn viewers into paying clients."
              </p>

              {/* Floating Verified Performance Badge */}
              <div className="about-review-badge">
                <div className="about-review-header">
                  <span className="about-review-title">Meta Ads Manager</span>
                  <div className="about-stars" aria-label="5 out of 5 stars">
                    <span className="star-icon">★</span>
                    <span className="star-icon">★</span>
                    <span className="star-icon">★</span>
                    <span className="star-icon">★</span>
                    <span className="star-icon">★</span>
                  </div>
                </div>
                <div className="about-review-meta">
                  <span className="about-review-rating">5.0</span>
                  <span className="about-review-sub">Verified Campaign Strategy &amp; Setup</span>
                </div>
              </div>

              {/* Stylized Signature (Reference-inspired) */}
              <div className="about-signature-wrap">
                <span className="about-sig-script">Digital</span>
                <span className="about-sig-bold">Marketer.</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ============ BOTTOM CREDENTIALS STRIP ============ */}
        <Reveal delay={150}>
          <div className="about-credentials-strip">
            {/* Card 1: Current Role */}
            <div className="about-cred-card">
              <div className="about-cred-icon">
                <Briefcase size={22} />
              </div>
              <div className="about-cred-body">
                <h4>Digital Marketer</h4>
                <span className="about-cred-sub">FR Software Solution (Present)</span>
                <p>Leading Meta Ads lead generation, Urdu creative production, and social media brand growth.</p>
              </div>
            </div>

            {/* Card 2: Certification */}
            <div className="about-cred-card">
              <div className="about-cred-icon">
                <GraduationCap size={22} />
              </div>
              <div className="about-cred-body">
                <h4>Digital Marketing Certified</h4>
                <span className="about-cred-sub">Saylani Mass IT Training (SMIT)</span>
                <p>Practical training in paid advertising funnels, audience targeting, and ROI performance tracking.</p>
              </div>
            </div>

            {/* Card 3: Values & Discipline */}
            <div className="about-cred-card">
              <div className="about-cred-icon">
                <Heart size={22} />
              </div>
              <div className="about-cred-body">
                <h4>Hafiz-e-Quran</h4>
                <span className="about-cred-sub">Discipline, Focus &amp; Ethics</span>
                <p>Complete memorization of the Holy Quran — bringing deep mental focus and dedication to every project.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
