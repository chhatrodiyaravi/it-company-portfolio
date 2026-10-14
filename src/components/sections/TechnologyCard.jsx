import { Check } from "lucide-react";
import Reveal from "../common/Reveal";
import TechIcon from "../common/TechIcon";

function TechnologyCard({ technology }) {
  return (
    <Reveal>
      <article className="group h-full rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm shadow-ink-950/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:bg-brand-50/40 hover:shadow-lg hover:shadow-brand-950/5 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="grid size-12 place-items-center rounded-2xl border border-slate-100 bg-slate-50 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-brand-200 group-hover:bg-white">
            <TechIcon id={technology.name} className="size-6" />
          </div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-500 transition-colors group-hover:bg-brand-100 group-hover:text-brand-700"
          >
            <Check className="size-3" />
            Proven
          </span>
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold text-ink-950">
          {technology.name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-ink-600">
          {technology.detail}
        </p>
      </article>
    </Reveal>
  );
}

export default TechnologyCard;
