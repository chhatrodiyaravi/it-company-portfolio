import { ArrowDown, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { careersContent } from "../../data";
import Container from "../common/Container";

function CareersHeroSection() {
  const { hero } = careersContent;
  return (
    <section className="relative isolate min-h-[34rem] overflow-hidden bg-ink-950 text-white sm:min-h-[39rem]">
      <img
        src={careersContent.culture.image?.src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#020618]/95 via-[#020618]/75 to-[#020618]/20" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#020618]/75 via-transparent to-transparent" aria-hidden="true" />
      <Container className="flex min-h-[34rem] flex-col justify-center py-16 sm:min-h-[39rem] sm:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100 backdrop-blur">
            <Sparkles className="size-3.5 text-brand-300" />
            <span>{hero.eyebrow}</span>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            {hero.description}
          </p>
          <a
            href="#open-positions"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            See open positions
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/20 pt-5 text-sm text-slate-200">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-brand-300" />
            Remote, by default
          </span>
          <span>Curious people. Shared ownership. Meaningful work.</span>
          <ArrowDown className="ml-auto hidden size-5 text-brand-300 sm:block" />
        </div>
      </Container>
    </section>
  );
}

export default CareersHeroSection;
