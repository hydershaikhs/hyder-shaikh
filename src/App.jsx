import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CaseStudyPage from "./pages/CaseStudyPage";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { projects } from "./data/projectsData";
import "./App.css";

function App() {
  const getProjectIdFromHash = () => {
    const hash = window.location.hash || "";
    if (hash.startsWith("#/case-study/")) {
      return hash.replace("#/case-study/", "");
    }
    return null;
  };

  const [activeCaseStudyId, setActiveCaseStudyId] = useState(getProjectIdFromHash);

  // Prevent right-click, dragging, and saving of screenshots & videos
  useEffect(() => {
    const handleContextMenu = (e) => {
      // Check if target is an image, video, or inside media/evidence containers
      if (
        e.target.tagName === "IMG" ||
        e.target.tagName === "VIDEO" ||
        e.target.closest("img") ||
        e.target.closest("video") ||
        e.target.closest(".cs-evidence-card") ||
        e.target.closest(".cs-modal-dialog") ||
        e.target.closest(".story-frame-card") ||
        e.target.closest(".hero-image-wrap") ||
        e.target.closest(".about-img-frame")
      ) {
        e.preventDefault();
        return false;
      }
    };

    const handleDragStart = (e) => {
      if (e.target.tagName === "IMG" || e.target.tagName === "VIDEO") {
        e.preventDefault();
        return false;
      }
    };

    const handleKeyDown = (e) => {
      // Prevent Ctrl+S / Cmd+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
      }
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("dragstart", handleDragStart);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("dragstart", handleDragStart);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveCaseStudyId(getProjectIdFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleOpenCaseStudy = (projId) => {
    setActiveCaseStudyId(projId);
    window.location.hash = `#/case-study/${projId}`;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const handleBackToPortfolio = () => {
    setActiveCaseStudyId(null);
    window.location.hash = "#projects";
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const handleNavigateContact = () => {
    setActiveCaseStudyId(null);
    window.location.hash = "#contact";
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const activeProject = activeCaseStudyId
    ? projects.find((p) => p.id === activeCaseStudyId)
    : null;

  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        {activeProject ? (
          <CaseStudyPage
            project={activeProject}
            onBack={handleBackToPortfolio}
            onNavigateContact={handleNavigateContact}
          />
        ) : (
          <>
            <Home />
            <About />
            <Experience />
            <Projects onOpenCaseStudy={handleOpenCaseStudy} />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
