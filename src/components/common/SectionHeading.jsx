import Reveal from "./Reveal";

function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <Reveal>
      <header className="max-w-2xl space-y-3">
        {eyebrow && (
          <p
            className={`text-sm font-semibold uppercase tracking-[0.2em] ${dark ? "text-brand-300" : "text-brand-700"}`}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-brand-700"}`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`text-lg leading-8 ${dark ? "text-slate-300" : "text-ink-700"}`}
          >
            {description}
          </p>
        )}
      </header>
    </Reveal>
  );
}

export default SectionHeading;
