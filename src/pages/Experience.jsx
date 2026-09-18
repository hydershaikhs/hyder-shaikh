import { Check, Briefcase, Calendar, Sparkles } from "lucide-react";
import "./Experience.css";
import Reveal from "../components/Reveal";

const experiences = [
  {
    role: "Meta Ads Specialist & Content Creator",
    company: "Israin Solution",
    period: "July – August 2026",
    type: "Work Experience",
    highlight: true,
    description: "Planned, launched, and managed end-to-end Meta Ads campaigns for multiple clients, optimizing campaign spend and creating high-converting creative assets.",
    achievements: [
      "Planned, launched, and managed Meta Ads campaigns for multiple clients — audience targeting, budgeting, creatives, and performance tracking.",
      "Analyzed CPM, CPC, CTR, ROAS metrics to continuously optimize campaigns and improve ad spend efficiency.",
      "Wrote high-converting ad copy, captions, and social media content; designed post creatives aligned with brand guidelines.",
      "Produced short-form videos (Reels, promos) and managed community engagement across client pages.",
      "Delivered regular performance reports with actionable insights to clients."
    ]
  }
];

const coreSkills = [
  "Meta Ads — Facebook & Instagram Campaigns",
  "Search Engine Optimization (SEO)",
  "Content Writing — Ad Copy, Captions, Blog Content",
  "Social Media Management & Community Engagement",
  "Video Editing — Adobe Premiere Pro & After Effects",
  "Social Media Post Design",
  "Meta Ads Analytics — CPM, CPC, CTR, ROAS",
  "Audience Targeting & Budget Optimization"
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
              Professional digital marketing background with proven results in conversion Meta Ads, search engine optimization, and creative content.
            </p>
          </div>
        </Reveal>

        {/* Work Experience Card */}
        <div className="exp-timeline">
          {experiences.map((exp, idx) => (
            <Reveal key={exp.company} delay={idx * 120}>
              <div className={`exp-card ${exp.highlight ? 'exp-card-featured' : ''}`}>
                <div className="exp-card-header">
                  <div className="exp-card-title-group">
                    <span className="exp-badge">
                      <Briefcase size={14} /> {exp.type}
                    </span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company-meta">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-divider">•</span>
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

        {/* Core Skills Grid directly from CV */}
        <Reveal delay={200}>
          <div className="exp-skills-card">
            <div className="exp-skills-header">
              <span className="exp-badge">
                <Sparkles size={14} /> Core Competencies
              </span>
              <h3 className="exp-skills-title">Core Skills</h3>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>
                Key technical and strategic capabilities applied across all client projects and marketing campaigns.
              </p>
            </div>
            <div className="exp-skills-grid">
              {coreSkills.map((skill, index) => (
                <div key={index} className="exp-skill-pill">
                  <span className="exp-skill-dot"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
