import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CaseStudyPage from "./pages/CaseStudyPage";
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
    </div>
  );
}

export default App;
