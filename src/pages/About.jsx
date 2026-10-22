import { Briefcase, GraduationCap, BookOpen, Heart, Target, Palette, Film, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Page Hero Header */}
        <Reveal>
          <div className="about-hero-center">
            <span className="section-tag">ABOUT HYDER SHAIKH</span>
            <h2 className="page-title">
              Bridging Strategic Marketing With <br />
              <span className="gradient-text">Creative Production &amp; Real Results.</span>
            </h2>
            <p className="page-subtitle">
              A hands-on Digital Marketer, Media Buyer, and Content Creator dedicated to transforming advertising spend into measurable business growth.
            </p>
          </div>
        </Reveal>

        {/* Main Narrative Card: Bio + Core Pillars */}
        <Reveal>
          <div className="about-main-card">
            <div className="about-main-layout">
              {/* Left Column: Authentic Bio */}
              <div className="about-bio-col">
                <p className="about-bio-lead">
                  I'm <strong>Hyder Shaikh</strong>, a results-driven Digital Marketer currently leading paid campaigns, creative design, and social media operations at <strong>FR Software Solution</strong>.
                </p>
                <p className="about-bio-text">
                  My approach bridges the gap between analytical media buying and compelling creative execution. I don't just set up ads — I develop the campaign angle, design the visual creatives, write persuasive copy, and configure end-to-end funnels in Meta Ads Manager to capture genuine audience demand.
                </p>
                <p className="about-bio-text">
                  Certified in Digital Marketing from <strong>Saylani Mass IT Training (SMIT)</strong> and experienced with multiple brand engagements (including <strong>FR Software Solution</strong>, <strong>art.b Paintings</strong>, and <strong>Israin Solutions</strong>), I bring a commitment to transparent reporting and measurable outcomes.
                </p>
              </div>

              {/* Right Column: 4 Core Pillars */}
              <div className="about-pillars-grid">
                <div className="about-pillar-item">
                  <div className="about-pillar-icon">
                    <Target size={18} />
                  </div>
                  <div className="about-pillar-content">
                    <h4>Meta Ads &amp; Paid Strategy</h4>
                    <p>Structured campaigns configured for Leads and Sales with precise audience targeting.</p>
                  </div>
                </div>

                <div className="about-pillar-item">
                  <div className="about-pillar-icon">
                    <Palette size={18} />
                  </div>
                  <div className="about-pillar-content">
                    <h4>Creative &amp; Ad Post Design</h4>
                    <p>Eye-catching, high-converting ad visuals and bilingual (English &amp; Urdu) copy.</p>
                  </div>
                </div>

                <div className="about-pillar-item">
                  <div className="about-pillar-icon">
                    <Film size={18} />
                  </div>
                  <div className="about-pillar-content">
                    <h4>Video &amp; AI Production</h4>
                    <p>Dynamic short-form video editing and AI-assisted visual storytelling.</p>
                  </div>
                </div>

                <div className="about-pillar-item">
                  <div className="about-pillar-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="about-pillar-content">
                    <h4>Evidence-Based Reporting</h4>
                    <p>Transparent analytics tracking verified CPM, CTR, conversations, and cost per lead.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Quick Highlights Bar */}
        <Reveal>
          <div className="about-highlights-bar">
            <div className="about-highlight-box">
              <div className="about-highlight-val">Meta Ads</div>
              <div className="about-highlight-lbl">Campaign Strategy &amp; Setup</div>
            </div>
            <div className="about-highlight-box">
              <div className="about-highlight-val">Bilingual</div>
              <div className="about-highlight-lbl">English &amp; Urdu Creatives</div>
            </div>
            <div className="about-highlight-box">
              <div className="about-highlight-val">Full-Funnel</div>
              <div className="about-highlight-lbl">Lead Gen &amp; Direct Messaging</div>
            </div>
            <div className="about-highlight-box">
              <div className="about-highlight-val">SMIT Certified</div>
              <div className="about-highlight-lbl">Digital Marketing Professional</div>
            </div>
          </div>
        </Reveal>

        {/* 4 Credentials & Personal Foundation Cards */}
        <div className="about-cards-row">
          <Reveal delay={0}>
            <div className="about-info-card">
              <div className="about-info-header">
                <div className="about-info-icon-badge">
                  <Briefcase size={22} />
                </div>
                <div>
                  <div className="about-info-tag">Current Role</div>
                  <h3 className="about-info-title">Digital Marketer</h3>
                </div>
              </div>
              <h4 className="about-info-subtitle">FR Software Solution</h4>
              <p className="about-info-desc">
                Managing Meta Ads lead generation, Urdu creative production, and social media brand growth for POS and business software.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="about-info-card">
              <div className="about-info-header">
                <div className="about-info-icon-badge">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div className="about-info-tag">Certification</div>
                  <h3 className="about-info-title">Digital Marketing</h3>
                </div>
              </div>
              <h4 className="about-info-subtitle">Saylani Mass IT Training (SMIT)</h4>
              <p className="about-info-desc">
                Completed hands-on practical training in paid advertising funnels, audience research, creative strategy, and performance metrics.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="about-info-card">
              <div className="about-info-header">
                <div className="about-info-icon-badge">
                  <BookOpen size={22} />
                </div>
                <div>
                  <div className="about-info-tag">Academics</div>
                  <h3 className="about-info-title">Secondary Education</h3>
                </div>
              </div>
              <h4 className="about-info-subtitle">SSC (Matric) — In Progress</h4>
              <p className="about-info-desc">
                Building a strong, disciplined foundation while proactively mastering modern digital marketing and commerce technologies.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="about-info-card hifz-highlight">
              <div className="about-info-header">
                <div className="about-info-icon-badge">
                  <Heart size={22} />
                </div>
                <div>
                  <div className="about-info-tag">Values &amp; Discipline</div>
                  <h3 className="about-info-title">Hafiz-e-Quran</h3>
                </div>
              </div>
              <h4 className="about-info-subtitle">Discipline, Focus &amp; Integrity</h4>
              <p className="about-info-desc">
                Complete memorization of the Holy Quran (Hifz) — reflecting unwavering focus, patience, memory, and high ethical standards applied to every project.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
