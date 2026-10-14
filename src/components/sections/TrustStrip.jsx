import { Globe, Smartphone, Cloud, Database } from "lucide-react";
import Container from "../common/Container";

function TrustStrip({ indicators }) {
  const getIndicatorIcon = (id) => {
    switch (id) {
      case "web":
        return <Globe className="size-4 text-brand-600" />;
      case "mobile":
        return <Smartphone className="size-4 text-brand-600" />;
      case "cloud":
        return <Cloud className="size-4 text-brand-600" />;
      case "data":
        return <Database className="size-4 text-brand-600" />;
      default:
        return <span className="size-1.5 rounded-full bg-brand-500" />;
    }
  };

  return (
    <section className="border-b border-slate-200 bg-white py-6">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
          Trusted across the modern stack
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:gap-8">
          {indicators.map((indicator) => (
            <span
              key={indicator.id}
              className="flex items-center gap-2.5 text-sm font-medium text-ink-800"
            >
              <span className="grid size-7 place-items-center rounded-lg bg-brand-50 text-brand-700">
                {getIndicatorIcon(indicator.id)}
              </span>
              <span>{indicator.label}</span>
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TrustStrip;
