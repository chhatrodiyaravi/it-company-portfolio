import TechnologyCard from "./TechnologyCard";
import { ArrowUpRight } from "lucide-react";

function TechnologyCategory({ category }) {
  return (
    <section
      id={category.id}
      className="scroll-mt-24 border-t border-slate-200 py-12 first:border-t-0 sm:py-16"
    >
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl border border-brand-100 bg-brand-50 font-display text-sm font-semibold text-brand-700">
              {String(category.index).padStart(2, "0")}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Technology area
            </span>
          </div>
          <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
            {category.label}
          </h2>
          <p className="mt-3 max-w-sm leading-7 text-ink-700">
            {category.description}
          </p>
          <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-ink-500">
            <span>{category.technologies.length} technologies</span>
            <ArrowUpRight className="size-3.5 text-brand-600" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {category.technologies.map((technology) => (
            <TechnologyCard key={technology.id} technology={technology} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologyCategory;
