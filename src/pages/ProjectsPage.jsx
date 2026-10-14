import { useState } from "react";
import { projectFilters, projects } from "../data";
import Container from "../components/common/Container";
import CTASection from "../components/sections/CTASection";
import ProjectCard from "../components/sections/ProjectCard";
import ProjectsHeroSection from "../components/sections/ProjectsHeroSection";

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleProjects = projects.filter((project) =>
    project.filters.includes(activeFilter),
  );

  return (
    <>
      <ProjectsHeroSection />
      <section id="project-list" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <div
            className="flex flex-wrap gap-2 border-b border-slate-200 pb-8"
            role="tablist"
            aria-label="Filter projects"
          >
            {projectFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${activeFilter === filter.id ? "bg-ink-950 text-white" : "bg-slate-100 text-ink-700 hover:bg-brand-50 hover:text-brand-700"}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="mt-12 grid gap-x-6 gap-y-16 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}

export default ProjectsPage;
