import { Target, Palette, Film, GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal';
import heroImg from '../assets/hero.png';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="about-bg-ambient" aria-hidden="true"></div>

      <div className="container about-container">
        {/* ============ TOP HEADER ============ */}
        <Reveal>
          <div className="about-top-header">
            <span className="about-top-pill">ABOUT ME</span>
            <h2 className="about-top-title">
              Driven by Strategy, Creativity &amp; <span className="gradient-text">Real Results.</span>
            </h2>
            <p className="about-top-subtitle">
              A hands-on Digital Marketer and Creative Media Buyer focused on turning advertising spend into qualified leads and measurable growth.
            </p>
          </div>
        </Reveal>

        {/* ============ 3-COLUMN MAIN STAGE (CENTER RECTANGLE IMAGE) ============ */}
        <Reveal delay={100}>
          <div className="about-stage-grid">
            {/* ---- LEFT COLUMN: AUTHENTIC BIO & ROLE ---- */}
            <div className="about-left-col">
              <span className="about-label-badge">WHO I AM</span>
              <h3 className="about-bio-title">Hyder Shaikh</h3>
              <p className="about-bio-desc">
                I'm a performance-focused <strong>Digital Marketer</strong> currently working at <strong>FR Software Solution</strong>. I specialize in planning, launching, and managing Meta Ads campaigns that connect businesses with genuine clients.
              </p>
              <p className="about-bio-desc">
                I handle the full advertising lifecycle: from audience targeting and budget allocation in Meta Ads Manager to designing custom bilingual creatives (Urdu &amp; English) and producing high-retention video content.
              </p>

              {/* Genuine Current Role Callout (No fake years!) */}
              <div className="about-role-callout">
                <span className="about-role-callout-tag">Current Position</span>
                <h4 className="about-role-callout-title">Digital Marketer @ FR Software Solution</h4>
                <p className="about-role-callout-sub">Leading Meta Ads, creative design &amp; multi-channel social growth</p>
              </div>
            </div>

            {/* ---- CENTER COLUMN: RECTANGLE PORTRAIT FRAME ---- */}
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
                  <span>Active &amp; Open to Opportunities</span>
                </div>
              </div>
            </div>

            {/* ---- RIGHT COLUMN: 4 CORE EXPERTISE CARDS ---- */}
            <div className="about-right-col">
              {/* Card 1: Meta Ads */}
              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <Target size={20} />
                </div>
                <div className="about-feature-body">
                  <h4>Meta Ads Strategy &amp; Setup</h4>
                  <p>Campaign structuring, audience segmentation, Leads &amp; Sales objectives, and clear Ads Manager performance tracking.</p>
                </div>
              </div>

              {/* Card 2: Ad Creative Design */}
              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <Palette size={20} />
                </div>
                <div className="about-feature-body">
                  <h4>Ad Creative &amp; Post Design</h4>
                  <p>Custom-designed advertising visuals and bilingual (English &amp; Urdu) copy tailored to capture local and regional buyer intent.</p>
                </div>
              </div>

              {/* Card 3: Video Production */}
              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <Film size={20} />
                </div>
                <div className="about-feature-body">
                  <h4>Video Editing &amp; Reels</h4>
                  <p>Dynamic short-form video content, kinetic transitions, and sound design created in Premiere Pro and CapCut.</p>
                </div>
              </div>

              {/* Card 4: Credentials & Discipline */}
              <div className="about-feature-card highlight-card">
                <div className="about-feature-icon">
                  <GraduationCap size={20} />
                </div>
                <div className="about-feature-body">
                  <h4>Certification &amp; Dedication</h4>
                  <p>Certified in Digital Marketing from <strong>Saylani Mass IT Training (SMIT)</strong> and <strong>Hafiz-e-Quran</strong> — bringing deep focus and integrity to every project.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
