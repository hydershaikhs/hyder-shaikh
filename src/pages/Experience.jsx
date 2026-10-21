import { Briefcase, Calendar, Check, Sparkles, Wrench } from "lucide-react";
import "./Experience.css";
import Reveal from "../components/Reveal";

const experiences = [
  {
    role: "Digital Marketer & Media Buyer",
    company: "FR Software Solution",
    period: "SEP 2026 – PRESENT",
    type: "FULL-TIME",
    isCurrent: true,
    description: "Managing full-funnel Meta Ads campaigns, high-retention video production, and multi-platform organic social growth to drive qualified leads, direct sales, and brand reach.",
    highlights: [
      "Manage end-to-end Meta Ads campaigns (FB & IG) optimized for ROAS, lower CPA, and qualified lead acquisition.",
      "Produce scroll-stopping UGC video and image creatives tailored for high-converting direct-response advertising.",
      "Execute monthly multi-channel content strategies across Facebook, Instagram, and LinkedIn with branded post designs."
    ],
    tools: ["Meta Ads Manager", "Meta Pixel", "Canva", "CapCut", "Meta Business Suite"]
  },
  {
    role: "Digital Marketing Intern",
    company: "Israin Solutions",
    period: "JULY 2026 – AUGUST 2026",
    type: "INTERNSHIP",
    isCurrent: false,
    description: "Assisted senior marketing teams in structuring paid advertising funnels, audience segmentation, and producing brand-aligned marketing creatives for diverse client niches.",
    highlights: [
      "Assisted in setting up client Meta Ads campaigns, testing audience clusters, and monitoring daily delivery metrics.",
      "Created dynamic short-form Reels and aesthetic graphic post designs aligned with client brand guides.",
      "Crafted direct-response ad copywriting, hook headlines, and persuasive captions for paid and organic campaigns."
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
                          <span>Present</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="exp-date-pill">
                    <Calendar size={13} className="text-accent" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="exp-description">{exp.description}</p>

                {/* Key Highlights List (Compact & Clean) */}
                <ul className="exp-highlights-list">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>
                      <Check size={14} className="text-accent exp-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Compact Tools Row */}
                <div className="exp-tools-row">
                  <span className="exp-tools-label">
                    <Wrench size={12} />
                    <span>Tools:</span>
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
