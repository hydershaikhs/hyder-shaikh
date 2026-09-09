import { Check, Briefcase, Calendar } from "lucide-react";
import "./Experience.css";
import Reveal from "../components/Reveal";

const experiences = [
  {
    role: "Digital Marketer",
    company: "FR Software Solution",
    period: "September 2026 – Present",
    type: "Current Role",
    highlight: true,
    description: "Planning, launching, and managing end-to-end Meta Ads campaigns (Facebook & Instagram) and SEO visibility strategies to achieve measurable client and organizational growth.",
    achievements: [
      "Plan, launch, and manage conversion-focused Meta Ads campaigns covering audience targeting, budget setting, and creative production",
      "Analyze key Meta Ads metrics (CPM, CPC, CTR, ROAS, frequency) to continuously optimize campaigns and maximize ad spend efficiency",
      "Apply structured SEO principles to improve website content visibility and organic search rankings across platforms",
      "Write persuasive ad copy, hooks, social captions, and marketing collateral engineered for high CTR",
      "Create high-retention short-form and long-form video content (Reels, TikTok, promo videos) tailored for modern social feeds",
      "Design brand-aligned social media post creatives that build brand authority and trust",
      "Execute proactive social media management and community engagement, responding to DMs and comments in brand voice",
      "Deliver regular performance reports with clear, actionable insights on campaign ROAS and growth trajectory"
    ]
  },
  {
    role: "Digital Marketing Intern",
    company: "Israin Solutions",
    period: "July 2026 – August 2026",
    type: "Internship",
    highlight: false,
    description: "Assisted in managing paid advertising funnels on Facebook & Instagram, executing organic SEO improvements, and producing brand-aligned marketing creatives.",
    achievements: [
      "Assisted in structuring and managing Meta Ads campaigns for multiple client accounts, covering audience segmentation and budget tracking",
      "Conducted on-page and keyword SEO audits to improve client web property search rankings",
      "Wrote engaging ad copy, captions, and creative headlines for social media and marketing campaigns",
      "Created custom social media post designs and short-form video content aligned with client brand guidelines",
      "Supported active community management across client pages, handling inquiries and boosting audience loyalty",
      "Collaborated with clients to translate concrete business goals into high-impact digital marketing actions"
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
              Professional digital marketing background with proven results in conversion Meta Ads, search engine optimization, and creative content.
            </p>
          </div>
        </Reveal>

        {/* Work Timeline / Highlights */}
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
      </div>
    </section>
  );
};

export default Experience;
