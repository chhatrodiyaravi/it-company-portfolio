import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, Award } from "lucide-react";
import Container from "../common/Container";

function AboutPreviewSection({ content }) {
  return (
    <section className="py-24 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative group">
          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-2xl shadow-ink-950/10">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={content.image?.src || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"}
                alt={content.image?.alt || "HubTech engineering studio workshop"}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/20 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink-950/70 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur">
                <Sparkles className="size-3.5 text-brand-400" />
                <span>{content.note || "Independent technology partner"}</span>
              </div>
              <div className="absolute bottom-5 inset-x-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl bg-brand-500/80 text-white">
                    <Award className="size-5" />
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold">60+ Releases</p>
                    <p className="text-xs text-slate-300">Enterprise grade delivery</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-emerald-500/20 px-3 py-1.5 text-xs font-medium text-emerald-300 border border-emerald-500/30">
                  <CheckCircle2 className="size-3.5" />
                  <span>92% Retention</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            <Sparkles className="size-3 text-brand-600" />
            <span>{content.eyebrow}</span>
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink-700">
            {content.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to={content.linkHref}
              className="group inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-900"
            >
              <span>{content.linkLabel}</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPreviewSection;
