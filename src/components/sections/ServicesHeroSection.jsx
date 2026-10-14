import { ArrowDownRight, ArrowRight, Layers3, Sparkles } from "lucide-react";
import { services } from "../../data";
import Container from "../common/Container";

function ServicesHeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020618] py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-40 -top-48 -z-10 size-[36rem] rounded-full border border-brand-300/10" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 -top-28 -z-10 size-[28rem] rounded-full border border-brand-300/10" aria-hidden="true" />
      <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
            <Sparkles className="size-3.5 text-brand-300" />
            <span>Capabilities / 01—08</span>
          </div>
          <h1 className="mt-7 max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
            Make the complex
            <span className="block text-brand-300">feel possible.</span>
          </h1>
          <div className="mt-8 flex max-w-xl items-start gap-4">
            <span className="mt-2 h-px w-10 shrink-0 bg-brand-400" />
            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              From first sketch to long-term reliability, bring the right
              people and disciplines around your next big idea.
            </p>
          </div>
          <a
            href="#service-offerings"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand-200"
          >
            Explore our capabilities
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-7">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-brand-400/10 text-brand-300">
                <Layers3 className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">End-to-end delivery</p>
                <p className="mt-0.5 text-xs text-slate-400">One team, from idea to impact</p>
              </div>
            </div>
            <ArrowDownRight className="size-5 text-brand-300" />
          </div>
          <div className="grid gap-x-6 sm:grid-cols-2">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={service.id}
                className="flex items-center gap-3 border-b border-white/[0.07] py-3.5"
              >
                <span className="font-mono text-[10px] text-brand-300/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-slate-200">{service.title}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-slate-400">
            Strategy, design, engineering, and beyond.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default ServicesHeroSection;
