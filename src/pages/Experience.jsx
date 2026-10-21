import { Briefcase, Calendar, Check, Sparkles, Wrench } from "lucide-react";
import "./Experience.css";
import Reveal from "../components/Reveal";

const experiences = [
  {
    role: "Digital Marketer & Performance Specialist",
    company: "FR Software Solution",
    period: "SEP 2026 – PRESENT",
    type: "FULL-TIME",
    isCurrent: true,
    description: "Leading full-funnel Meta Ads campaigns, high-retention video production, and multi-platform organic social growth to drive verifiable client acquisition and scalable revenue.",
    keyContributions: [
      "Plan, launch, and scale conversion-driven Meta Ads (Facebook & Instagram) covering custom audience targeting, budget allocation, and ROAS optimization.",
      "Analyze full-funnel ad metrics (CPM, CPC, CTR, ROAS, Frequency) to continuously refine ad spend efficiency and maximize conversion volume.",
      "Produce scroll-stopping UGC video and image ad creatives tailored for direct-response paid campaigns.",
      "Manage multi-channel social media operations (Facebook, Instagram, LinkedIn) with monthly content calendars, post designs, and community engagement."
    ],
    tools: ["Meta Ads Manager", "Meta Pixel & CAPI", "Canva", "CapCut", "Premiere Pro", "Meta Business Suite"]
  },
  {
    role: "Digital Marketing Intern",
    company: "Israin Solutions",
    period: "JULY 2026 – AUGUST 2026",
    type: "INTERNSHIP",
    isCurrent: false,
    description: "Assisted senior media buyers in structuring paid advertising funnels on Facebook & Instagram, and producing brand-aligned marketing creatives for diverse client niches.",
    keyContributions: [
      "Supported campaign setup, custom audience segmentation, and budget allocation for multi-client Meta Ads accounts.",
      "Designed high-engagement social media post creatives and dynamic short-form Reels following client brand guidelines.",
      "Wrote direct-response ad copy, compelling hook headlines, and persuasive captions for paid and organic campaigns.",
      "Assisted community management workflows and monitored daily campaign deliverability metrics."
    ],
    tools: ["Facebook Ads", "Instagram Ads", "Ad Copywriting", "Audience Research", "Canva"]
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
              Professional digital marketing background with proven results in conversion Meta Ads, high-retention video editing, and multi-platform social media growth.
            </p>
          </div>
        </Reveal>

        {/* Work Experience Cards */}
        <div className="exp-timeline">
          {experiences.map((exp, idx) => (
            <Reveal key={exp.company} delay={idx * 100}>
              <div className={`exp-card ${exp.isCurrent ? "exp-card-current" : ""}`}>
                {/* Header Row: Role on Left, Date Pill on Right */}
                <div className="exp-card-header">
                  <div className="exp-role-group">
                    <h3 className="exp-role-title">{exp.role}</h3>
                    <div className="exp-company-meta">
                      <span className="exp-company-name">
                        <Briefcase size={14} className="text-accent" />
                        <span>{exp.company}</span>
                      </span>
                      <span className="exp-type-tag">{exp.type}</span>
                      {exp.isCurrent && (
                        <span className="exp-current-pill">
                          <span className="pulse-dot"></span>
                          <span>Present Role</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="exp-date-pill">
                    <Calendar size={13} className="text-accent" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="exp-divider-line"></div>

                {/* Role Description */}
                <p className="exp-description">{exp.description}</p>

                {/* Key Contributions & Impact */}
                <div className="exp-contributions-box">
                  <div className="exp-contributions-title">
                    <Sparkles size={14} className="text-accent" />
                    <span>Key Contributions &amp; Impact:</span>
                  </div>
                  <ul className="exp-contributions-list">
                    {exp.keyContributions.map((item, i) => (
                      <li key={i}>
                        <Check size={14} className="text-accent exp-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Applied */}
                <div className="exp-tools-footer">
                  <span className="exp-tools-label">
                    <Wrench size={13} />
                    <span>Applied Tools:</span>
                  </span>
                  <div className="exp-tools-chips">
                    {exp.tools.map((tool, i) => (
                      <span key={i} className="exp-tool-badge">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Core Skills Matrix */}
        <Reveal delay={200}>
          <div className="exp-skills-card">
            <div className="exp-skills-header">
              <span className="exp-skills-badge">
                <Sparkles size={13} />
                <span>Core Competencies</span>
              </span>
              <h3 className="exp-skills-title">Technical &amp; Strategic Skills</h3>
              <p className="text-muted" style={{ fontSize: "0.93rem" }}>
                Key technical capabilities applied across all client projects, ad sets, and marketing funnels.
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
