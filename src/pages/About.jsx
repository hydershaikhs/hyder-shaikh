import { Briefcase, GraduationCap, BookOpen, Heart } from 'lucide-react';
import Reveal from '../components/Reveal';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <Reveal>
          <div className="page-hero">
            <span className="section-tag">ABOUT HYDER SHAIKH</span>
            <h2 className="page-title">Digital Marketing With<br />Strategy, Creativity &amp; Precision.</h2>
            <p className="text-muted">
              Results-driven Digital Marketer with hands-on experience in Meta Ads, SEO, content writing, video editing, and social media management.
            </p>
          </div>
        </Reveal>

        {/* Bio Story */}
        <Reveal>
          <div className="about-narrative-card">
            <div className="about-text-content">
              <p className="about-p-lead">
                I'm <strong className="text-accent">Hyder Shaikh</strong>, a results-driven Digital Marketer with hands-on experience in Meta Ads, SEO, content writing, video editing, and social media management.
              </p>
              <p className="about-p">
                I specialize in planning and optimizing Facebook and Instagram campaigns — from audience targeting and budget allocation to creative production and performance reporting (CPM, CPC, CTR, and ROAS).
              </p>
              <p className="about-p">
                With practical experience at <strong>Israin Solution</strong> and professional certification from <strong>Saylani Mass IT Training (2025)</strong>, I bring a structured, data-driven approach to drive measurable marketing results.
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
              <p className="text-muted">Israin Solution (July – Aug 2026)</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card about-card">
              <div className="about-card-icon"><GraduationCap size={26} /></div>
              <h3 className="about-card-title">Certification</h3>
              <h4 className="about-card-subtitle">Digital Marketing Certificate</h4>
              <p className="text-muted">Saylani Mass IT Training (2025)</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card about-card">
              <div className="about-card-icon"><BookOpen size={26} /></div>
              <h3 className="about-card-title">Education</h3>
              <h4 className="about-card-subtitle">Secondary School Certificate (Matric)</h4>
              <p className="text-muted">Currently in Progress</p>
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
                Completed full memorization of the Holy Quran — reflecting exceptional discipline, focus, and dedication that I bring to every marketing campaign and client partnership.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
