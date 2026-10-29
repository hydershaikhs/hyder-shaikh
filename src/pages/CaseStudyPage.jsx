import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft, Target, TrendingUp, ShieldCheck, CheckCircle2,
  Clapperboard, Sparkles, Film, ArrowRight,
  Volume2, BarChart2, Camera, Lightbulb, AlertCircle, Wrench, Layers, X
} from "lucide-react";
import "./CaseStudyPage.css";

const CaseStudyPage = ({ project, onBack, onNavigateContact }) => {
  const pageRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // Compute safe base URL for both Vercel and GitHub Pages
  const rawBase = import.meta.env.BASE_URL || "/";
  const baseUrl = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

  const videoUrls = {
    edited1: `${baseUrl}videos/edited-first.mp4`,
    edited2: `${baseUrl}videos/edited-second.mp4`,
    ai1: `${baseUrl}videos/ai-first.mp4`,
    ai2: `${baseUrl}videos/ai-second.mp4`,
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (project) {
      if (project.id === "art-b-meta-ads") {
        document.title = "art.b Paintings Meta Ads Case Study | Hyder Shaikh";
      } else if (project.id === "fr-pos-leadgen") {
        document.title = "FR Software Solutions POS & Inventory Meta Ads Case Study | Hyder Shaikh";
      } else if (project.id === "ai-videos-ugc-ads") {
        document.title = "AI Videos & UGC Ads Case Study | Hyder Shaikh";
      } else {
        document.title = `${project.title} | Hyder Shaikh Portfolio Case Study`;
      }
    }
    return () => {
      document.title = "Hyder Shaikh | Digital Marketer & Video Editor";
    };
  }, [project]);

  if (!project || !project.caseStudy) {
    return (
      <div className="case-page-container not-found">
        <h2>Case study not found</h2>
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={18} /> Back to Projects
        </button>
      </div>
    );
  }

  const { caseStudy } = project;
  const isVideoProject = project.id === "video-editing-production";
  const isMetaAdsProject = project.category === "Meta Ads";

  const imgBase = baseUrl;

  // Genuine Evidence records mapping with high-res Ads Manager screenshots
  const evidenceMap = {
    "art-b-meta-ads": [
      {
        src: `${imgBase}images/artb/artb-screenshot-4.jpg`,
        filename: "artb-screenshot-4.jpg",
        label: "Ads Manager Delivery & KPI Performance",
        desc: "$4.26 spend · 5,295 impressions · 35 link clicks · $0.12 CPC · 20 messaging conversations"
      },
      {
        src: `${imgBase}images/artb/artb-screenshot-1.jpg`,
        filename: "artb-screenshot-1.jpg",
        label: "Advantage+ Sales Campaign Setup",
        desc: "Campaign objective Sales with recommended 100/100 Meta Ads setup score"
      },
      {
        src: `${imgBase}images/artb/artb-screenshot-2.jpg`,
        filename: "artb-screenshot-2.jpg",
        label: "Detailed Interest & Demographic Targeting",
        desc: "Audience targeting across Pakistan for Interior Design, Painting, Modern Art & Home Furnishings"
      },
      {
        src: `${imgBase}images/artb/artb-screenshot-3.jpg`,
        filename: "artb-screenshot-3.jpg",
        label: "Messaging Destination & Business Assets",
        desc: "Direct message conversion destination connected to ArtsH.B Facebook & Instagram profiles"
      },
    ],
    "fr-pos-leadgen": [
      {
        src: `${imgBase}images/fr/fr-screenshot-4.jpg`,
        filename: "fr-screenshot-4.jpg",
        label: "Ads Manager Performance & Active Urdu Ad",
        desc: "Live campaign delivery showing 5 messaging leads at Rs 57.44 CPL with Rs 300 daily budget"
      },
      {
        src: `${imgBase}images/fr/fr-screenshot-1.jpg`,
        filename: "fr-screenshot-1.jpg",
        label: "FR Lead Generation Campaign Setup",
        desc: "Advantage+ Leads Campaign with CBO budget distribution and 100/100 recommended setup"
      },
      {
        src: `${imgBase}images/fr/fr-screenshot-2.jpg`,
        filename: "fr-screenshot-2.jpg",
        label: "Multi-City Geographic Targeting",
        desc: "Targeted retail hubs across Faisalabad, Hyderabad, Islamabad, and Karachi (+80km)"
      },
      {
        src: `${imgBase}images/fr/fr-screenshot-3.jpg`,
        filename: "fr-screenshot-3.jpg",
        label: "B2B Retail & Wholesale Detailed Targeting",
        desc: "Focused on Small Business Owners, Wholesale Retail & Retail Industry decision-makers"
      },
    ],
    "fr-software-social-media": [
      {
        src: `${imgBase}images/fr-social/fr-social-1.jpg`,
        filename: "fr-social-1.jpg",
        label: "Meta Business Suite Content Calendar",
        desc: "Daily scheduled publishing and multi-format B2B content crossposted across Facebook & Instagram"
      },
      {
        src: `${imgBase}images/fr-social/fr-social-2.jpg`,
        filename: "fr-social-2.jpg",
        label: "Organic Interactions & Watch Time Insights",
        desc: "301 Content interactions (+138.9%), 114 Facebook visits (+67.6%), and 241 3-sec reel views (+731%)"
      },
    ],
    "saadgi-wear-social-media": [
      {
        src: `${imgBase}images/saadgi/saadgi-1.jpg`,
        filename: "saadgi-1.jpg",
        label: "Social Channel Video Analytics",
        desc: "13.1K Views and 3.7K Engaged Views driven across short-form styling videos (7 Sept – 11 Oct 2026)"
      },
      {
        src: `${imgBase}images/saadgi/saadgi-2.jpg`,
        filename: "saadgi-2.jpg",
        label: "Meta Business Suite Reels Publishing",
        desc: "Consistent luxury modest fashion reels published and crossposted across Instagram & Facebook pages"
      },
      {
        src: `${imgBase}images/saadgi/saadgi-3.jpg`,
        filename: "saadgi-3.jpg",
        label: "Organic Engagement & Discovery Insights",
        desc: "237 Content interactions (+330.9%), 208 non-follower discovery (+511.8%), and 454 3-sec views (+42.3%)"
      },
    ],
  };

  const evidenceItems = evidenceMap[project.id] || [];

  const snapshot = caseStudy.snapshot || {
    client: caseStudy.client || project.client,
    role: project.role,
    objective: project.objective,
    period: caseStudy.reportingPeriod || "Documented Period",
    budget: isMetaAdsProject ? "Paid Ad Budget" : "Organic Execution",
    scope: project.category
  };

  // Combine deliverables/contribution to prevent duplication
  const deliverables = caseStudy.contribution || caseStudy.keyServices || [];

  return (
    <div className="case-study-page" ref={pageRef} style={{ paddingTop: 'clamp(110px, 14vh, 140px)' }}>
      <div className="container case-page-content">
        {/* ============ 1. HEADER & HERO ============ */}
        <header className="case-page-hero anim-fade-in">
          <div className="case-page-badges">
            <span className="hero-pill-badge">{project.categoryLabel}</span>
            {project.objective && (
              <span className="hero-pill-badge objective">
                <Target size={12} />
                <span>{project.objective}</span>
              </span>
            )}
          </div>
          <h1 className="case-page-main-title">{project.title}</h1>
          <p className="case-page-main-headline">{caseStudy.headline || project.headline}</p>
        </header>

        {/* ============ 2. COMPACT SNAPSHOT & TOOLS BAR ============ */}
        <section className="cs-compact-snapshot anim-section-pop">
          <div className="cs-snapshot-grid">
            {snapshot.client && (
              <div className="cs-snapshot-item">
                <span className="cs-snapshot-label">Client</span>
                <span className="cs-snapshot-value">{snapshot.client}</span>
              </div>
            )}
            <div className="cs-snapshot-item">
              <span className="cs-snapshot-label">My Role</span>
              <span className="cs-snapshot-value">{snapshot.role}</span>
            </div>
            <div className="cs-snapshot-item">
              <span className="cs-snapshot-label">Objective</span>
              <span className="cs-snapshot-value">{snapshot.objective}</span>
            </div>
            <div className="cs-snapshot-item">
              <span className="cs-snapshot-label">Timeline</span>
              <span className="cs-snapshot-value">{snapshot.period}</span>
            </div>
            <div className="cs-snapshot-item">
              <span className="cs-snapshot-label">Model</span>
              <span className="cs-snapshot-value">{snapshot.budget}</span>
            </div>
            <div className="cs-snapshot-item">
              <span className="cs-snapshot-label">Scope</span>
              <span className="cs-snapshot-value">{snapshot.scope}</span>
            </div>
          </div>

          {/* Integrated Tools Row */}
          {project.tools && (
            <div className="cs-snapshot-tools">
              <span className="cs-tools-tag-lbl">
                <Wrench size={13} /> Tools:
              </span>
              {project.tools.map((t, i) => (
                <span key={i} className="cs-mini-tool-chip">{t}</span>
              ))}
            </div>
          )}
        </section>

        {/* ============ 3. THE CHALLENGE & THE STRATEGY (SIDE-BY-SIDE) ============ */}
        <section className="cs-unified-section anim-details-in">
          <div className="cs-challenge-solution-grid">
            <div className="cs-strategy-block challenge-block">
              <div className="cs-block-badge challenge">THE CHALLENGE</div>
              <h4>Business &amp; Market Obstacle</h4>
              <p>{caseStudy.challenge}</p>
            </div>
            <div className="cs-strategy-block solution-block">
              <div className="cs-block-badge solution">MY STRATEGY</div>
              <h4>Execution &amp; Tactical Approach</h4>
              <p>{caseStudy.solution}</p>
            </div>
          </div>
        </section>

        {/* ============ 4. VIDEO REELS SHOWCASE (IF PROJECT HAS VIDEOS) ============ */}
        {caseStudy.videos && caseStudy.videos.length > 0 && (
          <section className="creative-showcase-section anim-section-pop">
            <div className="showcase-header-ribbon">
              <span className="ribbon-tag">
                <Film size={14} /> LIVE {caseStudy.videos.length}-VIDEO SHOWCASE
              </span>
              <h2 className="showcase-section-title">{caseStudy.videoSectionTitle || "Video Production Showcase"}</h2>
              <p className="showcase-section-subtitle">
                {caseStudy.videoSectionSubtitle || "Explore real video edits and visual creations playing with live transitions and audio design."}
              </p>
            </div>

            <div className={`mobile-story-deck deck-count-${caseStudy.videos.length}`}>
              {caseStudy.videos.map((vid, idx) => (
                <div key={idx} className={`story-frame-card ${vid.type || "premiere"} card-anim-${(idx % 4) + 1}`}>
                  <div className="story-frame-speaker"></div>
                  <div className="story-frame-top-bar">
                    <span className={`story-source-badge ${vid.tag || ""}`}>
                      {vid.type === "ai" ? <Sparkles size={12} /> : vid.type === "ugc" ? <Camera size={12} /> : <Clapperboard size={12} />} {vid.badge}
                    </span>
                    <span className={`story-dot ${vid.type === "ai" ? "live-ai" : vid.type === "ugc" ? "live-ugc" : "live"}`}></span>
                  </div>
                  <div className="story-video-wrapper">
                    <video
                      src={`${baseUrl}${vid.src}`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      preload="auto"
                      className="story-video-player"
                    />
                    <div className="video-hover-hint">
                      <Volume2 size={14} /> Sound
                    </div>
                  </div>
                  <div className={`story-frame-bottom-ribbon ${vid.type === "ai" ? "ai-ribbon" : vid.type === "ugc" ? "ugc-ribbon" : ""}`}>
                    <div className="ribbon-title">{vid.title}</div>
                    <div className="ribbon-desc">{vid.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============ 5. VERIFIED RESULTS & PERFORMANCE DASHBOARD ============ */}
        <section className="cs-unified-section">
          <div className="cs-section-header">
            <h3 className="cs-section-title">
              <BarChart2 size={18} className="text-accent" /> Verified Results &amp; Performance
            </h3>
            <span className="cs-header-tag">Genuine Data</span>
          </div>

          {/* Top 4 KPI Summary Cards */}
          {caseStudy.stats && (
            <div className="cs-stats-row">
              {caseStudy.stats.map((s, idx) => (
                <div key={idx} className="cs-stat-card">
                  <div className="cs-stat-val">{s.value}</div>
                  <div className="cs-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Results Analysis & Trust Disclaimer (Concise) */}
          {caseStudy.interpretation && (
            <div className="cs-interpretation-card">
              <p className="cs-interp-text">{caseStudy.interpretation}</p>
              {isMetaAdsProject && (
                <div className="cs-trust-disclaimer">
                  <AlertCircle size={15} className="text-accent" />
                  <span>
                    <strong>Client Trust Note:</strong> Messaging conversations reported in Ads Manager reflect direct prospective customer inquiries. They are not claimed as completed purchases or revenue unless verified.
                  </span>
                </div>
              )}
            </div>
          )}
        </section>

        {/* ============ 6. CAMPAIGN EVIDENCE & ASSETS (COMPACT ROW) ============ */}
        {!isVideoProject && evidenceItems.length > 0 && (
          <section className="cs-unified-section">
            <div className="cs-section-header">
              <h3 className="cs-section-title">
                <Camera size={18} className="text-accent" /> Campaign Evidence &amp; Designed Assets
              </h3>
              <span className="cs-header-tag">Evidence Records</span>
            </div>

            <div className={`cs-evidence-grid evidence-count-${evidenceItems.length}`}>
              {evidenceItems.map((item, i) => (
                <EvidenceItem key={i} item={item} onSelect={setSelectedImage} />
              ))}
            </div>
          </section>
        )}

        {/* ============ 7. MY KEY DELIVERABLES & EXECUTION ============ */}
        {deliverables.length > 0 && (
          <section className="cs-unified-section">
            <div className="cs-section-header">
              <h3 className="cs-section-title">
                <CheckCircle2 size={18} className="text-accent" /> Key Deliverables &amp; Execution
              </h3>
              <span className="cs-header-tag">Personally Handled</span>
            </div>
            <div className="cs-services-grid">
              {deliverables.map((item, i) => (
                <div key={i} className="cs-service-box">
                  <div className="cs-service-head">
                    <CheckCircle2 size={15} className="text-accent" />
                    <h4>{item.title}</h4>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============ EVIDENCE LIGHTBOX MODAL POPUP ============ */}
        {selectedImage && (
          <div className="cs-modal-backdrop" onClick={() => setSelectedImage(null)}>
            <div className="cs-modal-dialog" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="cs-modal-close-btn"
                onClick={() => setSelectedImage(null)}
                aria-label="Close Preview"
                title="Close (Esc)"
              >
                <X size={20} />
              </button>
              
              <div className="cs-modal-image-wrap">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.label}
                  className="cs-modal-img"
                />
              </div>

              <div className="cs-modal-info">
                <h4 className="cs-modal-title">{selectedImage.label}</h4>
                {selectedImage.desc && <p className="cs-modal-desc">{selectedImage.desc}</p>}
              </div>
            </div>
          </div>
        )}

        {/* ============ 8. FOOTER CALL TO ACTION ============ */}
        <div className="case-page-cta-card">
          <div className="cta-left">
            <h3>
              {project.category === "Video Editing"
                ? "Ready to elevate your video content?"
                : "Ready to scale your business campaigns?"}
            </h3>
            <p>
              {project.category === "Video Editing"
                ? "Let's collaborate on high-converting video edits, social media reels, and AI productions."
                : "Let's collaborate on data-driven Meta Ads, custom creative design, and result-oriented growth."}
            </p>
          </div>
          <div className="cta-right">
            <button
              type="button"
              className="btn btn-outline"
              onClick={onBack}
            >
              ← Back to All Projects
            </button>
            <button
              type="button"
              className="btn btn-primary-glow"
              onClick={onNavigateContact}
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Compact Evidence Item with in-page popup trigger
const EvidenceItem = ({ item, onSelect }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="cs-evidence-card">
      {!imgFailed ? (
        <button
          type="button"
          onClick={() => onSelect && onSelect(item)}
          className="cs-evidence-btn"
          aria-label={`Open ${item.label}`}
        >
          <div className="cs-evidence-img-container">
            <img
              src={item.src}
              alt={item.label}
              className="cs-evidence-img"
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
            <div className="cs-evidence-zoom-hint">
              <span>View Full ↗</span>
            </div>
          </div>
          <div className="cs-evidence-overlay-label">
            <span className="cs-evidence-title">{item.label}</span>
            {item.desc && <span className="cs-evidence-sub">{item.desc}</span>}
          </div>
        </button>
      ) : (
        <div className="cs-evidence-pending-box">
          <div className="cs-pending-icon-row">
            <Camera size={16} className="text-accent" />
            <span className="cs-pending-pill">Verified Record</span>
          </div>
          <h4 className="cs-pending-title">{item.label}</h4>
          <p className="cs-pending-desc">{item.desc}</p>
          <code className="cs-pending-file">{item.filename}</code>
        </div>
      )}
    </div>
  );
};

export default CaseStudyPage;
