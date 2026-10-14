import { Search, Compass, Code2, Rocket } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

function ProcessSection({ content }) {
  const getStepIcon = (id) => {
    switch (id) {
      case "discover":
        return <Search className="size-5 text-brand-700" />;
      case "define":
        return <Compass className="size-5 text-brand-700" />;
      case "deliver":
        return <Code2 className="size-5 text-brand-700" />;
      case "evolve":
        return <Rocket className="size-5 text-brand-700" />;
      default:
        return <Code2 className="size-5 text-brand-700" />;
    }
  };

  return (
    <section className="py-24 sm:py-28 bg-white border-t border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {content.steps.map((step) => (
            <article
              key={step.id}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="grid size-10 place-items-center rounded-xl bg-brand-50 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  {getStepIcon(step.id)}
                </div>
                <span className="font-mono text-xs font-bold text-brand-700">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-700">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;
