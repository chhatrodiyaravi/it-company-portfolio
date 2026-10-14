import { ArrowRight, Sparkles, TrendingUp, CheckCircle2, Clock, Activity, ShieldCheck } from "lucide-react";
import { company } from "../../data";
import Button from "../common/Button";
import Container from "../common/Container";

function HeroSection() {
  const { hero } = company;

  const getPhaseIcon = (value) => {
    if (value.toLowerCase().includes("complete")) {
      return <CheckCircle2 className="size-3.5 text-emerald-400" />;
    }
    if (value.toLowerCase().includes("review")) {
      return <Clock className="size-3.5 text-amber-400" />;
    }
    return <Activity className="size-3.5 text-brand-500" />;
  };

  return (
    <section className="relative isolate overflow-hidden border-b border-ink-950/10 bg-ink-950">
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-ink-950/95 via-ink-950/85 to-ink-950/65" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_32%,rgba(21,155,145,0.3),transparent_40%)]" />
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-24">
        <div className="hero-reveal max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-100 shadow-sm backdrop-blur-md">
            <Sparkles className="size-3.5 text-brand-500" />
            <span>{hero.eyebrow}</span>
          </div>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {hero.headline}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
            {hero.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryAction.href} className="inline-flex items-center gap-2">
              <span>{hero.primaryAction.label}</span>
              <ArrowRight className="size-4" />
            </Button>
            <Button href={hero.secondaryAction.href} variant="secondary">
              {hero.secondaryAction.label}
            </Button>
          </div>
          <p className="mt-10 flex items-center gap-2.5 text-sm font-medium text-slate-200">
            <span
              className="relative flex size-2.5"
              aria-hidden="true"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            <ShieldCheck className="size-4 text-brand-500" />
            <span>{hero.trustLabel}</span>
          </p>
        </div>

        <div className="hero-reveal-delayed relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="absolute -inset-5 -z-10 rounded-4xl bg-brand-100/60 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-ink-950/10 bg-ink-950 p-4 shadow-2xl shadow-ink-950/20 sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span
                  className="size-2 rounded-full bg-emerald-400 animate-pulse"
                  aria-hidden="true"
                />
                <span className="font-mono">{hero.visual.status}</span>
              </div>
              <span className="font-mono text-slate-400">STAGE 01 / 04</span>
            </div>
            <div className="grid gap-4 py-5 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-xl border border-white/10 bg-white/4 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {hero.visual.title}
                </p>
                <div className="mt-8 flex items-end gap-2.5">
                  <span className="font-display text-5xl font-semibold text-white">
                    {hero.visual.metricValue}
                  </span>
                  <span className="mb-1.5 inline-flex items-center gap-1 rounded bg-brand-500/20 px-2 py-0.5 text-xs font-medium text-brand-100">
                    <TrendingUp className="size-3" />
                    {hero.visual.metricNote}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  {hero.visual.metricLabel}
                </p>
                <div
                  className="mt-7 flex h-20 items-end gap-1.5"
                  aria-label="Delivery confidence chart"
                  role="img"
                >
                  {hero.visual.chart.map((bar) => (
                    <span
                      key={bar.id}
                      className="flex-1 rounded-t-sm bg-linear-to-t from-brand-600 to-brand-500 transition-all hover:brightness-125"
                      style={{ height: `${bar.value}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="grid gap-3">
                {hero.visual.phases.map((phase) => (
                  <div
                    key={phase.id}
                    className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/4 p-3.5 transition-colors hover:bg-white/7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{phase.label}</span>
                      {getPhaseIcon(phase.value)}
                    </div>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {phase.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs font-mono text-slate-400">
              <span className="text-slate-500">hubtech / delivery_v4</span>
              <span className="inline-flex items-center gap-1.5 text-brand-100">
                <span className="size-1.5 rounded-full bg-brand-500" />
                Live view
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
