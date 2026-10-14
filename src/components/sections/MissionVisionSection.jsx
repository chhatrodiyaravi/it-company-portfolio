import { Target, Sparkles } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

function MissionVisionSection({ content }) {
  const getItemIcon = (id) => {
    switch (id) {
      case "mission":
        return <Target className="size-6 text-brand-600" />;
      case "vision":
        return <Sparkles className="size-6 text-brand-600" />;
      default:
        return <Target className="size-6 text-brand-600" />;
    }
  };

  return (
    <section className="py-24 sm:py-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow={content.introduction.eyebrow}
          title={content.introduction.title}
          description={content.introduction.description}
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {content.missionVision.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl sm:p-9"
            >
              <div className="flex items-center justify-between">
                <div className="grid size-12 place-items-center rounded-xl bg-brand-50 shadow-inner">
                  {getItemIcon(item.id)}
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                  {item.label}
                </span>
              </div>
              <h2 className="mt-8 font-display text-2xl font-semibold text-ink-950">
                {item.title}
              </h2>
              <p className="mt-4 leading-7 text-ink-700">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default MissionVisionSection;
