import { ArrowRight, Check, Cpu, Sparkles } from "lucide-react";
import { technologyCategories } from "../../data";
import Container from "../common/Container";
import TechIcon from "../common/TechIcon";

function TechnologiesHeroSection() {
  const technologyCount = technologyCategories.reduce(
    (count, category) => count + category.technologies.length,
    0,
  );
  const featuredTechnologies = technologyCategories
    .flatMap((category) => category.technologies)
    .filter((technology) =>
      [
        "React.js",
        "Node.js",
        "Python",
        "PostgreSQL",
        "Tailwind CSS",
        "MongoDB",
        "Docker",
        "AWS",
      ].includes(technology.name),
    );

  return (
    <section className="relative isolate overflow-hidden border-b border-ink-950 bg-ink-950 py-20 text-white sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(21,155,145,0.6),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="hero-reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100 backdrop-blur">
            <Sparkles className="size-3.5 text-brand-300" />
            <span>Our technology stack</span>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Thoughtful tools.
            <span className="mt-1 block text-brand-300">Built for what’s next.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            The right technology makes great ideas easier to build, scale, and
            improve. We choose proven tools around your product—not the other
            way around.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technology-stack"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Explore the stack
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Check className="size-4 text-brand-300" />
              Practical, proven, and product-led
            </span>
          </div>
          <div className="mt-12 flex gap-8 border-t border-white/10 pt-6 sm:gap-12">
            <div>
              <p className="font-display text-2xl font-semibold text-white">
                {technologyCategories.length.toString().padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">Core disciplines</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-white">
                {technologyCount.toString().padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">Tools in our stack</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-white">01</p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">Focus: your product</p>
            </div>
          </div>
        </div>

        <div className="hero-reveal-delayed relative mx-auto w-full max-w-lg">
          <div className="relative mx-auto grid aspect-square max-w-[26rem] place-items-center">
            <div
              className="technology-orbit absolute inset-[8%] rounded-full border border-dashed border-brand-200/25"
              aria-hidden="true"
            >
              {featuredTechnologies.map((technology, index) => (
                <span
                  key={technology.id}
                  className="technology-orbit-item"
                  style={{
                    "--orbit-angle": `${(360 / featuredTechnologies.length) * index}deg`,
                  }}
                  title={technology.name}
                >
                  <span className="technology-orbit-logo">
                    <TechIcon id={technology.name} className="size-5" />
                  </span>
                </span>
              ))}
            </div>
            <div className="absolute inset-[19%] rounded-full border border-white/10" aria-hidden="true" />
            <div className="relative z-10 grid size-28 place-items-center rounded-full border border-brand-200/20 bg-slate-900/80 text-brand-300 shadow-[0_0_70px_rgba(21,155,145,0.2)] backdrop-blur-xl sm:size-36">
              <div className="grid size-16 place-items-center rounded-full border border-white/10 bg-white/[0.04] sm:size-20">
                <Cpu className="size-8 sm:size-9" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TechnologiesHeroSection;
