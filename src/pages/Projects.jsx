import { useState } from "react";
import {
  Megaphone, Search, PenTool, Clapperboard, Palette, Share2,
  Check, Target, BarChart3, LineChart,
  Layers, Sparkles, FileText, ShieldCheck,
  Users, Wrench
} from "lucide-react";
import "./Projects.css";
import Reveal from "../components/Reveal";

const projects = [
  {
    id: "social-media-management",
    title: "Multi-Brand Social Media Management & Growth Strategy",
    category: "Social Media",
    categoryLabel: "Social Media Management",
    client: "FR Software Solution & Saadgi (E-Commerce Brand)",
    icon: <Share2 size={24} className="text-accent" />,
    role: "Social Media Manager & Content Strategist",
    description: "Managing full-funnel multi-platform social media operations for FR Software Solution (Facebook, Instagram, LinkedIn) and Saadgi, an e-commerce brand (TikTok, YouTube, Instagram, Pinterest, Facebook). Developing monthly content calendars, executing high-converting content strategies, designing branded social posts, and conducting deep performance analytics.",
    deliverables: [
      "Strategic content calendar planning & multi-channel content strategy",
      "Active management across TikTok, YouTube, Instagram, Facebook, LinkedIn & Pinterest",
      "High-engagement social media post design & brand identity curation",
      "Community management, DM/comment interaction, and reach & engagement analysis"
    ],
    tags: ["Content Calendar", "Content Strategy", "Post Design", "FR Software & Saadgi", "Multi-Platform Growth"],
    tools: ["Meta Business Suite", "Canva", "TikTok", "Pinterest", "YouTube Studio", "LinkedIn"],
  },
  {
    id: "video-editing-production",
    title: "High-Retention Short-Form Reels & YouTube Video Editing",
    category: "Video Editing",
    categoryLabel: "Video Production & Editing",
    client: "Saadgi (E-Commerce), FR Software Solution & YouTube",
    icon: <Clapperboard size={24} className="text-accent" />,
    role: "Video Editor & Motion Designer",
    description: "Producing and editing scroll-stopping video content for Saadgi e-commerce brand, FR Software Solution corporate channels, and YouTube creators. Crafting dynamic short-form Reels and TikToks along with engaging long-form and short-form YouTube videos featuring smooth pacing, kinetic subtitles, and immersive sound design.",
    deliverables: [
      "High-converting product showcase Reels & TikToks for Saadgi e-commerce brand",
      "Professional promotional and corporate video editing for FR Software Solution",
      "Long-form & short-form YouTube video editing with retention-driven hooks and pacing",
      "Kinetic typography, animated captions, visual effects, and dynamic sound design"
    ],
    tags: ["Reels & TikToks", "E-Commerce Video", "YouTube Long & Short", "Premiere Pro", "After Effects"],
    tools: ["Adobe Premiere Pro", "Adobe After Effects", "CapCut"],
  },
  {
    id: "meta-ads-ecommerce",
    title: "Art Painting E-Commerce & UGC Meta Ads Campaigns",
    category: "Meta Ads",
    categoryLabel: "Paid Advertising & Meta Ads",
    client: "Art Painting E-Commerce Store / FR Software Solution",
    icon: <Megaphone size={24} className="text-accent" />,
    role: "Meta Ads Specialist & Media Buyer",
    description: "Planned, launched, and optimized high-converting Facebook and Instagram ad campaigns to drive direct sales for art paintings. Produced high-retention UGC (User-Generated Content) video and image ad creatives, structured precision audience targeting, and continuously improved CPM, CPC, CTR, Frequency, and ROAS to deliver proven sales volume.",
    deliverables: [
      "Targeted Meta Ads campaign setup (Facebook & Instagram) specifically driving art painting sales",
      "High-converting UGC (User-Generated Content) video & image ad creative creation",
      "Precision demographic targeting, lookalike audiences, and retargeting funnels",
      "Real-time analytics optimization for CPM, CPC, CTR, Frequency, and ROAS reporting"
    ],
    tags: ["Meta Ads (FB/IG)", "Art Painting Sales", "UGC Ads Creation", "ROAS Optimization", "Conversion Tracking"],
    tools: ["Meta Ads Manager", "Meta Business Suite", "Meta Pixel & Events", "Canva"],
  },
];

const categories = [
  { key: "All", label: "All Projects" },
  { key: "Social Media", label: "Social Media" },
  { key: "Video Editing", label: "Video Editing" },
  { key: "Meta Ads", label: "Meta Ads" },
];

const metaAdsFramework = [
  { icon: <Target size={18} />, title: "Objective Selection", desc: "Choosing precise conversion goals aligned with bottom-line business outcomes." },
  { icon: <Users size={18} />, title: "Audience Segmentation", desc: "Finding high-intent prospects via demographics, behaviors, and custom audiences." },
  { icon: <Sparkles size={18} />, title: "Ad Creative Strategy", desc: "Visual hooks and dynamic creatives built specifically to stop scroll fatigue." },
  { icon: <FileText size={18} />, title: "Direct Response Copy", desc: "Persuasive headlines, benefits-focused copy, and friction-free CTAs." },
  { icon: <Layers size={18} />, title: "Campaign Architecture", desc: "Clean, scaleable campaign structure with organized ad sets and naming." },
  { icon: <LineChart size={18} />, title: "Performance Monitoring", desc: "Continuous tracking of live metric fluctuations and ad delivery health." },
  { icon: <BarChart3 size={18} />, title: "ROAS Optimization", desc: "Reallocating budgets to winning ad variants and pruning underperforming sets." },
  { icon: <ShieldCheck size={18} />, title: "Efficiency Analysis", desc: "Systematic analysis of CPM, CPC, CTR, Frequency, and Customer Acquisition Cost." },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal>
          <div className="page-hero">
            <span className="section-tag">PORTFOLIO & DELIVERABLES</span>
            <h2 className="page-title">Featured Projects & Case Studies</h2>
            <p className="text-muted">
              A detailed look at real-world multi-platform social media growth, high-retention video editing, and conversion-focused Meta Ads campaigns I manage and deliver.
            </p>
          </div>
        </Reveal>

        {/* Category Filter Pills */}
        <Reveal>
          <div className="projects-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`filter-btn ${activeCategory === cat.key ? "filter-btn-active" : ""}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj, idx) => (
            <Reveal key={proj.id} delay={idx * 80}>
              <div className="project-card">
                <div className="project-card-top">
                  <div className="project-category-badge">{proj.categoryLabel}</div>
                  <div className="project-icon-box">{proj.icon}</div>
                </div>

                <div className="project-client-name">{proj.client}</div>
                <h3 className="project-title">{proj.title}</h3>
                <div className="project-role">{proj.role}</div>

                <p className="project-desc">{proj.description}</p>

                <div className="project-deliverables">
                  <div className="project-deliverables-title">Key Deliverables:</div>
                  <ul>
                    {proj.deliverables.map((d, i) => (
                      <li key={i}>
                        <Check size={14} className="text-accent" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-tags">
                  {proj.tags.map((t) => (
                    <span key={t} className="project-tag-chip">{t}</span>
                  ))}
                </div>

                <div className="project-tools">
                  <span className="project-tools-label"><Wrench size={13} /> Tools:</span>
                  {proj.tools.map((tl) => (
                    <span key={tl} className="project-tool-badge">{tl}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Meta Ads Strategy Blueprint */}
        <Reveal>
          <div className="meta-blueprint-card">
            <div className="meta-blueprint-header">
              <div className="meta-blueprint-icon">
                <Target size={28} />
              </div>
              <div>
                <span className="section-tag">METHODOLOGY</span>
                <h3 className="meta-blueprint-title">My Meta Ads Execution Framework</h3>
                <p className="text-muted">
                  How I systematically turn ad spend into profitable conversions and measurable business returns.
                </p>
              </div>
            </div>

            <div className="meta-framework-grid">
              {metaAdsFramework.map((step, i) => (
                <div key={i} className="meta-step-card">
                  <div className="meta-step-num">0{i + 1}</div>
                  <div className="meta-step-icon">{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
