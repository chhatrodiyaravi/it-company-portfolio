import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

function PhilosophySection({ content }) {
  return (
    <section className="bg-ink-950 py-24 text-white sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          dark
        />
        <div className="grid gap-4">
          {content.principles.map((principle) => (
            <div
              key={principle.id}
              className="group flex items-center justify-between border-b border-white/15 py-5 text-lg font-medium text-white transition-colors hover:border-brand-400"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-brand-400 shrink-0" />
                <span>{principle.label}</span>
              </div>
              <span className="text-brand-300 transition-transform group-hover:translate-x-1" aria-hidden="true">
                <ArrowRight className="size-5" />
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PhilosophySection;
