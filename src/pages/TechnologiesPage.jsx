import { technologyCategories } from "../data";
import CTASection from "../components/sections/CTASection";
import Container from "../components/common/Container";
import TechnologiesHeroSection from "../components/sections/TechnologiesHeroSection";
import TechnologyCategory from "../components/sections/TechnologyCategory";

function TechnologiesPage() {
  const categories = technologyCategories.map((category, index) => ({
    ...category,
    index: index + 1,
  }));

  return (
    <>
      <TechnologiesHeroSection />
      <section id="technology-stack" className="bg-white py-14 sm:py-20">
        <Container>
          <div className="border-b border-slate-200 pb-8 sm:pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              A considered toolkit
            </p>
            <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
                The right foundation for every layer.
              </h2>
              <p className="max-w-lg text-sm leading-7 text-ink-700 sm:text-base">
                Explore the tools we bring together to create intuitive
                experiences, dependable platforms, and room to grow.
              </p>
            </div>
            <nav
              aria-label="Technology categories"
              className="mt-7 flex gap-2 overflow-x-auto pb-1"
            >
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800 sm:text-sm"
                >
                  {category.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            {categories.map((category) => (
              <TechnologyCategory key={category.id} category={category} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}

export default TechnologiesPage;
