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
              Results-driven Digital Marketer currently working at FR Software Solution, blending analytical campaign math with high-converting creative execution.
            </p>
          </div>
        </Reveal>

        {/* Bio Story */}
        <Reveal>
          <div className="about-narrative-card">
            <div className="about-text-content">
              <p className="about-p-lead">
                I'm <strong className="text-accent">Hyder Shaikh</strong>, a dedicated Digital Marketer currently working at <strong>FR Software Solution</strong>, with hands-on experience in Meta Ads, SEO, content writing, video editing, and social media management.
              </p>
              <p className="about-p">
                I specialize in planning, launching, and optimizing high-converting Facebook and Instagram advertising campaigns to help businesses achieve measurable marketing goals — from laser-focused audience targeting and budget allocation to creative production and deep analytics reporting (CPM, CPC, CTR, ROAS, and frequency).
              </p>
              <p className="about-p">
                With a background that includes an intensive internship at <strong>Israin Solutions</strong> and formal training through a <strong>Digital Marketing Certificate from Saylani Mass IT Training</strong>, I bring a structured, ROI-focused methodology to every campaign I touch.
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
              <h4 className="about-card-subtitle">Digital Marketer</h4>
              <p className="text-muted">FR Software Solution (Present)</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card about-card">
              <div className="about-card-icon"><GraduationCap size={26} /></div>
              <h3 className="about-card-title">Certification</h3>
              <h4 className="about-card-subtitle">Digital Marketing Certificate</h4>
              <p className="text-muted">Saylani Mass IT Training</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card about-card">
              <div className="about-card-icon"><BookOpen size={26} /></div>
              <h3 className="about-card-title">Education</h3>
              <h4 className="about-card-subtitle">Secondary School Certificate (Matric)</h4>
              <p className="text-muted">In Progress</p>
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
                Completed the memorization of the complete Holy Quran (Hifz) — reflecting strong personal discipline, focus, and unwavering dedication that I bring to every marketing campaign and client partnership.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
