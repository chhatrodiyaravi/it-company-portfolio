import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../common/Reveal";
import TechIcon from "../common/TechIcon";

function ProjectCard({ project }) {
  return (
    <Reveal>
      <article className="group">
        <Link to={`/projects/${project.id}`} className="block">
          <div
            className={`relative aspect-[4/3] overflow-hidden rounded-2xl p-6 ${project.accent} shadow-md transition-shadow group-hover:shadow-xl`}
          >
            <img
              src={project.image.src}
              alt={project.image.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink-950/30 transition-colors group-hover:bg-ink-950/15" />
            <div className="absolute inset-x-6 top-6 flex items-center justify-between border-b border-white/35 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-[2px]">
              <span className="rounded-md bg-ink-950/50 px-2 py-0.5">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-white/20 px-2.5 py-0.5 backdrop-blur-md">
                Case Study
              </span>
            </div>
          </div>
          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink-950 transition-colors group-hover:text-brand-700">
                {project.name}
              </h2>
              <p className="mt-2 max-w-md leading-7 text-ink-700">
                {project.summary}
              </p>
              {project.technologies && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-medium text-ink-700"
                    >
                      <TechIcon id={tech} className="size-3" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
            <span
              className="grid size-9 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-ink-700 shadow-sm transition-all duration-300 group-hover:border-brand-500 group-hover:bg-brand-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}

export default ProjectCard;
