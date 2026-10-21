import { useEffect } from "react";
import {
  ArrowLeft, Target, Building2, FileText,
  TrendingUp, ShieldCheck, CheckCircle2,
  Wrench, Clapperboard, Sparkles, Film, ArrowRight
} from "lucide-react";
import "./CaseStudyPage.css";

const CaseStudyPage = ({ project, onBack, onNavigateContact }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
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

  return (
    <div className="case-study-page">
      {/* Top Sticky Navigation */}
      <div className="case-page-nav-bar">
        <div className="container case-page-nav-content">
          <button type="button" onClick={onBack} className="case-page-back-btn">
            <ArrowLeft size={18} />
            <span>Back to Projects</span>
          </button>

          <div className="case-page-nav-tags">
            <span className="case-page-tag-cat">
              {caseStudy.category || project.categoryLabel}
            </span>
            {project.client && (
              <span className="case-page-tag-client">
                <Building2 size={13} />
                <span>{project.client}</span>
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="container case-page-content">
        {/* Page Hero Header */}
        <header className="case-page-hero">
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

        {/* ================= TOP VIDEO SHOWCASE SECTION (Inspired by Reference Design) ================= */}
        {isVideoProject && (
          <section className="creative-showcase-section">
            <div className="showcase-header-ribbon">
              <span className="ribbon-tag">
                <Film size={14} /> REELS & VIDEO SHOWCASE
              </span>
              <h2 className="showcase-section-title">Visual Storytelling & AI Productions</h2>
              <p className="showcase-section-subtitle">
                Explore live short-form video edits and AI-generated concepts in mobile vertical format.
              </p>
            </div>

            {/* Vertical Mobile Frames Grid (Inspired by the Reference Image) */}
            <div className="mobile-story-deck">
              {/* Card 1: Premiere Pro Edit 1 */}
              <div className="story-frame-card premiere">
                <div className="story-frame-speaker"></div>
                <div className="story-frame-top-bar">
                  <span className="story-source-badge">
                    <Clapperboard size={12} /> PREMIERE PRO
                  </span>
                  <span className="story-dot live"></span>
                </div>

                <div className="story-video-wrapper">
                  <video
                    src="/videos/edited-first.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="story-video-player"
                  />
                </div>

                <div className="story-frame-bottom-ribbon">
                  <div className="ribbon-title">Commercial Edit 01</div>
                  <div className="ribbon-desc">Kinetic Cut & Transitions</div>
                </div>
              </div>

              {/* Card 2: Premiere Pro Edit 2 */}
              <div className="story-frame-card premiere">
                <div className="story-frame-speaker"></div>
                <div className="story-frame-top-bar">
                  <span className="story-source-badge">
                    <Clapperboard size={12} /> PREMIERE PRO
                  </span>
                  <span className="story-dot live"></span>
                </div>

                <div className="story-video-wrapper">
                  <video
                    src="/videos/edited-second.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="story-video-player"
                  />
                </div>

                <div className="story-frame-bottom-ribbon">
                  <div className="ribbon-title">Product Showcase 02</div>
                  <div className="ribbon-desc">Sound Design & Pacing</div>
                </div>
              </div>

              {/* Card 3: AI Video Generation 1 */}
              <div className="story-frame-card ai">
                <div className="story-frame-speaker"></div>
                <div className="story-frame-top-bar">
                  <span className="story-source-badge ai-badge">
                    <Sparkles size={12} /> AI GENERATED
                  </span>
                  <span className="story-dot live-ai"></span>
                </div>

                <div className="story-video-wrapper">
                  <video
                    src="/videos/ai-first.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="story-video-player"
                  />
                </div>

                <div className="story-frame-bottom-ribbon ai-ribbon">
                  <div className="ribbon-title">AI Visual Story 01</div>
                  <div className="ribbon-desc">AI Video Synthesis</div>
                </div>
              </div>

              {/* Card 4: AI Video Generation 2 */}
              <div className="story-frame-card ai">
                <div className="story-frame-speaker"></div>
                <div className="story-frame-top-bar">
                  <span className="story-source-badge ai-badge">
                    <Sparkles size={12} /> AI GENERATED
                  </span>
                  <span className="story-dot live-ai"></span>
                </div>

                <div className="story-video-wrapper">
                  <video
                    src="/videos/ai-second.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="story-video-player"
                  />
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
        <section className="case-details-section">
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
                <TrendingUp size={18} className="text-accent" /> Strategy & Execution
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
              <h3>Have a similar project in mind?</h3>
              <p>Let's collaborate to elevate your brand presence with high-converting creative media.</p>
            </div>
            <div className="cta-right">
              <button
                type="button"
                className="btn btn-outline"
                onClick={onBack}
              >
                ← Back to Portfolio
              </button>
              <button
                type="button"
                className="btn btn-primary-glow"
                onClick={onNavigateContact}
              >
                <span>Discuss Project</span>
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
