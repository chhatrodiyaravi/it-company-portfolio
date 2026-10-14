import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  TrendingUp,
  Layers,
  ArrowRight,
  Eye,
} from "lucide-react";
import { projects } from "../data";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import CTASection from "../components/sections/CTASection";
import TechIcon from "../components/common/TechIcon";
import PlaceholderPage from "./PlaceholderPage";

function ProjectDetailsPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) return <PlaceholderPage title="Project not found" />;

  return (
    <>
      <section className="border-b border-slate-200 bg-mist-50 py-16 sm:py-24">
        <Container>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-950"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to all projects</span>
          </Link>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm">
                <Sparkles className="size-3 text-brand-600" />
                <span>{project.category}</span>
              </div>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-6xl">
                {project.name}
              </h1>
              {project.technologies && (
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-ink-500 uppercase tracking-wider mr-1">
                    Built with:
                  </span>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-ink-800 shadow-sm"
                    >
                      <TechIcon id={tech} className="size-3.5" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
            <p className="max-w-xl text-lg leading-8 text-ink-700">
              {project.description}
            </p>
          </div>

          {/* Hero Project Mockup / Image Display */}
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 shadow-2xl shadow-ink-950/15">
            <div className="relative aspect-[16/8] w-full overflow-hidden">
              <img
                src={project.image.src}
                alt={project.image.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-black/20" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 text-white">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-300">
                    Live Production Platform
                  </span>
                  <p className="font-display text-2xl font-bold sm:text-3xl">
                    {project.name}
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                  <TrendingUp className="size-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-white">
                    {project.outcome}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge and Solution */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-2xl border border-rose-100 bg-rose-50/40 p-8 sm:p-10">
            <div className="flex items-center gap-2 text-rose-700">
              <AlertCircle className="size-5" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                The Challenge
              </p>
            </div>
            <p className="mt-5 font-display text-xl font-semibold leading-relaxed text-ink-950">
              {project.problem}
            </p>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-brand-50/40 p-8 sm:p-10">
            <div className="flex items-center gap-2 text-brand-700">
              <CheckCircle2 className="size-5" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                The Solution
              </p>
            </div>
            <p className="mt-5 text-lg leading-8 text-ink-700">
              {project.solution}
            </p>
          </div>
        </Container>
      </section>

      {/* What we built */}
      <section className="bg-ink-950 py-20 text-white sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                <Layers className="size-4" />
                <span>What We Built</span>
              </div>
              <h2 className="mt-4 font-display text-4xl font-semibold">
                Engineered for resilience and scale.
              </h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
                >
                  <CheckCircle2 className="size-5 text-brand-400 mb-4" />
                  <span className="text-base font-semibold leading-6 text-white">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Delivery Path */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                Delivery Path
              </p>
              <p className="mt-4 text-lg leading-8 text-ink-700">
                A focused process kept decisions visible and the team close to
                the people using the product.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {project.process.map((step, index) => (
                <div
                  key={step}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="font-mono text-xs font-bold text-brand-700">
                    STAGE 0{index + 1}
                  </span>
                  <p className="mt-6 font-display text-lg font-semibold text-ink-950">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Project Views / Gallery */}
      <section className="bg-brand-50/60 py-20 sm:py-28 border-y border-brand-100">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                Visual Showcase
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ink-950">
                Platform interface views
              </h2>
            </div>
            <p className="text-sm text-ink-600">
              High-fidelity workflows & interface modules
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {project.gallery.map((item, index) => {
              const isObj = typeof item === "object";
              const title = isObj ? item.title : item;
              const subtitle = isObj ? item.subtitle : `View ${index + 1}`;
              const imgSrc = isObj
                ? item.src
                : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80";

              return (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src={imgSrc}
                      alt={title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink-950/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <span className="grid size-10 place-items-center rounded-full bg-white/90 text-ink-950 shadow-md">
                        <Eye className="size-5" />
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-semibold text-ink-950">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs text-ink-600">{subtitle}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* The Result */}
      <section className="py-20">
        <Container className="flex flex-col gap-6 rounded-2xl border border-brand-200 bg-gradient-to-r from-brand-50 to-white p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex items-start gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-600/30">
              <TrendingUp className="size-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                Verified Outcome
              </p>
              <p className="mt-1 font-display text-3xl font-bold text-ink-950">
                {project.outcome}
              </p>
            </div>
          </div>
          <Button href="/contact" className="inline-flex items-center gap-2">
            <span>Build something useful</span>
            <ArrowRight className="size-4" />
          </Button>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

export default ProjectDetailsPage;
