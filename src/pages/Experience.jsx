import { Briefcase, Calendar, Check, Wrench } from "lucide-react";
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

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header Inspired by Reference */}
        <Reveal>
          <div className="exp-section-header">
            <span className="exp-career-pill">CAREER PATH</span>
            <h2 className="exp-main-title">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="exp-main-subtitle">
              My professional journey and track record in performance digital marketing, video production, and brand growth.
            </p>
          </div>
        </Reveal>

        {/* Vertical Timeline Container */}
        <div className="exp-timeline-wrapper">
          {/* Continuous Left Timeline Line */}
          <div className="exp-timeline-line"></div>

          <div className="exp-timeline-list">
            {experiences.map((exp, idx) => (
              <Reveal key={exp.company} delay={idx * 120}>
                <div className={`exp-timeline-item ${exp.isCurrent ? "item-current" : ""}`}>
                  {/* Glowing Circular Timeline Node */}
                  <div className="exp-timeline-node" aria-hidden="true">
                    <span className="node-glow-ring"></span>
                    <span className="node-center-dot"></span>
                  </div>

                  {/* Sleek Modern Card */}
                  <div className={`exp-card ${exp.isCurrent ? "exp-card-current" : ""}`}>
                    {/* Header Row: Role on Left, Date Pill on Right */}
                    <div className="exp-card-header">
                      <h3 className="exp-role-title">{exp.role}</h3>
                      <div className="exp-date-pill">
                        <Calendar size={13} className="text-accent" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Company & Type Metadata Row */}
                    <div className="exp-company-meta">
                      <span className="exp-company-name">
                        <Briefcase size={14} className="text-accent" />
                        <span>{exp.company}</span>
                      </span>
                      <span className="exp-type-badge">{exp.type}</span>
                      {exp.isCurrent && (
                        <span className="exp-live-badge">
                          <span className="live-pulse-dot"></span>
                          <span>Present</span>
                        </span>
                      )}
                    </div>

                    {/* Subtle Divider */}
                    <div className="exp-card-divider"></div>

                    {/* Description Text */}
                    <p className="exp-description">{exp.description}</p>

                    {/* Highlights List */}
                    <ul className="exp-highlights-list">
                      {exp.highlights.map((item, i) => (
                        <li key={i}>
                          <Check size={14} className="text-accent exp-check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Applied Tools Row */}
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
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
