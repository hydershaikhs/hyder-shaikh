import { Check, Briefcase, Calendar } from 'lucide-react';
import './Experience.css';
import Reveal from '../components/Reveal';

const experiences = [
  {
    role: 'Meta Ads Specialist & Content Creator',
    company: 'Israin Solution',
    period: '2 Months Internship',
    type: 'Internship',
    highlight: true,
    description: 'Executed high-ROI paid ad campaigns on Facebook & Instagram, crafted persuasive ad creatives, conducted audience research, and optimized CPM, CPC, and ROAS while assisting with technical SEO activities.',
    achievements: [
      'Structured conversion-focused Meta Ads campaigns targeting targeted demographics',
      'Tested multi-variant creatives (visuals, headlines, copy) to lower cost-per-click',
      'Conducted on-page and off-page SEO evaluations for client web properties',
      'Developed high-retention social media content and short-form video reels'
    ]
  },
  {
    role: 'Social Media Growth Manager',
    company: 'Marketing Insight',
    period: 'Active Project',
    type: 'Client & Community Project',
    highlight: false,
    description: 'Managing end-to-end digital presence across Instagram and Facebook: publishing schedule, audience engagement, custom brand creatives, and video content production.',
    achievements: [
      'Established cohesive visual brand identity across feed posts and stories',
      'Maintained consistent content calendar and direct community messaging',
      'Tracked engagement analytics to iterate on top-performing post themes'
    ]
  }
];


const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <Reveal>
          <div className="page-hero">
            <span className="section-tag">HANDS-ON BACKGROUND</span>
            <h2 className="page-title">Experience &amp; Expertise</h2>
            <p className="text-muted">
              Practical digital marketing experience combining analytical ad strategy, technical SEO execution, and high-impact creative production.
            </p>
          </div>
        </Reveal>

        {/* Work Timeline / Highlights */}
        <div className="exp-timeline">
          {experiences.map((exp, idx) => (
            <Reveal key={exp.role} delay={idx * 120}>
              <div className={`exp-card ${exp.highlight ? 'exp-card-featured' : ''}`}>
                <div className="exp-card-header">
                  <div className="exp-card-title-group">
                    <span className="exp-badge">
                      <Briefcase size={14} /> {exp.type}
                    </span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company-meta">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-divider">â€¢</span>
                      <span className="exp-period"><Calendar size={13} /> {exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="exp-desc">{exp.description}</p>

                <div className="exp-achievements">
                  <span className="exp-achievements-title">Key Responsibilities &amp; Impact:</span>
                  <ul className="exp-achievements-list">
                    {exp.achievements.map((item, i) => (
                      <li key={i}>
                        <Check size={15} className="text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;