import { ArrowRight } from "lucide-react";
import "./Projects.css";
import Reveal from "../components/Reveal";
import { projects } from "../data/projectsData";

const Projects = ({ onOpenCaseStudy }) => {
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

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <Reveal key={proj.id} delay={idx * 80}>
              <div className="project-card">
                {/* Top Row: Icon left, tags right */}
                <div className="project-card-top">
                  <div className="project-banner-icon">{proj.icon}</div>
                  <div className="project-banner-tags">
                    {proj.tags.slice(0, 3).map((t) => (
                      <span key={t} className="banner-tag-pill">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Card Body */}
                <div className="project-card-body">
                  <span className="project-cat-label">{proj.categoryLabel || proj.category}</span>
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.description}</p>
                </div>

                {/* Card Footer */}
                <div className="project-card-footer">
                  <span className="project-cat-row">{proj.client || proj.role || ""}</span>
                  <a
                    href={`#/case-study/${proj.id}`}
                    className="btn-case-study"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenCaseStudy(proj.id);
                    }}
                  >
                    <span>{proj.buttonText || "View Case Study"}</span>
                    <ArrowRight size={14} />
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
