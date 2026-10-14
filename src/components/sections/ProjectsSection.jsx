import Container from "../common/Container";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";

function ProjectsSection({ projects, intro }) {
  return (
    <section id="work" className="bg-slate-950 py-20 text-white">
      <Container>
        <SectionHeading 
          eyebrow={intro.eyebrow}
          title={intro.title}
          description={intro.description}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.id} className="h-full">
              <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/20 motion-reduce:transform-none motion-reduce:transition-none">
                <div className="relative aspect-[16/8] overflow-hidden bg-slate-900">
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-ink-950/55 px-3 py-1 text-xs font-semibold text-brand-100 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-semibold">
                    {project.name}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {project.summary}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
