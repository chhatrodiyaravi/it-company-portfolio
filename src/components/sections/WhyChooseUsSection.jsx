import { Users, Target, ShieldCheck, Sparkles } from "lucide-react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";

function WhyChooseUsSection({ content }) {
  const getIcon = (id) => {
    switch (id) {
      case "focus":
        return <Users className="size-6 text-brand-700" />;
      case "outcomes":
        return <Target className="size-6 text-brand-700" />;
      case "durable":
        return <ShieldCheck className="size-6 text-brand-700" />;
      default:
        return <Sparkles className="size-6 text-brand-700" />;
    }
  };

  return (
    <section className="bg-brand-50/60 py-24 sm:py-28 border-t border-brand-100/80">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {content.reasons.map((reason, index) => (
            <Reveal key={reason.id} className="h-full">
              <article className="group h-full rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-950/5 motion-reduce:transform-none motion-reduce:transition-none sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-xl bg-brand-50 shadow-inner">
                    {getIcon(reason.id)}
                  </div>
                  <span className="font-mono text-xs font-bold text-brand-600">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink-950">
                  {reason.title}
                </h3>
                <p className="mt-3 leading-7 text-ink-700">
                  {reason.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUsSection;
