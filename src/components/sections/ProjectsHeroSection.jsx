import { ArrowDown, ArrowUpRight, Layers } from "lucide-react";
import { projects } from "../../data";
import Container from "../common/Container";

function ProjectsHeroSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="overflow-hidden border-b border-slate-200 bg-[#f1f4f2] py-16 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            <Layers className="size-4" />
            <span>Selected work / 2022—26</span>
          </div>
          <h1 className="mt-6 max-w-2xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-ink-950 sm:text-7xl">
            Ideas in
            <span className="block text-brand-700">motion<span className="text-brand-500">.</span></span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-ink-700 sm:text-lg">
            A closer look at products and platforms built to move teams forward
            and make a measurable difference.
          </p>
          <a
            href="#project-list"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink-950/15 px-4 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:border-brand-600 hover:text-brand-700"
          >
            Browse the work
            <ArrowDown className="size-4" />
          </a>
        </div>
        <div className="relative mx-auto h-[21rem] w-full max-w-xl sm:h-[25rem]">
          <div className="absolute left-[4%] top-[8%] h-[72%] w-[58%] overflow-hidden rounded-[1.75rem] border-4 border-white shadow-2xl shadow-ink-950/15">
            <img
              src={featuredProjects[0].image.src}
              alt={featuredProjects[0].image.alt}
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white sm:bottom-5 sm:left-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-200">
                {featuredProjects[0].category}
              </p>
              <p className="mt-1 font-display text-lg font-semibold sm:text-xl">
                {featuredProjects[0].name}
              </p>
            </div>
          </div>
          <div className="absolute right-[3%] top-[1%] h-[48%] w-[38%] rotate-3 overflow-hidden rounded-[1.5rem] border-4 border-white shadow-xl shadow-ink-950/15">
            <img
              src={featuredProjects[1].image.src}
              alt={featuredProjects[1].image.alt}
              className="size-full object-cover"
            />
          </div>
          <div className="absolute bottom-[3%] right-[8%] h-[48%] w-[45%] -rotate-2 overflow-hidden rounded-[1.5rem] border-4 border-white shadow-xl shadow-ink-950/15">
            <img
              src={featuredProjects[2].image.src}
              alt={featuredProjects[2].image.alt}
              className="size-full object-cover"
            />
          </div>
          <div className="absolute bottom-[8%] left-[2%] grid size-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-950/20 sm:size-16">
            <ArrowUpRight className="size-7" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectsHeroSection;
