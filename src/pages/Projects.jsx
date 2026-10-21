import { useState, useEffect } from "react";
import {
  Megaphone, Clapperboard, Share2,
  Check, Target, BarChart3, LineChart,
  Layers, Sparkles, FileText, ShieldCheck,
  Users, Wrench, ArrowRight, X, CheckCircle2, TrendingUp,
  Building2
} from "lucide-react";
import "./Projects.css";
import Reveal from "../components/Reveal";

const projects = [
  {
    id: "art-b-meta-ads",
    title: "Art.b — Meta Ads Campaign",
    category: "Meta Ads",
    categoryLabel: "META ADS & PERFORMANCE MARKETING",
    headline: "Driving Purchases for an Art & Painting Brand",
    client: "Art.b",
    objective: "Sales (Direct Purchases)",
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
    tags: ["Meta Ads (FB/IG)", "Objective: Sales", "E-Commerce Purchases", "Creative Optimization", "Audience Targeting", "ROAS Scaling"],
    tools: ["Meta Ads Manager", "Meta Business Suite", "Meta Pixel & Events", "Canva"],
    caseStudy: {
      client: "Art.b",
      category: "META ADS & PERFORMANCE MARKETING",
      headline: "Driving Purchases for an Art & Painting Brand",
      objective: "Sales (Direct Purchases)",
      stats: [
        { label: "ROAS Scaled", value: "3.8x" },
        { label: "Cost Per Purchase", value: "-42%" },
        { label: "Direct Purchases", value: "+65%" },
        { label: "Targeted Reach", value: "180K+" }
      ],
      overview: "Art.b is an art and painting brand that wanted to increase product sales through paid advertising. I set up and managed Meta Ads campaigns focused on reaching relevant audiences, showcasing the brand's artwork, and driving purchase conversions.",
      challenge: "Art & painting e-commerce requires emotional connection and buyer trust. Cold audiences often hesitate to purchase original artwork online without experiencing the textures, sizing, and premium framing in real life.",
      solution: "Engineered a full-funnel Meta Ads conversion architecture specifically configured for the Sales objective: deployed high-retention video creatives showing live canvas details and artist brushwork to cold audiences, followed by aggressive retargeting with social proof and limited-edition urgency.",
      keyServices: [
        { title: "Meta Ads Campaign Setup", desc: "Structured full-funnel Facebook and Instagram campaigns with strategic separation between cold prospect acquisition and high-intent retargeting funnels focused entirely on driving direct sales." },
        { title: "Audience Targeting", desc: "Engineered detailed interest clusters (contemporary art lovers, interior design enthusiasts, premium home decor) combined with lookalike audiences derived from past purchasers." },
        { title: "Ad Creative & Campaign Optimization", desc: "Designed and tested high-converting UGC videos, canvas zoom-in carousels, and aesthetic lifestyle image ads with continuous hook testing." },
        { title: "Purchase-Focused Advertising", desc: "Configured Meta Pixel and optimized specifically for Purchase conversion events, lowering CPP (Cost Per Purchase) while scaling profitable ad spend." }
      ]
    }
  },
  {
    id: "fr-software-meta-ads",
    title: "FR Software Solutions — Meta Ads Campaign",
    category: "Meta Ads",
    categoryLabel: "META ADS & LEAD GENERATION",
    headline: "Generating Leads for POS & Inventory Management Software",
    client: "FR Software Solutions",
    objective: "B2B Lead Generation",
    icon: <Target size={24} className="text-accent" />,
    role: "Meta Ads Specialist & Lead Strategist",
    description: "FR Software Solutions needed potential clients for its POS and Inventory Management Software. I set up and managed Meta Ads lead generation campaigns to reach relevant businesses, generate qualified leads, and help convert prospects into clients.",
    servicesLabel: "Key Services",
    deliverables: [
      "Meta Ads Campaign Setup",
      "Lead Generation Strategy",
      "Audience Targeting",
      "Campaign Monitoring & Optimization",
      "Business Lead Acquisition"
    ],
    buttonText: "View Case Study",
    tags: ["Meta Ads (FB/IG)", "Objective: Lead Gen", "B2B Lead Generation", "POS & Inventory Software", "Instant Forms", "Cost Per Lead (CPL)"],
    tools: ["Meta Ads Manager", "Meta Instant Forms", "CRM Integration", "Canva", "Meta Pixel"],
    caseStudy: {
      client: "FR Software Solutions",
      category: "META ADS & LEAD GENERATION",
      headline: "Generating Leads for POS & Inventory Management Software",
      objective: "B2B Lead Generation",
      stats: [
        { label: "Qualified Leads", value: "320+" },
        { label: "Cost Per Lead", value: "-35%" },
        { label: "Form Completion", value: "28%" },
        { label: "Lead Conversion", value: "18%+" }
      ],
      overview: "FR Software Solutions needed potential clients for its POS and Inventory Management Software. I set up and managed Meta Ads lead generation campaigns to reach relevant businesses, generate qualified leads, and help convert prospects into clients.",
      challenge: "Selling enterprise POS and Inventory Management software requires reaching verified decision-makers—retail shop owners, supermarket operators, and pharmacy managers—without burning ad spend on irrelevant non-business consumers.",
      solution: "Implemented high-converting Meta Instant Forms with qualifying multi-choice questions to filter high-intent prospects, laser-focused demographic & business interest targeting, and real-time CRM lead routing for instant sales team follow-up.",
      keyServices: [
        { title: "Meta Ads Campaign Setup", desc: "Constructed structured lead generation campaigns across Facebook & Instagram with customized Instant Forms for frictionless mobile submissions." },
        { title: "Lead Generation Strategy", desc: "Designed pre-qualifying questionnaire flows (business category, store branches, current software) to ensure only warm, viable leads were submitted." },
        { title: "Audience Targeting", desc: "Targeted retail shop owners, wholesale distributors, pharmacy managers, and ERP software searchers using refined B2B interest clusters." },
        { title: "Campaign Monitoring & Optimization", desc: "Continuous daily optimization of Cost Per Lead (CPL), form completion rates, CTR, and creative variants to maximize budget efficiency." },
        { title: "Business Lead Acquisition", desc: "Organized automated lead handoffs and follow-up pipelines enabling the FR Software sales team to quickly convert prospects into paying clients." }
      ]
    }
  },
  {
    id: "fr-software-social-media",
    title: "FR Software Solutions — Social Media Management",
    category: "Social Media",
    categoryLabel: "SOCIAL MEDIA MANAGEMENT & CONTENT STRATEGY",
    headline: "Building a Consistent Brand Presence Across Social Media",
    client: "FR Software Solutions",
    objective: "Brand Presence & B2B Growth",
    icon: <Share2 size={24} className="text-accent" />,
    role: "Social Media Manager & Content Strategist",
    description: "FR Software Solutions needed a consistent social media presence to showcase its software solutions and connect with potential customers. I managed its Facebook, Instagram, and LinkedIn platforms, developing content strategies, planning content calendars, and designing engaging posts to strengthen the brand's online presence.",
    servicesLabel: "Key Services",
    deliverables: [
      "Social Media Management",
      "Organic Content Strategy",
      "Content Calendar Planning",
      "Social Media Post Design",
      "Multi-Platform Content Management"
    ],
    buttonText: "View Case Study",
    tags: ["Social Media Management", "Content Strategy", "Post Design", "B2B Tech Brand", "LinkedIn, FB & IG", "Organic Growth"],
    tools: ["Meta Business Suite", "LinkedIn Page Manager", "Canva", "Buffer", "Photoshop"],
    caseStudy: {
      client: "FR Software Solutions",
      category: "SOCIAL MEDIA MANAGEMENT & CONTENT STRATEGY",
      headline: "Building a Consistent Brand Presence Across Social Media",
      objective: "Brand Presence & B2B Growth",
      stats: [
        { label: "Organic Reach", value: "+240%" },
        { label: "B2B Platforms", value: "3" },
        { label: "Monthly Creatives", value: "24+" },
        { label: "Profile Visits", value: "3.5x" }
      ],
      overview: "FR Software Solutions needed a consistent social media presence to showcase its software solutions and connect with potential customers. I managed its Facebook, Instagram, and LinkedIn platforms, developing content strategies, planning content calendars, and designing engaging posts to strengthen the brand's online presence.",
      challenge: "B2B software solutions often struggle on social media due to overly technical jargon and dry content that fails to connect with real decision-makers and retail business owners.",
      solution: "Transformed technical product features into benefit-driven carousel infographics, relatable business pain-point reels, client testimonial spotlights, and structured publishing schedules across LinkedIn, Facebook, and Instagram.",
      keyServices: [
        { title: "Social Media Management", desc: "Day-to-day administrative management, scheduling, and consistent publishing across Facebook, Instagram, and LinkedIn." },
        { title: "Organic Content Strategy", desc: "Crafting informative, value-first content frameworks that establish FR Software Solutions as an authoritative tech leader." },
        { title: "Content Calendar Planning", desc: "Developing comprehensive monthly editorial calendars aligning with software feature launches and industry trends." },
        { title: "Social Media Post Design", desc: "Designing sleek, branded graphics, typography-driven carousels, and visual assets following corporate brand guidelines." },
        { title: "Multi-Platform Content Management", desc: "Adapting content tone for B2B professionals on LinkedIn while keeping Instagram and Facebook visually engaging and human." }
      ]
    }
  },
  {
    id: "saadgi-wear-social-media",
    title: "Saadgi Wear — Social Media Management",
    category: "Social Media",
    categoryLabel: "SOCIAL MEDIA MANAGEMENT & ORGANIC MARKETING",
    headline: "Driving Organic Orders for an E-commerce Hijab Brand",
    client: "Saadgi Wear",
    objective: "Organic Order Generation",
    icon: <Share2 size={24} className="text-accent" />,
    role: "Social Media Manager & Organic Growth Specialist",
    description: "Saadgi Wear is an e-commerce brand specializing in hijabs for women. I managed its organic social media marketing across Instagram, Facebook, YouTube, and TikTok, creating and managing content to showcase its products, engage potential customers, and drive orders through organic marketing efforts.",
    servicesLabel: "Key Services",
    deliverables: [
      "Social Media Management",
      "Organic Marketing Strategy",
      "Multi-Platform Content Management",
      "Product-Focused Content Planning",
      "Organic Order Generation"
    ],
    buttonText: "View Case Study",
    tags: ["Organic Orders", "E-Commerce Hijab Brand", "Instagram & TikTok", "Product Showcases", "Organic Marketing", "Viral Growth"],
    tools: ["Instagram", "TikTok Studio", "YouTube Studio", "Meta Business Suite", "CapCut", "Canva"],
    caseStudy: {
      client: "Saadgi Wear",
      category: "SOCIAL MEDIA MANAGEMENT & ORGANIC MARKETING",
      headline: "Driving Organic Orders for an E-commerce Hijab Brand",
      objective: "Organic Order Generation",
      stats: [
        { label: "Organic Reach", value: "+380%" },
        { label: "Active Channels", value: "4" },
        { label: "Monthly Creatives", value: "35+" },
        { label: "Organic Orders", value: "+52%" }
      ],
      overview: "Saadgi Wear is an e-commerce brand specializing in hijabs for women. I managed its organic social media marketing across Instagram, Facebook, YouTube, and TikTok, creating and managing content to showcase its products, engage potential customers, and drive orders through organic marketing efforts.",
      challenge: "In the highly competitive modest fashion and hijab niche, standing out without relying purely on ad spend required authentic storytelling, aesthetic product showcases, and rapid viral distribution.",
      solution: "Executed an organic-first content engine: aesthetic fabric styling reels, hijab drape tutorials, day-in-the-life product videos, interactive Instagram stories, and customer community engagement that drove consistent DMs and direct store orders.",
      keyServices: [
        { title: "Social Media Management", desc: "End-to-end multi-platform channel management across Instagram, TikTok, YouTube Shorts, and Facebook." },
        { title: "Organic Marketing Strategy", desc: "Trend-jacking, aesthetic moodboards, and hashtag curation designed to maximize organic discovery in the modest wear niche." },
        { title: "Multi-Platform Content Management", desc: "Synchronizing daily content across Instagram Reels, TikTok videos, and YouTube Shorts for unified brand reach." },
        { title: "Product-Focused Content Planning", desc: "Highlighting premium fabric textures, color variety, and styling guides that answer customer questions before they buy." },
        { title: "Organic Order Generation", desc: "Setting up frictionless DM-to-order pathways and bio link optimizations that converted organic video views into paying customers." }
      ]
    }
  },
  {
    id: "video-editing-production",
    title: "High-Retention Short-Form Reels & YouTube Video Editing",
    category: "Video Editing",
    categoryLabel: "VIDEO PRODUCTION & EDITING",
    headline: "Engaging Visual Hooks & Kinetic Pacing for Maximum Retention",
    client: "Saadgi & YouTube Creators",
    objective: "Audience Retention & Engagement",
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
      client: "Saadgi & YouTube Creators",
      category: "VIDEO PRODUCTION & EDITING",
      headline: "Engaging Visual Hooks & Kinetic Pacing for Maximum Retention",
      objective: "Audience Retention & Engagement",
      stats: [
        { label: "Avg. Watch Time", value: "85%+" },
        { label: "Videos Edited", value: "60+" },
        { label: "3-Sec Retention", value: "+45%" },
        { label: "Engagement Lift", value: "3.2x" }
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
  }
];

const categories = [
  { key: "All", label: "All Projects" },
  { key: "Meta Ads", label: "Meta Ads & Performance" },
  { key: "Social Media", label: "Social Media Management" },
  { key: "Video Editing", label: "Video Production" },
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
                  <div className="project-badges-row">
                    <div className="project-category-badge">{proj.categoryLabel}</div>
                    {proj.objective && (
                      <div className="project-objective-badge">
                        <Target size={11} />
                        <span>{proj.objective}</span>
                      </div>
                    )}
                  </div>
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
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="case-study-header">
              <div className="case-study-badges-row">
                <span className="case-study-cat-pill">
                  {selectedCaseStudy.caseStudy.category || selectedCaseStudy.categoryLabel}
                </span>
                {selectedCaseStudy.objective && (
                  <span className="case-study-obj-pill">
                    <Target size={12} className="pill-icon" />
                    <span>Objective: <strong>{selectedCaseStudy.objective}</strong></span>
                  </span>
                )}
                <span className="case-study-client-pill">
                  <Building2 size={12} className="pill-icon" />
                  <span>{selectedCaseStudy.client}</span>
                </span>
              </div>
              <h2 className="case-study-title">{selectedCaseStudy.title}</h2>
              <p className="case-study-headline">{selectedCaseStudy.caseStudy.headline}</p>
            </div>

            {/* Performance KPI Stats Grid */}
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
                        <CheckCircle2 size={15} className="text-accent" />
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
