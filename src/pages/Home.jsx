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
                <span className="status-dot"></span>
                Available For Remote &amp; Full-Time Roles
              </span>

              <h1 className="hero-title">
                I Build <span className="gradient-text">Data-Driven</span> Marketing That Scales Real Growth.
              </h1>

              <p className="hero-description">
                I'm <strong>Hyder Shaikh</strong>, a results-driven Digital Marketer at <strong>FR Software Solution</strong> specializing in high-ROI Meta Ads, SEO ranking, compelling ad copy, short-form video editing, and complete social media growth.
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
                <span className="hero-tool-chip">Meta Ads (FB/IG)</span>
                <span className="hero-tool-chip">SEO &amp; Ranking</span>
                <span className="hero-tool-chip">Ad Copywriting</span>
                <span className="hero-tool-chip">Reels Editing</span>
                <span className="hero-tool-chip">Social Growth</span>
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
                <Target size={18} /> Meta Ads Specialist
              </div>
              <div className="hero-badge badge-2">
                <Search size={18} /> SEO &amp; Organic Reach
              </div>
              <div className="hero-badge badge-3">
                <PenTool size={18} /> Creative &amp; Video
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
                <div className="quick-stat-value">SMIT</div>
                <div className="quick-stat-label">Saylani Mass IT<br />Certified Digital Marketer</div>
              </div>
              <div className="quick-stat-divider"></div>
              <div className="quick-stat">
                <div className="quick-stat-value">ROAS</div>
                <div className="quick-stat-label">Data-Driven<br />Meta Ads &amp; Performance SEO</div>
              </div>
              <div className="quick-stat-divider"></div>
              <div className="quick-stat">
                <div className="quick-stat-value">100%</div>
                <div className="quick-stat-label">Dedication to<br />Measurable Growth &amp; ROI</div>
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
                  In a saturated digital space, generic marketing burns ad budgets without generating returns. I blend analytical campaign math with emotional creative hooks to craft marketing that actually converts.
                </p>
                <ul className="why-list">
                  <li className="why-item">
                    <div className="why-icon-box">
                      <TrendingUp size={22} className="text-accent" />
                    </div>
                    <div>
                      <h4>Data-Backed Performance</h4>
                      <p>Every decision is grounded in real-time tracking of CPM, CPC, CTR, and ROAS to prevent wasted ad spend.</p>
                    </div>
                  </li>
                  <li className="why-item">
                    <div className="why-icon-box">
                      <Users size={22} className="text-accent" />
                    </div>
                    <div>
                      <h4>Audience-Centric Targeting</h4>
                      <p>I don't just chase empty vanity clicks â€” I identify and target high-intent buyers most likely to convert.</p>
                    </div>
                  </li>
                  <li className="why-item">
                    <div className="why-icon-box">
                      <Zap size={22} className="text-accent" />
                    </div>
                    <div>
                      <h4>Creative + Analytical Synergy</h4>
                      <p>Copy, visual design, and video editing built around a proven strategy â€” so your brand looks premium and sells.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="quote-card">
                <div className="quote-mark">"</div>
                <p className="quote-text">
                  "Hyder blends analytical Meta Ads strategies with creative video editing and compelling copy to deliver measurable marketing goals and client satisfaction."
                </p>
                <div className="quote-author">
                  <div className="quote-avatar">IS</div>
                  <div>
                    <h5 className="quote-name">Israin Solution</h5>
                    <p className="quote-role">Internship Experience Endorsement</p>
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