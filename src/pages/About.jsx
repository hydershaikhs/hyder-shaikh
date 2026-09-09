import { Briefcase, GraduationCap, BookOpen, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

const About = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <Reveal>
          <div className="page-hero">
            <span className="section-tag">ABOUT HYDER SHAIKH</span>
            <h2 className="page-title">Digital Marketing With<br />Strategy, Creativity &amp; Precision.</h2>
            <p className="text-muted">
              Combining data-driven analytical rigor with high-impact creative storytelling to help brands thrive in today's competitive digital landscape.
            </p>
          </div>
        </Reveal>

        {/* Bio Story */}
        <Reveal>
          <div className="about-narrative-card">
            <div className="about-text-content">
              <p className="about-p-lead">
                I'm <strong className="text-accent">Hyder Shaikh</strong>, a growth-oriented Digital Marketer with specialized, hands-on experience in paid Meta Ads campaigns, search engine optimization (SEO), direct-response content writing, video editing, and complete social media management.
              </p>
              <p className="about-p">
                During my internship at <strong>Israin Solution</strong>, I took active ownership of full-funnel Meta Ads campaigns, audience segmentation, multi-variant ad creative testing, performance data analysis, client SEO evaluations, and brand content production.
              </p>
              <p className="about-p">
                My approach bridges creative execution with measurable metrics â€” focusing on lowering customer acquisition costs (CAC) and maximizing Return on Ad Spend (ROAS) rather than relying on vanity metrics.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Credentials Grid */}
        <div className="about-cards-grid">
          <Reveal delay={0}>
            <div className="card about-card">
              <div className="about-card-icon"><Briefcase size={26} /></div>
              <h3 className="about-card-title">Experience</h3>
              <h4 className="about-card-subtitle">Meta Ads Specialist &amp; Content Creator</h4>
              <p className="text-muted">Israin Solution Â· 2 Months Internship</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card about-card">
              <div className="about-card-icon"><GraduationCap size={26} /></div>
              <h3 className="about-card-title">Certification</h3>
              <h4 className="about-card-subtitle">Digital Marketing Certified</h4>
              <p className="text-muted">Saylani Mass IT Training</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card about-card">
              <div className="about-card-icon"><BookOpen size={26} /></div>
              <h3 className="about-card-title">Education</h3>
              <h4 className="about-card-subtitle">Secondary School Certificate</h4>
              <p className="text-muted">Currently Completing Matric</p>
            </div>
          </Reveal>
        </div>

        {/* Personal Discipline / Hifz */}
        <Reveal>
          <div className="card about-hifz-card">
            <div className="about-card-icon about-hifz-icon"><Heart size={26} /></div>
            <div>
              <div className="about-hifz-badge">Personal Discipline &amp; Values</div>
              <h3 className="about-card-title" style={{ fontSize: '1.4rem', margin: '4px 0 8px' }}>Hafiz-e-Quran</h3>
              <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
                Completed the memorization of the complete Holy Quran (Hifz) â€” a profound journey that cultivated deep personal discipline, razor-sharp focus, memory retention, and an unshakeable commitment to excellence that I bring into every client campaign and project.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;