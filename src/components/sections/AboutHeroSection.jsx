import { ArrowDownRight, Sparkles, ShieldCheck, Users } from "lucide-react";
import { aboutContent } from "../../data";
import Container from "../common/Container";

function AboutHeroSection() {
  const { hero } = aboutContent;

  return (
    <section className="relative overflow-hidden border-b border-brand-950/10 bg-[#e9f2ef] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full border border-brand-700/10 sm:size-[28rem]" aria-hidden="true" />
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            <Sparkles className="size-3.5 text-brand-600" />
            <span>{hero.eyebrow} / Independent product studio</span>
          </div>
          <h1 className="mt-7 max-w-3xl font-display text-4xl font-semibold leading-[1.03] tracking-tight text-ink-950 sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-ink-700 sm:text-lg">
            {hero.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-ink-950/10 pt-5 text-sm text-ink-700">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand-600" />
              Senior-led teams
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="size-4 text-brand-600" />
              Built in partnership
            </span>
          </div>
        </div>

        <div className="relative px-2 pb-8 pl-5 sm:px-5 sm:pb-10">
          <div className="absolute bottom-0 left-0 top-8 w-[72%] rounded-[2rem] bg-brand-700" aria-hidden="true" />
          <div className="group relative overflow-hidden rounded-[2rem] border-[6px] border-[#e9f2ef] shadow-2xl shadow-ink-950/15">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={hero.image?.src || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85"}
                alt={hero.image?.alt || "HubTech studio workspace"}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
            </div>
          </div>
          <div className="absolute -bottom-1 right-0 flex items-center gap-3 rounded-2xl border border-white/70 bg-white px-4 py-3 shadow-xl sm:right-2 sm:px-5">
            <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
              <ArrowDownRight className="size-5" />
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-ink-950">People first.</p>
              <p className="text-xs text-ink-600">Thoughtful work, together.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutHeroSection;
