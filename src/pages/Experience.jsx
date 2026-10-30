import { Briefcase, Calendar, Check, Wrench } from "lucide-react";
import "./Experience.css";
import Reveal from "../components/Reveal";

const experiences = [
  {
    role: "Short-Form Video Editor & Digital Marketer",
    company: "FR Software Solution",
    period: "SEP 2026 – PRESENT",
    type: "FULL-TIME",
    isCurrent: true,
    description: "Responsible for in-house video editing, UGC ad creative production, and Meta Ads setup to generate qualified B2B software inquiries.",
    highlights: [
      "Edit fast-paced product explainers, feature Reels, and kinetic testimonial clips in Adobe Premiere Pro and CapCut.",
      "Design and script Urdu and English UGC-style video ads targeting retail and wholesale store owners.",
      "Configure and monitor Meta Ads campaigns (Leads & Messaging objectives) to test creative performance."
    ],
    tools: ["Adobe Premiere Pro", "CapCut", "Meta Ads Manager", "Sound Design", "Canva"]
  },
  {
    role: "Digital Marketing & Video Intern",
    company: "Israin Solutions",
    period: "JULY 2026 – AUGUST 2026",
    type: "INTERNSHIP",
    isCurrent: false,
    description: "Completed an intensive 2-month internship supporting video post-production, creative ad asset design, and ad account delivery.",
    highlights: [
      "Assembled short-form vertical Reels and graphic post assets for client social media accounts.",
      "Drafted direct-response ad copy, hook headlines, and bilingual video scripts (English + Urdu).",
      "Assisted senior media buyers in campaign setup, audience segmentation, and performance tracking."
    ],
    tools: ["CapCut", "Adobe Premiere Pro", "Meta Ads Manager", "Ad Copywriting", "Canva"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <Reveal>
          <div className="exp-section-header">
            <span className="exp-career-pill">CAREER PATH</span>
            <h2 className="exp-main-title">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="exp-main-subtitle">
              An honest look at my professional journey in short-form video editing, ad creative production, and performance advertising.
            </p>
          </div>
        </Reveal>

        {/* Vertical Timeline Container */}
        <div className="exp-timeline-wrapper">
          <div className="exp-timeline-line"></div>

          <div className="exp-timeline-list">
            {experiences.map((exp, idx) => (
              <Reveal key={exp.company} delay={idx * 120}>
                <div className={`exp-timeline-item ${exp.isCurrent ? "item-current" : ""}`}>
                  <div className="exp-timeline-node" aria-hidden="true">
                    <span className="node-glow-ring"></span>
                    <span className="node-center-dot"></span>
                  </div>

                  <div className={`exp-card ${exp.isCurrent ? "exp-card-current" : ""}`}>
                    <div className="exp-card-header">
                      <h3 className="exp-role-title">{exp.role}</h3>
                      <div className="exp-date-pill">
                        <Calendar size={13} className="text-accent" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

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

                    <div className="exp-card-divider"></div>

                    <p className="exp-description">{exp.description}</p>

                    <ul className="exp-highlights-list">
                      {exp.highlights.map((item, i) => (
                        <li key={i}>
                          <Check size={14} className="text-accent exp-check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

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
