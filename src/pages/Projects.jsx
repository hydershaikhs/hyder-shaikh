import { useState } from "react";
import { Target, ArrowRight } from "lucide-react";
import "./Projects.css";
import Reveal from "../components/Reveal";
import { projects, categories } from "../data/projectsData";

const Projects = ({ onOpenCaseStudy }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleOpenCaseStudy = (projId) => {
    if (onOpenCaseStudy) {
      onOpenCaseStudy(projId);
    } else {
      window.location.hash = `#/case-study/${projId}`;
    }
  };

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

        {/* Projects Grid (Sized & Styled to match reference mockup) */}
        <div className="projects-grid">
          {filteredProjects.map((proj, idx) => (
            <Reveal key={proj.id} delay={idx * 80}>
              <div className="project-card">
                {/* Top Banner with Icon & Tech Tag Pills (Like Reference) */}
                <div className="project-card-banner">
                  <div className="project-banner-icon">{proj.icon}</div>
                  <div className="project-banner-tags">
                    {proj.tags.slice(0, 3).map((t) => (
                      <span key={t} className="banner-tag-pill">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="project-card-body">
                  <div className="project-cat-row">
                    <span className="project-cat-label">{proj.categoryLabel || proj.category}</span>
                    {proj.objective && (
                      <span className="project-obj-label">
                        <Target size={11} />
                        <span>{proj.objective}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="project-title">{proj.title}</h3>
                  <div className="project-headline">{proj.headline || proj.role}</div>
                  <p className="project-desc">{proj.description}</p>
                </div>

                {/* Card Footer with View Case Study Action */}
                <div className="project-card-footer">
                  <a
                    href={`#/case-study/${proj.id}`}
                    className="btn-case-study"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenCaseStudy(proj.id);
                    }}
                  >
                    <span>{proj.buttonText || "View Case Study"}</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
