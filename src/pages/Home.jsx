import { ArrowRight, Target, Search, PenTool, TrendingUp, Users, Zap, Award, Sparkles } from 'lucide-react';
import './Home.css';
import heroImg from '../assets/hero.png';
import Reveal from '../components/Reveal';

const Home = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="home-hero-wrap">
      {/* ============ HERO SECTION ============ */}
      <section className="hero-section">
        <div className="abstract-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>

        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-label">
                Available For Remote &amp; Full-Time Roles
              </span>

              <h1 className="hero-title">
                I Build <span className="gradient-text">Data-Driven</span> Marketing That Scales Real Growth.
              </h1>

              <p className="hero-description">
                I'm <strong>Hyder Shaikh</strong>, a results-driven Digital Marketer currently working at <strong>FR Software Solution</strong>, with hands-on experience in Meta Ads, SEO, content writing, video editing, and social media management.
              </p>

              <div className="hero-actions">
                <a 
                  href="#projects" 
                  className="btn btn-primary-glow btn-pill hero-btn-main"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('projects');
                  }}
                >
                  View Projects <ArrowRight size={16} />
                </a>
                <a 
                  href="#contact" 
                  className="btn btn-outline btn-pill hero-btn-sub"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('contact');
                  }}
                >
                  Let's Work Together
                </a>
              </div>

              <div className="hero-tools">
                <span className="hero-tools-label">Expertise:</span>
                <span className="hero-tool-chip">Meta Ads &amp; UGC</span>
                <span className="hero-tool-chip">Social Media Growth</span>
                <span className="hero-tool-chip">Reels &amp; YouTube Editing</span>
                <span className="hero-tool-chip">SEO &amp; Ranking</span>
                <span className="hero-tool-chip">Ad Copywriting</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-ring"></div>
              <div className="hero-portrait-wrap">
                <div className="hero-portrait">
                  <img src={heroImg} alt="Hyder Shaikh - Performance Digital Marketer" />
                </div>
              </div>
              <div className="hero-badge badge-1">
                <Target size={18} /> Meta Ads &amp; UGC Specialist
              </div>
              <div className="hero-badge badge-2">
                <Users size={18} /> Social Media Manager
              </div>
              <div className="hero-badge badge-3">
                <PenTool size={18} /> Video Editing &amp; Reels
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ QUICK STATS ============ */}
      <section className="quick-stats">
        <div className="container">
          <Reveal>
            <div className="quick-stats-grid">
              <div className="quick-stat">
                <div className="quick-stat-value">FR</div>
                <div className="quick-stat-label">Software Solution<br />Digital Marketer (Present)</div>
              </div>
              <div className="quick-stat-divider"></div>
              <div className="quick-stat">
                <div className="quick-stat-value">Saadgi</div>
                <div className="quick-stat-label">E-Commerce Brand<br />Social Media &amp; Content</div>
              </div>
              <div className="quick-stat-divider"></div>
              <div className="quick-stat">
                <div className="quick-stat-value">SMIT</div>
                <div className="quick-stat-label">Saylani Mass IT<br />Certified Digital Marketer</div>
              </div>
              <div className="quick-stat-divider"></div>
              <div className="quick-stat">
                <div className="quick-stat-value">ROAS</div>
                <div className="quick-stat-label">Data-Driven Metrics<br />CPM, CPC, CTR &amp; ROI</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY WORK WITH ME ============ */}
      <section className="section why-section">
        <div className="container">
          <div className="split-grid">
            <Reveal>
              <div>
                <span className="section-tag">THE COMPETITIVE EDGE</span>
                <h2 className="section-title-left">Why Work<br />With Me?</h2>
                <p className="text-muted" style={{ fontSize: '1.08rem', marginBottom: '32px', lineHeight: '1.8' }}>
                  In a crowded digital space, generic posts and poorly targeted ads waste valuable budget. I combine analytical ad metrics with scroll-stopping UGC creatives, strategic content calendars, and high-retention video editing to deliver measurable marketing results.
                </p>
                <ul className="why-list">
                  <li className="why-item">
                    <div className="why-icon-box">
                      <Target size={22} className="text-accent" />
                    </div>
                    <div>
                      <h4>High-Converting Meta Ads &amp; UGC</h4>
                      <p>Full-funnel Facebook and Instagram ad campaigns, direct-response UGC creative testing, and continuous optimization of CPM, CPC, CTR, and ROAS.</p>
                    </div>
                  </li>
                  <li className="why-item">
                    <div className="why-icon-box">
                      <Users size={22} className="text-accent" />
                    </div>
                    <div>
                      <h4>Multi-Platform Social Media Strategy</h4>
                      <p>End-to-end management across Facebook, Instagram, LinkedIn, TikTok, YouTube &amp; Pinterest with structured content calendars and branded post designs.</p>
                    </div>
                  </li>
                  <li className="why-item">
                    <div className="why-icon-box">
                      <Zap size={22} className="text-accent" />
                    </div>
                    <div>
                      <h4>High-Retention Video Editing</h4>
                      <p>Dynamic Reels, TikToks, and YouTube video editing with kinetic subtitles, retention hooks, and sound design built to engage and convert.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="quote-card">
                <div className="quote-mark">"</div>
                <p className="quote-text">
                  "Hyder manages multi-platform social media operations, crafts high-converting UGC video creatives, and executes Meta Ads campaigns that drive tangible business reach and sales."
                </p>
                <div className="quote-author">
                  <div className="quote-avatar">FR</div>
                  <div>
                    <h5 className="quote-name">FR Software Solution &amp; Saadgi</h5>
                    <p className="quote-role">Active Digital Marketer &amp; Content Strategist</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;