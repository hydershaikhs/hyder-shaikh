import { Check, Briefcase, Calendar, Sparkles } from "lucide-react";
import "./Experience.css";
import Reveal from "../components/Reveal";

const experiences = [
  {
    role: "Digital Marketer",
    company: "FR Software Solution",
    period: "September 2026 – Present",
    type: "Current Role",
    highlight: true,
    description: "Plan, launch, and manage conversion-focused Meta Ads campaigns (Facebook & Instagram), high-retention video editing, and multi-platform social media growth to drive organizational success.",
    achievements: [
      "Plan, launch, and manage Meta Ads campaigns (Facebook and Instagram) for the organization, covering audience targeting, budget setting, ad creative, and performance tracking.",
      "Analyze key Meta Ads metrics such as CPM, CPC, CTR, ROAS, and frequency to continuously optimize campaigns and improve return on ad spend.",
      "Create high-converting UGC (User-Generated Content) video & image ad creatives tailored for paid campaigns.",
      "Write engaging ad copy, captions, and direct-response hooks for social media and marketing campaigns.",
      "Create short-form and long-form video content tailored for social media platforms, including Reels, TikToks, and YouTube promotional videos.",
      "Design social media post creatives aligned with brand guidelines and campaign goals.",
      "Handle social media management and community engagement across Facebook, Instagram, and LinkedIn, responding to comments and DMs.",
      "Deliver regular performance reports with clear, actionable insights on campaign results and next steps."
    ]
  },
  {
    role: "Digital Marketing Intern",
    company: "Israin Solutions",
    period: "July 2026 – August 2026",
    type: "Internship",
    highlight: false,
    description: "Assisted in structuring and managing paid advertising funnels on Facebook & Instagram, and producing brand-aligned marketing creatives.",
    achievements: [
      "Assisted in planning and managing Meta Ads campaigns (Facebook and Instagram) for multiple clients, covering audience targeting, budget setting, and performance tracking.",
      "Created social media post designs and short-form video content aligned with client brand guidelines.",
      "Wrote engaging ad copy, captions, and content for social media and marketing campaigns.",
      "Supported community management for client pages, responding to comments and DMs to build audience trust and loyalty.",
      "Collaborated with clients to understand business goals and translated them into effective digital marketing strategies."
    ]
  }
];

const coreSkills = [
  "Meta Ads (Facebook & Instagram Advertising, Campaign Management, Audience Targeting)",
  "UGC Ads Creation & Creative Strategy",
  "Video Editing (Adobe Premiere Pro, Adobe After Effects, CapCut)",
  "Short-Form Reels, TikToks & YouTube Video Editing",
  "Social Media Management & Community Engagement (Multi-Platform)",
  "Content Strategy & Monthly Content Calendar Planning",
  "Social Media Post Design (Branded Creatives & Visual Identity)",
  "Meta Ads Analytics: CPM, CPC, CTR, ROAS, Frequency, Conversion Tracking"
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
              Professional digital marketing background with proven results in conversion Meta Ads, high-retention video editing, and multi-platform social media management.
            </p>
          </div>
        </Reveal>

        {/* Work Experience Timeline */}
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
