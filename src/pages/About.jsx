import { Clapperboard, Camera, Sparkles, BookOpen } from 'lucide-react';
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
            <span className="about-top-pill">ABOUT HYDER</span>
            <h2 className="about-top-title">
              Short-Form Video Editor &amp; <span className="gradient-text">Creative Ad Maker.</span>
            </h2>
            <p className="about-top-subtitle">
              Helping e-commerce brands, DTC companies, and local businesses turn video into a consistent conversion channel.
            </p>
          </div>
        </Reveal>

        {/* ============ 3-COLUMN MAIN STAGE ============ */}
        <Reveal delay={100}>
          <div className="about-stage-grid">
            {/* ---- LEFT COLUMN: HONEST FIRST-PERSON BIO ---- */}
            <div className="about-left-col">
              <span className="about-label-badge">WHO I AM</span>
              <h3 className="about-bio-title">Hyder Shaikh</h3>
              <p className="about-bio-desc">
                I'm a short-form video editor and ad creative maker based in Pakistan, currently working full-time at <strong>FR Software Solution</strong> (since September 2026) and taking on freelance projects and monthly retainers worldwide.
              </p>
              <p className="about-bio-desc">
                My work focuses on direct-response video: taking raw footage, product shots, or phone recordings and turning them into fast-paced, high-retention Reels, TikToks, and UGC ads that actually make viewers stop scrolling.
              </p>
              <p className="about-bio-desc">
                <strong>The Bilingual Advantage (English + Urdu):</strong> I write and edit in both languages. This gives me a unique edge for brands targeting domestic Pakistani buyers as well as overseas South Asian diaspora businesses in the UK, USA, and Gulf region.
              </p>

              {/* Current Role Callout */}
              <div className="about-role-callout">
                <span className="about-role-callout-tag">Active Role</span>
                <h4 className="about-role-callout-title">Video Editor &amp; Marketer @ FR Software Solution</h4>
                <p className="about-role-callout-sub">Sep 2026 – Present · Managing video editing, UGC creatives &amp; Meta ad delivery</p>
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
                      alt="Hyder Shaikh - Short-Form Video Editor"
                      className="about-rect-img"
                    />
                  </div>
                </div>
                <div className="about-center-badge">
                  <span className="pulse-dot"></span>
                  <span>Open for Projects &amp; Retainers</span>
                </div>
              </div>
            </div>

            {/* ---- RIGHT COLUMN: 3 CORE SKILLS + HONEST BACKGROUND BLOCK ---- */}
            <div className="about-right-col">
              {/* Card 1: Video Editing */}
              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <Clapperboard size={20} />
                </div>
                <div className="about-feature-body">
                  <h4>Short-Form Video Editing</h4>
                  <p>Adobe Premiere Pro and CapCut timelines engineered for retention: custom SFX, animated kinetic subtitles, and punchy visual hooks.</p>
                </div>
              </div>

              {/* Card 2: UGC Ad Creatives */}
              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <Camera size={20} />
                </div>
                <div className="about-feature-body">
                  <h4>UGC-Style Ad Creatives</h4>
                  <p>Direct-response video concepts and ad designs tailored for e-commerce, DTC brands, and local retail stores.</p>
                </div>
              </div>

              {/* Card 3: Meta Ads Setup */}
              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <Sparkles size={20} />
                </div>
                <div className="about-feature-body">
                  <h4>Meta Ads Setup (Add-on)</h4>
                  <p>Advantage+ and messaging campaigns setup in Meta Ads Manager to distribute your video creatives effectively.</p>
                </div>
              </div>

              {/* Card 4: Background block (Hafiz-e-Quran & SMIT) */}
              <div className="about-feature-card highlight-card">
                <div className="about-feature-icon">
                  <BookOpen size={20} />
                </div>
                <div className="about-feature-body">
                  <h4>Background &amp; Discipline</h4>
                  <p><strong>Hafiz-e-Quran</strong> and certified in Digital Marketing from <strong>Saylani Mass IT Training (SMIT)</strong> — bringing strong discipline, honesty, and consistent work ethic to every client collaboration.</p>
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
