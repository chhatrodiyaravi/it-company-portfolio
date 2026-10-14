import { ArrowRight, Sparkles } from "lucide-react";
import { homeContent } from "../../data";
import Button from "../common/Button";
import Container from "../common/Container";

function CTASection({ content = homeContent.cta }) {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="relative overflow-hidden flex flex-col gap-8 rounded-3xl bg-gradient-to-br from-brand-100 via-brand-50 to-white p-8 sm:p-14 lg:flex-row lg:items-end lg:justify-between border border-brand-200/80 shadow-lg shadow-brand-950/5">
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-brand-300/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700 shadow-sm">
              <Sparkles className="size-3 text-brand-600" />
              <span>{content.eyebrow}</span>
            </div>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
              {content.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink-700">
              {content.description}
            </p>
          </div>
          <Button href={content.actionHref} className="relative inline-flex items-center gap-2 shrink-0">
            <span>{content.actionLabel}</span>
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default CTASection;
