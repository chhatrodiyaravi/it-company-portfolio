import { Clock, GraduationCap, Award, Sparkles, HeartHandshake } from "lucide-react";
import { careersContent, jobs } from "../data";
import Container from "../components/common/Container";
import CTASection from "../components/sections/CTASection";
import CareersHeroSection from "../components/sections/CareersHeroSection";
import JobCard from "../components/sections/JobCard";
import SectionHeading from "../components/common/SectionHeading";

function CareersPage() {
  const getBenefitIcon = (id) => {
    switch (id) {
      case "flexible":
        return <Clock className="size-6 text-brand-700" />;
      case "learning":
        return <GraduationCap className="size-6 text-brand-700" />;
      case "ownership":
        return <Award className="size-6 text-brand-700" />;
      default:
        return <Sparkles className="size-6 text-brand-700" />;
    }
  };

  return (
    <>
      <CareersHeroSection />

      {/* Culture and Benefits */}
      <section className="py-24 sm:py-28 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                <Sparkles className="size-3 text-brand-600" />
                <span>{careersContent.culture.eyebrow}</span>
              </div>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
                {careersContent.culture.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink-700">
                {careersContent.culture.description}
              </p>
            </div>

            <div className="relative group">
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
                <img
                  src={careersContent.culture.image?.src || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85"}
                  alt={careersContent.culture.image?.alt || "HubTech studio culture"}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {careersContent.benefits.map((benefit) => (
              <article
                key={benefit.id}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-brand-50 shadow-inner">
                  {getBenefitIcon(benefit.id)}
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-700">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="scroll-mt-20 border-y border-brand-100 bg-brand-50/60 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Open positions"
            title="Find your next meaningful challenge."
            description="We hire thoughtful, self-directed professionals who care about code quality, humane product design, and client impact."
          />
          <div className="mt-12">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection content={careersContent.cta} />
    </>
  );
}

export default CareersPage;
