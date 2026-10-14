import Container from "../common/Container";

function StatisticsSection({ statistics }) {
  return (
    <section className="bg-ink-950 py-16 text-white">
      <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map((statistic) => (
          <div key={statistic.id} className="border-l border-white/15 pl-5">
            <p className="font-display text-4xl font-semibold text-brand-300">
              {statistic.value}
            </p>
            <p className="mt-2 max-w-[14rem] text-sm leading-6 text-slate-300">
              {statistic.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}

export default StatisticsSection;
