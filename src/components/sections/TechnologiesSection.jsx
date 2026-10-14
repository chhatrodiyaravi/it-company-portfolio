import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import TechIcon from "../common/TechIcon";

function TechnologiesSection({ technologies, intro }) {
  return (
    <section className="border-t border-slate-200/80 bg-white py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={intro.eyebrow}
            title={intro.title}
            description={intro.description}
          />
          <Link
            to="/technologies"
            className="group inline-flex shrink-0 items-center gap-2 font-semibold text-brand-700 hover:text-brand-900"
          >
            <span>Explore full stack</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap gap-3.5">
          {technologies.map((technology) => (
            <div
              key={technology.id}
              className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm font-medium text-ink-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white hover:text-brand-950 hover:shadow-md"
            >
              <TechIcon id={technology.name} className="size-4" />
              <span>{technology.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TechnologiesSection;
