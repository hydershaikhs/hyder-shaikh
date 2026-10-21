import { useState } from "react";
import { Check, Target, Wrench, ArrowRight } from "lucide-react";
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

                {/* View Case Study Button -> Opens Dedicated Page */}
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
                    <ArrowRight size={16} />
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
