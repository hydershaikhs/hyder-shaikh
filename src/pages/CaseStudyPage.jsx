import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft, Target, FileText,
  TrendingUp, ShieldCheck, CheckCircle2,
  Wrench, Clapperboard, Sparkles, Film, ArrowRight,
  Volume2, BarChart2, Camera, Lightbulb, AlertCircle, Palette, Layers
} from "lucide-react";
import "./CaseStudyPage.css";

const CaseStudyPage = ({ project, onBack, onNavigateContact }) => {
  const pageRef = useRef(null);

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

  // Compute image base
  const imgBase = baseUrl;

  // Evidence items mapped per project
  const evidenceMap = {
    "art-b-meta-ads": [
      { src: `${imgBase}images/artb-campaign-overview.png`, filename: "artb-campaign-overview.png", label: "Ads Manager Overview", desc: "Verified delivery: $4.26 spend, 5,295 impressions, 4,651 reach" },
      { src: `${imgBase}images/artb-click-performance.png`, filename: "artb-click-performance.png", label: "Click & CTR Metrics", desc: "Breakdown: 35 link clicks, 0.66% link CTR, $0.12 cost per link click" },
      { src: `${imgBase}images/artb-messaging-results.png`, filename: "artb-messaging-results.png", label: "Messaging Conversations", desc: "20 reported messaging conversations at $0.21 per conversation" },
      { src: `${imgBase}images/artb-ad-creative-1.png`, filename: "artb-ad-creative-1.png", label: "Ad Creative Design", desc: "Custom-designed visual creative to showcase paintings and drive inquiries" },
    ],
    "fr-pos-leadgen": [
      { src: `${imgBase}images/fr-pos-meta-ads-performance.png`, filename: "fr-pos-meta-ads-performance.png", label: "Ads Manager Performance", desc: "Verified record: 16 conversations at Rs 77.54 from Rs 1,240.69 spend" },
      { src: `${imgBase}images/fr-urdu-creative.png`, filename: "fr-urdu-creative.png", label: "Urdu Advertising Creative", desc: "Designed-from-scratch Urdu post targeting local retail & store owners" },
    ],
    "fr-software-social-media": [
      { src: `${imgBase}images/fr-social-content-grid.png`, filename: "fr-social-content-grid.png", label: "B2B Post & Carousel Designs", desc: "Branded corporate graphics and feature explainers published across platforms" },
      { src: `${imgBase}images/fr-social-reach-overview.png`, filename: "fr-social-reach-overview.png", label: "Multi-Platform Growth", desc: "LinkedIn, Facebook, and Instagram engagement and profile visit metrics" },
    ],
    "saadgi-wear-social-media": [
      { src: `${imgBase}images/saadgi-social-showcase.png`, filename: "saadgi-social-showcase.png", label: "Aesthetic Reels & Stories", desc: "Viral fabric drape tutorials, styling reels, and customer interaction stories" },
      { src: `${imgBase}images/saadgi-organic-growth.png`, filename: "saadgi-organic-growth.png", label: "Organic Reach & DM Inquiries", desc: "Organic impressions surge and customer order inquiries via direct messages" },
    ],
  };

  const evidenceItems = evidenceMap[project.id] || [];

  // Snapshot fallback
  const snapshot = caseStudy.snapshot || {
    client: caseStudy.client || project.client,
    role: project.role,
    objective: project.objective,
    period: caseStudy.reportingPeriod || "Documented Period",
    budget: isMetaAdsProject ? "Paid Ad Budget" : "Organic Execution",
    scope: project.category
  };

  return (
    <div className="case-study-page" ref={pageRef} style={{ paddingTop: 'clamp(120px, 16vh, 160px)' }}>
      <div className="container case-page-content">
        {/* ============ 1. PAGE HERO HEADER ============ */}
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

        {/* ============ 2. UNIFIED PROJECT SNAPSHOT (6-CARD GRID) ============ */}
        <section className="cs-unified-snapshot anim-section-pop">
          <div className="cs-snapshot-grid">
            <div className="cs-snapshot-item">
              <span className="cs-snapshot-label">Client / Brand</span>
              <span className="cs-snapshot-value">{snapshot.client}</span>
            </div>
            <div className="cs-snapshot-item">
              <span className="cs-snapshot-label">My Verified Role</span>
              <span className="cs-snapshot-value">{snapshot.role}</span>
            </div>
            <div className="cs-snapshot-item">
              <span className="cs-snapshot-label">Primary Objective</span>
              <span className="cs-snapshot-value">{snapshot.objective}</span>
            </div>
            <div className="cs-snapshot-item">
              <span className="cs-snapshot-label">Project / Period</span>
              <span className="cs-snapshot-value">{snapshot.period}</span>
            </div>
            <div className="cs-snapshot-item">
              <span className="cs-snapshot-label">Budget / Model</span>
              <span className="cs-snapshot-value">{snapshot.budget}</span>
            </div>
            <div className="cs-snapshot-item">
              <span className="cs-snapshot-label">Channels &amp; Scope</span>
              <span className="cs-snapshot-value">{snapshot.scope}</span>
            </div>
          </div>
        </section>

        {/* ============ 3. MY HANDS-ON RESPONSIBILITIES ============ */}
        {caseStudy.contribution && (
          <section className="cs-unified-section anim-details-in">
            <div className="cs-section-header">
              <h3 className="cs-section-title">
                <CheckCircle2 size={20} className="text-accent" /> My Responsibilities &amp; Hands-On Role
              </h3>
              <span className="cs-header-tag">Personally Handled Execution</span>
            </div>
            <div className="cs-contribution-grid">
              {caseStudy.contribution.map((item, i) => (
                <div key={i} className="cs-contribution-card">
                  <div className="cs-contribution-num">{String(i + 1).padStart(2, "0")}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============ 4. STRATEGY & PROBLEM SOLVING ============ */}
        <section className="cs-unified-section">
          <div className="cs-section-header">
            <h3 className="cs-section-title">
              <TrendingUp size={20} className="text-accent" /> Strategy &amp; Problem Solving
            </h3>
            <span className="cs-header-tag">Context &amp; Strategic Approach</span>
          </div>

          <div className="cs-challenge-solution-grid">
            <div className="cs-strategy-block challenge-block">
              <div className="cs-block-badge challenge">THE CHALLENGE</div>
              <h4>The Business &amp; Marketing Obstacle</h4>
              <p>{caseStudy.challenge}</p>
            </div>
            <div className="cs-strategy-block solution-block">
              <div className="cs-block-badge solution">THE STRATEGY</div>
              <h4>Execution &amp; Tactical Workflow</h4>
              <p>{caseStudy.solution}</p>
            </div>
          </div>

          {/* 4-Part Detailed Strategy Breakdown if available */}
          {caseStudy.strategySection && (
            <div className="cs-strategy-breakdown-grid">
              <div className="cs-breakdown-item">
                <span className="cs-breakdown-label">Campaign Context</span>
                <p>{caseStudy.strategySection.context}</p>
              </div>
              <div className="cs-breakdown-item">
                <span className="cs-breakdown-label">Target Objective</span>
                <p>{caseStudy.strategySection.objective}</p>
              </div>
              <div className="cs-breakdown-item">
                <span className="cs-breakdown-label">Creative Approach</span>
                <p>{caseStudy.strategySection.creativeApproach}</p>
              </div>
              <div className="cs-breakdown-item">
                <span className="cs-breakdown-label">Campaign Setup</span>
                <p>{caseStudy.strategySection.implementation}</p>
              </div>
            </div>
          )}
        </section>

        {/* ============ 5. VIDEO REELS SHOWCASE (ONLY FOR VIDEO EDITING) ============ */}
        {isVideoProject && (
          <section className="creative-showcase-section anim-section-pop">
            <div className="showcase-header-ribbon">
              <span className="ribbon-tag">
                <Film size={14} /> LIVE 4-VIDEO SHOWCASE
              </span>
              <h2 className="showcase-section-title">Video Editing &amp; AI Productions</h2>
              <p className="showcase-section-subtitle">
                Explore real video edits and AI visual creations playing below with live transitions and audio design.
              </p>
            </div>

            <div className="mobile-story-deck">
              {/* Card 1 */}
              <div className="story-frame-card premiere card-anim-1">
                <div className="story-frame-speaker"></div>
                <div className="story-frame-top-bar">
                  <span className="story-source-badge">
                    <Clapperboard size={12} /> PREMIERE PRO 01
                  </span>
                  <span className="story-dot live"></span>
                </div>
                <div className="story-video-wrapper">
                  <video src={videoUrls.edited1} autoPlay loop muted playsInline controls preload="auto" className="story-video-player" />
                  <div className="video-hover-hint">
                    <Volume2 size={14} /> Click for sound
                  </div>
                </div>
                <div className="story-frame-bottom-ribbon">
                  <div className="ribbon-title">Commercial Edit 01</div>
                  <div className="ribbon-desc">Kinetic Transitions &amp; Cut</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="story-frame-card premiere card-anim-2">
                <div className="story-frame-speaker"></div>
                <div className="story-frame-top-bar">
                  <span className="story-source-badge">
                    <Clapperboard size={12} /> PREMIERE PRO 02
                  </span>
                  <span className="story-dot live"></span>
                </div>
                <div className="story-video-wrapper">
                  <video src={videoUrls.edited2} autoPlay loop muted playsInline controls preload="auto" className="story-video-player" />
                  <div className="video-hover-hint">
                    <Volume2 size={14} /> Click for sound
                  </div>
                </div>
                <div className="story-frame-bottom-ribbon">
                  <div className="ribbon-title">Product Showcase 02</div>
                  <div className="ribbon-desc">Dynamic Pacing &amp; Sound FX</div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="story-frame-card ai card-anim-3">
                <div className="story-frame-speaker"></div>
                <div className="story-frame-top-bar">
                  <span className="story-source-badge ai-badge">
                    <Sparkles size={12} /> AI PRODUCTION 01
                  </span>
                  <span className="story-dot live-ai"></span>
                </div>
                <div className="story-video-wrapper">
                  <video src={videoUrls.ai1} autoPlay loop muted playsInline controls preload="auto" className="story-video-player" />
                  <div className="video-hover-hint">
                    <Volume2 size={14} /> Click for sound
                  </div>
                </div>
                <div className="story-frame-bottom-ribbon ai-ribbon">
                  <div className="ribbon-title">AI Visual Story 01</div>
                  <div className="ribbon-desc">AI Video Synthesis</div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="story-frame-card ai card-anim-4">
                <div className="story-frame-speaker"></div>
                <div className="story-frame-top-bar">
                  <span className="story-source-badge ai-badge">
                    <Sparkles size={12} /> AI PRODUCTION 02
                  </span>
                  <span className="story-dot live-ai"></span>
                </div>
                <div className="story-video-wrapper">
                  <video src={videoUrls.ai2} autoPlay loop muted playsInline controls preload="auto" className="story-video-player" />
                  <div className="video-hover-hint">
                    <Volume2 size={14} /> Click for sound
                  </div>
                </div>
                <div className="story-frame-bottom-ribbon ai-ribbon">
                  <div className="ribbon-title">AI Motion Concept 02</div>
                  <div className="ribbon-desc">Cinematic Generation</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============ 6. VERIFIED PERFORMANCE & RESULTS ============ */}
        <section className="cs-unified-section">
          <div className="cs-section-header">
            <h3 className="cs-section-title">
              <BarChart2 size={20} className="text-accent" /> Verified Performance &amp; Key Results
            </h3>
            <span className="cs-header-tag">100% Genuine Project Data</span>
          </div>

          {/* Top Summary Stats Cards */}
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

          {/* Detailed metrics grid if available (Meta Ads projects) */}
          {caseStudy.metricsDetailed && (
            <div className="cs-detailed-metrics-grid">
              {caseStudy.metricsDetailed.map((m, i) => (
                <div key={i} className="cs-metric-chip">
                  <div className="cs-metric-val">{m.value}</div>
                  <div className="cs-metric-lbl">{m.label}</div>
                  {m.note && <div className="cs-metric-sub">{m.note}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Results Analysis & Trust Note */}
          {caseStudy.interpretation && (
            <div className="cs-interpretation-card">
              <div className="cs-interp-header">
                <ShieldCheck size={18} className="text-accent" />
                <h4>Results Analysis &amp; Data Transparency</h4>
              </div>
              <p className="cs-interp-text">{caseStudy.interpretation}</p>
              {isMetaAdsProject && (
                <div className="cs-trust-disclaimer">
                  <AlertCircle size={16} className="text-accent" />
                  <span>
                    <strong>Client Trust Note:</strong> Messaging conversations reported in Ads Manager reflect direct prospective buyer interactions. They are not claimed as completed purchases or revenue unless verified. All data reflects verified campaign records.
                  </span>
                </div>
              )}
            </div>
          )}
        </section>

        {/* ============ 7. CAMPAIGN EVIDENCE & CREATIVE ASSETS ROW ============ */}
        {!isVideoProject && evidenceItems.length > 0 && (
          <section className="cs-unified-section">
            <div className="cs-section-header">
              <h3 className="cs-section-title">
                <Camera size={20} className="text-accent" /> Campaign Evidence &amp; Designed Assets
              </h3>
              <span className="cs-header-tag">Verified Records &amp; Creatives</span>
            </div>

            <div className="cs-evidence-grid">
              {evidenceItems.map((item, i) => (
                <EvidenceItem key={i} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* ============ 8. SERVICES & CONCRETE DELIVERABLES ============ */}
        {caseStudy.keyServices && (
          <section className="cs-unified-section">
            <div className="cs-section-header">
              <h3 className="cs-section-title">
                <Layers size={20} className="text-accent" /> Key Services &amp; Deliverables
              </h3>
              <span className="cs-header-tag">Concrete Outputs</span>
            </div>
            <div className="cs-services-grid">
              {caseStudy.keyServices.map((ks, i) => (
                <div key={i} className="cs-service-box">
                  <div className="cs-service-head">
                    <CheckCircle2 size={16} className="text-accent" />
                    <h4>{ks.title}</h4>
                  </div>
                  <p>{ks.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============ 9. TOOLS & TECHNOLOGIES STACK ============ */}
        {project.tools && (
          <div className="cs-tools-bar">
            <div className="cs-tools-label">
              <Wrench size={16} className="text-accent" />
              <span>Tools &amp; Stack Used:</span>
            </div>
            <div className="cs-tools-chips">
              {project.tools.map((t, i) => (
                <span key={i} className="cs-tool-tag">{t}</span>
              ))}
            </div>
          </div>
        )}

        {/* ============ 10. LEARNINGS & NEXT STEPS ============ */}
        {caseStudy.learnings && (
          <section className="cs-unified-section">
            <div className="cs-learnings-box">
              <div className="cs-learnings-head">
                <Lightbulb size={18} className="text-accent" />
                <h4>Key Learnings &amp; Scalability Insights</h4>
              </div>
              <p>{caseStudy.learnings}</p>
            </div>
          </section>
        )}

        {/* ============ 11. FOOTER CALL TO ACTION ============ */}
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

// Compact Evidence Item Component
const EvidenceItem = ({ item }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="cs-evidence-card">
      {!imgFailed ? (
        <a href={item.src} target="_blank" rel="noopener noreferrer" className="cs-evidence-link" aria-label={`Open ${item.label}`}>
          <img
            src={item.src}
            alt={item.label}
            className="cs-evidence-img"
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
          <div className="cs-evidence-overlay-label">
            <span>{item.label}</span>
          </div>
        </a>
      ) : (
        <div className="cs-evidence-pending-box">
          <div className="cs-pending-icon-row">
            <Camera size={18} className="text-accent" />
            <span className="cs-pending-pill">Evidence Record</span>
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
