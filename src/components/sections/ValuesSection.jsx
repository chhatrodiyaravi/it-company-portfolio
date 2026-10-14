import { Eye, Gem, Users, Compass } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

function ValuesSection({ values }) {
  const getValueIcon = (id) => {
    switch (id) {
      case "clarity":
        return <Eye className="size-5 text-brand-700" />;
      case "craft":
        return <Gem className="size-5 text-brand-700" />;
      case "ownership":
        return <Users className="size-5 text-brand-700" />;
      case "curiosity":
        return <Compass className="size-5 text-brand-700" />;
      default:
        return <Gem className="size-5 text-brand-700" />;
    }
  };

  return (
    <section className="bg-brand-50/60 py-24 sm:py-28 border-y border-brand-100/80">
      <Container>
        <SectionHeading
          eyebrow="What guides us"
          title="Principles we bring to the work."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {values.map((value, index) => (
            <article
              key={value.id}
              className="rounded-2xl border border-brand-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="grid size-11 place-items-center rounded-xl bg-brand-50">
                  {getValueIcon(value.id)}
                </div>
                <span className="font-mono text-xs font-semibold text-brand-600">
                  0{index + 1}
                </span>
              </div>
              <h2 className="mt-6 font-display text-xl font-semibold text-ink-950">
                {value.title}
              </h2>
              <p className="mt-3 leading-7 text-ink-700">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ValuesSection;
