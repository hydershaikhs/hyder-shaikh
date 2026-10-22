import { useEffect, useRef } from "react";
import {
  ArrowLeft, Target, FileText,
  TrendingUp, ShieldCheck, CheckCircle2,
  Wrench, Clapperboard, Sparkles, Film, ArrowRight,
  Play, Volume2, BarChart2, Camera, Lightbulb, AlertCircle, Palette
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
  const isArtbProject = project.id === "art-b-meta-ads";

  // Compute safe base URL for both Vercel and GitHub Pages
  const rawBase2 = import.meta.env.BASE_URL || "/";
  const imgBase = rawBase2.endsWith("/") ? rawBase2 : `${rawBase2}/`;

  const artbScreenshots = [
    { src: `${imgBase}images/artb-campaign-overview.png`, alt: "art.b Paintings — Meta Ads Manager Campaign Overview screenshot showing spend, impressions and reach", label: "Campaign Overview" },
    { src: `${imgBase}images/artb-click-performance.png`, alt: "art.b Paintings — Meta Ads Manager Click Performance screenshot showing CTR, CPC and link clicks", label: "Click Performance" },
    { src: `${imgBase}images/artb-messaging-results.png`, alt: "art.b Paintings — Meta Ads Manager Messaging Results screenshot showing 20 conversations at $0.21 each", label: "Messaging Results" },
  ];

  return (
    <div className="case-study-page" ref={pageRef} style={{ paddingTop: 'clamp(120px, 16vh, 160px)' }}>
      <div className="container case-page-content">
        {/* Page Hero Header */}
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

        {/* ================= ART.B — DEDICATED CASE STUDY LAYOUT ================= */}
        {isArtbProject && (
          <>
            {/* Project Snapshot */}
            <section className="artb-snapshot-section anim-section-pop">
              <div className="artb-snapshot-grid">
                <div className="artb-snapshot-item">
                  <span className="artb-snapshot-label">Client Industry</span>
                  <span className="artb-snapshot-value">Art & Paintings</span>
                </div>
                <div className="artb-snapshot-item">
                  <span className="artb-snapshot-label">My Role</span>
                  <span className="artb-snapshot-value">Ad Creative Designer & Campaign Setup</span>
                </div>
                <div className="artb-snapshot-item">
                  <span className="artb-snapshot-label">Campaign Type</span>
                  <span className="artb-snapshot-value">Meta Ads — Messaging</span>
                </div>
                <div className="artb-snapshot-item">
                  <span className="artb-snapshot-label">Reporting Period</span>
                  <span className="artb-snapshot-value">{caseStudy.reportingPeriod}</span>
                </div>
                <div className="artb-snapshot-item">
                  <span className="artb-snapshot-label">Campaign Name</span>
                  <span className="artb-snapshot-value artb-campaign-name">{caseStudy.campaignName}</span>
                </div>
                <div className="artb-snapshot-item">
                  <span className="artb-snapshot-label">Budget Used</span>
                  <span className="artb-snapshot-value">$4.26 (test budget)</span>
                </div>
              </div>
            </section>

            {/* My Contribution */}
            <section className="artb-contribution-section anim-details-in">
              <h3 className="artb-section-heading">
                <Palette size={20} className="text-accent" /> My Contribution
              </h3>
              <p className="artb-contribution-intro">
                Designed the ad creatives and independently handled the Meta Ads campaign setup for art.b Paintings.
              </p>
              <div className="artb-contribution-grid">
                {caseStudy.contribution && caseStudy.contribution.map((item, i) => (
                  <div key={i} className="artb-contribution-card">
                    <div className="artb-contribution-number">{String(i + 1).padStart(2, "0")}</div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Screenshots Evidence Gallery */}
            <section className="artb-evidence-section">
              <div className="artb-section-header-row">
                <h3 className="artb-section-heading">
                  <Camera size={20} className="text-accent" /> Campaign Evidence
                </h3>
                <span className="artb-evidence-note">Genuine Meta Ads Manager screenshots</span>
              </div>
              <div className="artb-screenshots-gallery">
                {artbScreenshots.map((s, i) => (
                  <a key={i} href={s.src} target="_blank" rel="noopener noreferrer" className="artb-screenshot-card" aria-label={`Open ${s.label} screenshot`}>
                    <img src={s.src} alt={s.alt} className="artb-screenshot-img" loading="lazy" onError={(e) => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }} />
                    <div className="artb-screenshot-placeholder" style={{display:"none"}}>
                      <Camera size={28} />
                      <span>Screenshot coming soon</span>
                      <span className="artb-placeholder-filename">{s.label}</span>
                    </div>
                    <div className="artb-screenshot-label">{s.label}</div>
                  </a>
                ))}
              </div>
              <p className="artb-screenshots-note">
                Click any screenshot to view full size. Screenshots sourced directly from Meta Ads Manager.
              </p>
            </section>

            {/* Detailed Metrics Dashboard */}
            <section className="artb-metrics-section">
              <h3 className="artb-section-heading">
                <BarChart2 size={20} className="text-accent" /> Campaign Performance Dashboard
              </h3>
              <p className="artb-metrics-period">Reporting period: {caseStudy.reportingPeriod} &nbsp;·&nbsp; Currency: USD (as displayed in Ads Manager)</p>
              <div className="artb-metrics-grid">
                {caseStudy.metricsDetailed && caseStudy.metricsDetailed.map((m, i) => (
                  <div key={i} className="artb-metric-card">
                    <div className="artb-metric-value">{m.value}</div>
                    <div className="artb-metric-label">{m.label}</div>
                    {m.note && <div className="artb-metric-note">{m.note}</div>}
                  </div>
                ))}
              </div>
            </section>

            {/* Results & Interpretation */}
            <section className="artb-interpretation-section">
              <h3 className="artb-section-heading">
                <TrendingUp size={20} className="text-accent" /> Results & Interpretation
              </h3>
              <div className="artb-interpretation-card">
                <p className="block-text">{caseStudy.interpretation}</p>
                <div className="artb-disclaimer-box">
                  <AlertCircle size={16} className="text-accent" />
                  <p>Messaging conversations reported by Meta Ads Manager are not equivalent to confirmed purchases, painting sales, or revenue. No sales data has been verified for this campaign period.</p>
                </div>
              </div>
            </section>

            {/* Learnings */}
            <section className="artb-learnings-section">
              <h3 className="artb-section-heading">
                <Lightbulb size={20} className="text-accent" /> Learnings & Next Steps
              </h3>
              <div className="artb-learnings-card">
                <p className="block-text">{caseStudy.learnings}</p>
              </div>
            </section>
          </>
        )}

        {/* ================= TOP VIDEO SHOWCASE SECTION (4 ANIMATED VIDEO REELS) ================= */}
        {isVideoProject && (
          <section className="creative-showcase-section anim-section-pop">
            <div className="showcase-header-ribbon">
              <span className="ribbon-tag">
                <Film size={14} /> LIVE 4-VIDEO SHOWCASE
              </span>
              <h2 className="showcase-section-title">Video Editing & AI Productions</h2>
              <p className="showcase-section-subtitle">
                Explore real video edits and AI visual creations playing below with live transitions and audio design.
              </p>
            </div>

            {/* Vertical Mobile Frames Deck (4 Videos with Staggered Entrance Animations) */}
            <div className="mobile-story-deck">
              {/* Card 1: Premiere Pro Edit 1 */}
              <div className="story-frame-card premiere card-anim-1">
                <div className="story-frame-speaker"></div>
                <div className="story-frame-top-bar">
                  <span className="story-source-badge">
                    <Clapperboard size={12} /> PREMIERE PRO 01
                  </span>
                  <span className="story-dot live"></span>
                </div>

                <div className="story-video-wrapper">
                  <video
                    src={videoUrls.edited1}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="auto"
                    className="story-video-player"
                  />
                  <div className="video-hover-hint">
                    <Volume2 size={14} /> Click video controls for sound
                  </div>
                </div>

                <div className="story-frame-bottom-ribbon">
                  <div className="ribbon-title">Commercial Edit 01</div>
                  <div className="ribbon-desc">Kinetic Transitions & Cut</div>
                </div>
              </div>

              {/* Card 2: Premiere Pro Edit 2 */}
              <div className="story-frame-card premiere card-anim-2">
                <div className="story-frame-speaker"></div>
                <div className="story-frame-top-bar">
                  <span className="story-source-badge">
                    <Clapperboard size={12} /> PREMIERE PRO 02
                  </span>
                  <span className="story-dot live"></span>
                </div>

                <div className="story-video-wrapper">
                  <video
                    src={videoUrls.edited2}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="auto"
                    className="story-video-player"
                  />
                  <div className="video-hover-hint">
                    <Volume2 size={14} /> Click video controls for sound
                  </div>
                </div>

                <div className="story-frame-bottom-ribbon">
                  <div className="ribbon-title">Product Showcase 02</div>
                  <div className="ribbon-desc">Dynamic Pacing & Sound FX</div>
                </div>
              </div>

              {/* Card 3: AI Video Generation 1 */}
              <div className="story-frame-card ai card-anim-3">
                <div className="story-frame-speaker"></div>
                <div className="story-frame-top-bar">
                  <span className="story-source-badge ai-badge">
                    <Sparkles size={12} /> AI PRODUCTION 01
                  </span>
                  <span className="story-dot live-ai"></span>
                </div>

                <div className="story-video-wrapper">
                  <video
                    src={videoUrls.ai1}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="auto"
                    className="story-video-player"
                  />
                  <div className="video-hover-hint">
                    <Volume2 size={14} /> Click video controls for sound
                  </div>
                </div>

                <div className="story-frame-bottom-ribbon ai-ribbon">
                  <div className="ribbon-title">AI Visual Story 01</div>
                  <div className="ribbon-desc">AI Video Synthesis</div>
                </div>
              </div>

              {/* Card 4: AI Video Generation 2 */}
              <div className="story-frame-card ai card-anim-4">
                <div className="story-frame-speaker"></div>
                <div className="story-frame-top-bar">
                  <span className="story-source-badge ai-badge">
                    <Sparkles size={12} /> AI PRODUCTION 02
                  </span>
                  <span className="story-dot live-ai"></span>
                </div>

                <div className="story-video-wrapper">
                  <video
                    src={videoUrls.ai2}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="auto"
                    className="story-video-player"
                  />
                  <div className="video-hover-hint">
                    <Volume2 size={14} /> Click video controls for sound
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

        {/* ================= DETAILS SECTION (Neeche ki details) ================= */}
        <section className="case-details-section anim-details-in">
          {/* KPI Stat Cards */}
          {caseStudy.stats && (
            <div className="case-stats-deck">
              {caseStudy.stats.map((s, idx) => (
                <div key={idx} className="case-stat-box">
                  <div className="stat-box-value">{s.value}</div>
                  <div className="stat-box-label">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Core Case Study Blocks */}
          <div className="case-blocks-grid">
            {/* Overview */}
            <div className="case-detail-block">
              <h3 className="block-title">
                <FileText size={18} className="text-accent" /> Project Overview
              </h3>
              <p className="block-text">{caseStudy.overview || project.description}</p>
            </div>

            {/* Challenge */}
            <div className="case-detail-block">
              <h3 className="block-title">
                <Target size={18} className="text-accent" /> The Challenge
              </h3>
              <p className="block-text">{caseStudy.challenge}</p>
            </div>

            {/* Solution */}
            <div className="case-detail-block full-width">
              <h3 className="block-title">
                <TrendingUp size={18} className="text-accent" /> Strategy & Creative Workflow
              </h3>
              <p className="block-text">{caseStudy.solution}</p>
            </div>
          </div>

          {/* Tools & Technologies */}
          {project.tools && (
            <div className="case-tools-card">
              <h4 className="tools-card-title">
                <Wrench size={16} className="text-accent" /> Tools & Technologies Stack
              </h4>
              <div className="tools-pills-row">
                {project.tools.map((t, i) => (
                  <span key={i} className="tool-pill-item">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Services Breakdown */}
          {caseStudy.keyServices && (
            <div className="case-services-container">
              <h3 className="services-section-title">
                <ShieldCheck size={20} className="text-accent" /> Key Services & Deliverables
              </h3>
              <div className="services-cards-grid">
                {caseStudy.keyServices.map((ks, i) => (
                  <div key={i} className="service-card-item">
                    <div className="service-card-header">
                      <CheckCircle2 size={18} className="text-accent" />
                      <h4>{ks.title}</h4>
                    </div>
                    <p>{ks.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Call to Action */}
          <div className="case-page-cta-card">
            <div className="cta-left">
              <h3>Ready to elevate your video content?</h3>
              <p>Let's collaborate on high-converting video edits, social media reels, and AI productions.</p>
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
        </section>
      </div>
    </div>
  );
};

export default CaseStudyPage;
