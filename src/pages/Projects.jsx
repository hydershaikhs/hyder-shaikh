import { useState, useEffect } from "react";
import {
  Megaphone, Clapperboard, Share2,
  Check, Target, BarChart3, LineChart,
  Layers, Sparkles, FileText, ShieldCheck,
  Users, Wrench, ArrowRight, X, CheckCircle2, TrendingUp
} from "lucide-react";
import "./Projects.css";
import Reveal from "../components/Reveal";

const projects = [
  {
    id: "social-media-management",
    title: "Multi-Brand Social Media Management & Growth Strategy",
    category: "Social Media",
    categoryLabel: "Social Media Management",
    headline: "Multi-Platform Growth, Content Strategy & Brand Presence",
    client: "FR Software Solution & Saadgi (E-Commerce Brand)",
    icon: <Share2 size={24} className="text-accent" />,
    role: "Social Media Manager & Content Strategist",
    description: "Managing full-funnel multi-platform social media operations for FR Software Solution (Facebook, Instagram, LinkedIn) and Saadgi, an e-commerce brand (TikTok, YouTube, Instagram, Pinterest, Facebook). Developing monthly content calendars, executing high-converting content strategies, designing branded social posts, and conducting deep performance analytics.",
    servicesLabel: "Key Services",
    deliverables: [
      "Strategic content calendar planning & multi-channel content strategy",
      "Active management across TikTok, YouTube, Instagram, Facebook, LinkedIn & Pinterest",
      "High-engagement social media post design & brand identity curation",
      "Community management, DM/comment interaction, and reach & engagement analysis"
    ],
    buttonText: "View Case Study",
    tags: ["Content Calendar", "Content Strategy", "Post Design", "FR Software & Saadgi", "Multi-Platform Growth"],
    tools: ["Meta Business Suite", "Canva", "TikTok", "Pinterest", "YouTube Studio", "LinkedIn"],
    caseStudy: {
      client: "FR Software Solution & Saadgi",
      category: "SOCIAL MEDIA MANAGEMENT",
      headline: "Multi-Platform Growth, Content Strategy & Brand Presence",
      stats: [
        { label: "Organic Reach", value: "+300%" },
        { label: "Platforms Managed", value: "6 Channels" },
        { label: "Monthly Creatives", value: "45+ Posts" },
        { label: "Engagement Boost", value: "4.2x" }
      ],
      overview: "Comprehensive social media brand growth management for both B2B tech (FR Software Solution) and direct-to-consumer e-commerce (Saadgi), ensuring cohesive brand identity and organic growth.",
      challenge: "Saadgi and FR Software Solution required distinct brand voices across diverse channels—from high-energy TikTok and Instagram reels to corporate LinkedIn articles.",
      solution: "Engineered platform-native content calendars, responsive community management, branded aesthetic design templates, and viral hook formulas tailored for each demographic.",
      keyServices: [
        { title: "Strategic Content Calendars", desc: "Monthly planned content schedules tailored specifically for TikTok, Instagram, YouTube, Facebook, Pinterest, and LinkedIn." },
        { title: "Branded Social Media Design", desc: "Eye-catching post creatives, carousels, and stories matching exact brand style guides." },
        { title: "Community & DM Management", desc: "Direct customer interaction, comment moderation, and active community building to convert followers into brand advocates." },
        { title: "Performance Audits & Growth Tracking", desc: "Detailed monthly analytics on reach, impression share, engagement rates, and follower growth trends." }
      ]
    }
  },
  {
    id: "video-editing-production",
    title: "High-Retention Short-Form Reels & YouTube Video Editing",
    category: "Video Editing",
    categoryLabel: "Video Production & Editing",
    headline: "Engaging Visual Hooks & Kinetic Pacing for Maximum Retention",
    client: "Saadgi (E-Commerce), FR Software Solution & YouTube",
    icon: <Clapperboard size={24} className="text-accent" />,
    role: "Video Editor & Motion Designer",
    description: "Producing and editing scroll-stopping video content for Saadgi e-commerce brand, FR Software Solution corporate channels, and YouTube creators. Crafting dynamic short-form Reels and TikToks along with engaging long-form and short-form YouTube videos featuring smooth pacing, kinetic subtitles, and immersive sound design.",
    servicesLabel: "Key Services",
    deliverables: [
      "High-converting product showcase Reels & TikToks for Saadgi e-commerce brand",
      "Professional promotional and corporate video editing for FR Software Solution",
      "Long-form & short-form YouTube video editing with retention-driven hooks and pacing",
      "Kinetic typography, animated captions, visual effects, and dynamic sound design"
    ],
    buttonText: "View Case Study",
    tags: ["Reels & TikToks", "E-Commerce Video", "YouTube Long & Short", "Premiere Pro", "After Effects"],
    tools: ["Adobe Premiere Pro", "Adobe After Effects", "CapCut"],
    caseStudy: {
      client: "Saadgi & FR Software Solution",
      category: "VIDEO PRODUCTION & EDITING",
      headline: "Engaging Visual Hooks & Kinetic Pacing for Maximum Retention",
      stats: [
        { label: "Avg. Watch Duration", value: "85%+" },
        { label: "Videos Edited", value: "60+ Reels" },
        { label: "First 3s Retention", value: "+45%" },
        { label: "Production Suite", value: "Premiere / AE" }
      ],
      overview: "Crafting modern short-form and long-form video edits designed to stop scrolling in the first 3 seconds and keep viewers engaged through kinetic pacing and immersive soundscapes.",
      challenge: "Social media attention spans are under 3 seconds. The goal was to hook viewers instantly and maximize retention rates to trigger social algorithm distribution.",
      solution: "Implemented dynamic visual pattern interrupts, synchronized sound design (SFX), bold kinetic subtitles, and rapid narrative pacing.",
      keyServices: [
        { title: "E-Commerce Showcase Reels & TikToks", desc: "High-energy short-form videos highlighting product features, aesthetic fabric flows, and model fittings." },
        { title: "Corporate Promo & Tech Videos", desc: "Clean, professional corporate promotional video edits for FR Software Solution's tech products." },
        { title: "Retention-Driven YouTube Editing", desc: "Long-form editing with chapter transitions, graphic overlays, and narrative retention hooks." },
        { title: "Kinetic Typography & Sound Design", desc: "Custom animated subtitle styling and layered audio effects to elevate production quality." }
      ]
    }
  },
  {
    id: "art-b-meta-ads",
    title: "Art.b — Meta Ads Campaign",
    category: "Meta Ads",
    categoryLabel: "META ADS & PERFORMANCE MARKETING",
    headline: "Driving Purchases for an Art & Painting Brand",
    client: "Art.b",
    icon: <Megaphone size={24} className="text-accent" />,
    role: "Meta Ads Specialist & Media Buyer",
    description: "Art.b is an art and painting brand that wanted to increase product sales through paid advertising. I set up and managed Meta Ads campaigns focused on reaching relevant audiences, showcasing the brand's artwork, and driving purchase conversions.",
    servicesLabel: "Key Services",
    deliverables: [
      "Meta Ads Campaign Setup",
      "Audience Targeting",
      "Ad Creative & Campaign Optimization",
      "Purchase-Focused Advertising"
    ],
    buttonText: "View Case Study",
    tags: ["Meta Ads (FB/IG)", "E-Commerce Purchases", "Creative Optimization", "Audience Targeting", "ROAS Scaling"],
    tools: ["Meta Ads Manager", "Meta Business Suite", "Meta Pixel & Events", "Canva"],
    caseStudy: {
      client: "Art.b",
      category: "META ADS & PERFORMANCE MARKETING",
      headline: "Driving Purchases for an Art & Painting Brand",
      stats: [
        { label: "ROAS Achieved", value: "3.8x" },
        { label: "Cost Per Purchase", value: "-42%" },
        { label: "Sales Conversions", value: "+65%" },
        { label: "Targeted Reach", value: "180K+" }
      ],
      overview: "Art.b is an art and painting brand that wanted to increase product sales through paid advertising. I set up and managed Meta Ads campaigns focused on reaching relevant audiences, showcasing the brand's artwork, and driving purchase conversions.",
      challenge: "Art & painting e-commerce requires emotional connection and buyer trust. Cold audiences often hesitate to purchase original artwork online without experiencing the textures, sizing, and premium framing in real life.",
      solution: "Engineered a full-funnel Meta Ads conversion architecture: deployed high-retention video creatives showing live canvas details and artist brushwork to cold audiences, followed by aggressive retargeting with social proof and limited-edition urgency.",
      keyServices: [
        { title: "Meta Ads Campaign Setup", desc: "Structured full-funnel Facebook and Instagram campaigns with strategic separation between cold prospect acquisition and high-intent retargeting funnels." },
        { title: "Audience Targeting", desc: "Engineered detailed interest clusters (contemporary art lovers, interior design enthusiasts, premium home decor) combined with lookalike audiences derived from past purchasers." },
        { title: "Ad Creative & Campaign Optimization", desc: "Designed and tested high-converting UGC videos, canvas zoom-in carousels, and aesthetic lifestyle image ads with continuous hook testing." },
        { title: "Purchase-Focused Advertising", desc: "Configured Meta Pixel and optimized specifically for Purchase events, lowering CPP (Cost Per Purchase) while scaling profitable ad spend." }
      ]
    }
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
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCaseStudy(null);
    };

    if (selectedCaseStudy) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCaseStudy]);

  const scrollToContact = () => {
    setSelectedCaseStudy(null);
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                <div className="project-headline">{proj.headline || proj.role}</div>

                <p className="project-desc">{proj.description}</p>

                <div className="project-deliverables">
                  <div className="project-deliverables-title">{proj.servicesLabel || "Key Services"}:</div>
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

                {/* View Case Study Button */}
                <div className="project-card-footer">
                  <button
                    type="button"
                    className="btn-case-study"
                    onClick={() => setSelectedCaseStudy(proj)}
                  >
                    <span>{proj.buttonText || "View Case Study"}</span>
                    <ArrowRight size={16} />
                  </button>
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

      {/* ============ CASE STUDY MODAL ============ */}
      {selectedCaseStudy && selectedCaseStudy.caseStudy && (
        <div 
          className="case-study-backdrop" 
          onClick={() => setSelectedCaseStudy(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="case-study-modal" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="case-study-close"
              onClick={() => setSelectedCaseStudy(null)}
              aria-label="Close Case Study"
            >
              <X size={20} />
            </button>

            <div className="case-study-header">
              <span className="project-category-badge">
                {selectedCaseStudy.caseStudy.category || selectedCaseStudy.categoryLabel}
              </span>
              <h2 className="case-study-title">{selectedCaseStudy.title}</h2>
              <p className="case-study-headline">{selectedCaseStudy.caseStudy.headline}</p>
            </div>

            {/* Performance Stats */}
            {selectedCaseStudy.caseStudy.stats && (
              <div className="case-study-stats-grid">
                {selectedCaseStudy.caseStudy.stats.map((s, idx) => (
                  <div key={idx} className="case-study-stat-card">
                    <div className="stat-card-value">{s.value}</div>
                    <div className="stat-card-label">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Overview & Challenge */}
            <div className="case-study-body">
              <div className="case-study-block">
                <h4 className="case-study-section-title">
                  <FileText size={16} className="text-accent" /> Project Overview
                </h4>
                <p className="case-study-text">{selectedCaseStudy.caseStudy.overview}</p>
              </div>

              <div className="case-study-block">
                <h4 className="case-study-section-title">
                  <Target size={16} className="text-accent" /> The Challenge
                </h4>
                <p className="case-study-text">{selectedCaseStudy.caseStudy.challenge}</p>
              </div>

              <div className="case-study-block">
                <h4 className="case-study-section-title">
                  <TrendingUp size={16} className="text-accent" /> The Strategy & Solution
                </h4>
                <p className="case-study-text">{selectedCaseStudy.caseStudy.solution}</p>
              </div>

              {/* Key Services Breakdown */}
              <div className="case-study-block">
                <h4 className="case-study-section-title">
                  <ShieldCheck size={16} className="text-accent" /> Key Services Executed
                </h4>
                <div className="case-study-services-grid">
                  {selectedCaseStudy.caseStudy.keyServices.map((ks, i) => (
                    <div key={i} className="case-study-service-item">
                      <div className="service-item-title">
                        <CheckCircle2 size={16} className="text-accent" />
                        <span>{ks.title}</span>
                      </div>
                      <p className="service-item-desc">{ks.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="case-study-footer">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setSelectedCaseStudy(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary-glow"
                onClick={scrollToContact}
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
