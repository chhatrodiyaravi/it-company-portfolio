import Container from "../components/common/Container";

function PlaceholderPage({ title }) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
          Coming in a later phase
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-ink-950">
          {title}
        </h1>
      </Container>
    </section>
  );
}

export default PlaceholderPage;
