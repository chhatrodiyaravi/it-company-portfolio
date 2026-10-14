import {
  Monitor,
  Smartphone,
  Cpu,
  Palette,
  ShoppingBag,
  Server,
  Cloud,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import TechIcon from "../common/TechIcon";

function ServiceCard({
  service,
  marquee = false,
  duplicate = false,
  stacked = false,
  stackIndex = 0,
}) {
  const renderIcon = (name) => {
    const props = { className: "size-6" };
    switch (name) {
      case "Monitor":
        return <Monitor {...props} />;
      case "Smartphone":
        return <Smartphone {...props} />;
      case "Cpu":
        return <Cpu {...props} />;
      case "Palette":
        return <Palette {...props} />;
      case "ShoppingBag":
        return <ShoppingBag {...props} />;
      case "Server":
        return <Server {...props} />;
      case "Cloud":
        return <Cloud {...props} />;
      case "Wrench":
        return <Wrench {...props} />;
      default:
        return <Monitor {...props} />;
    }
  };

  const darkStacked = stacked && stackIndex % 2 === 1;
  const stackTones = ["bg-slate-100", "bg-[#020618]"];
  const card = (
    <article
      aria-hidden={duplicate || undefined}
      style={
        stacked
          ? { "--stack-index": stackIndex, zIndex: stackIndex + 1 }
          : undefined
      }
      className={`group ${
        marquee
          ? "relative w-[min(82vw,20rem)] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:z-10 hover:scale-105 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-950/10 motion-reduce:transform-none motion-reduce:transition-none sm:w-80"
          : stacked
            ? `service-stack-card mb-8 grid overflow-hidden rounded-2xl border shadow-lg transition-[scale,box-shadow,border-color] duration-350 ease-out hover:border-brand-200 hover:shadow-xl hover:shadow-ink-950/15 motion-reduce:transition-none md:grid-cols-[minmax(14rem,0.38fr)_minmax(0,1fr)] ${darkStacked ? "border-white/10 shadow-black/20" : "border-slate-200/80 shadow-ink-950/10"} ${stackTones[stackIndex % stackTones.length]}`
            : "flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-950/5 sm:p-7"
      }`}
    >
      {marquee && (
        <div className="relative aspect-video overflow-hidden bg-brand-50">
          <img
            src={service.image.src}
            alt={duplicate ? "" : service.image.alt}
            aria-hidden={duplicate || undefined}
            loading="lazy"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink-950/45 to-transparent" />
        </div>
      )}
      {stacked && (
        <div className="relative min-h-44 overflow-hidden bg-brand-100 md:min-h-full">
          <img
            src={service.image.src}
            alt={service.image.alt}
            loading="lazy"
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink-950/55 via-ink-950/10 to-transparent md:bg-linear-to-r md:from-transparent md:via-ink-950/10 md:to-ink-950/25" />
          <span className="absolute bottom-4 left-5 rounded-full border border-white/25 bg-ink-950/65 px-3 py-1 font-mono text-xs font-semibold text-white backdrop-blur-sm md:bottom-6 md:left-6">
            {String(stackIndex + 1).padStart(2, "0")}
          </span>
        </div>
      )}
      {marquee ? (
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold text-ink-950">
            {service.title}
          </h3>
          <p className="mt-3 leading-7 text-ink-700">{service.description}</p>
        </div>
      ) : (
        <div
          className={
            stacked
              ? "flex flex-col p-6 sm:p-8 lg:p-9"
              : "flex h-full flex-col"
          }
        >
          <div className="flex items-start justify-between">
            <div
              className={`grid size-12 place-items-center rounded-xl transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-600/30 ${darkStacked ? "bg-white/10 text-brand-300" : "bg-white/80 text-brand-700"}`}
            >
              {renderIcon(service.icon)}
            </div>
            <span
              className={`grid size-8 place-items-center rounded-full transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-600 ${darkStacked ? "text-slate-400" : "text-slate-400"}`}
              aria-hidden="true"
            >
              <ArrowRight className="size-5" />
            </span>
          </div>
          <h2 className={`mt-8 font-display text-2xl font-semibold ${darkStacked ? "text-white" : "text-ink-950"}`}>
            {service.title}
          </h2>
          <p className={`mt-3 leading-7 ${darkStacked ? "text-slate-300" : "text-ink-700"}`}>
            {service.description}
          </p>
          <ul className={`mt-6 grid gap-2.5 text-sm ${darkStacked ? "text-slate-300" : "text-ink-600"}`}>
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5">
                <CheckCircle2
                  className="size-4 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-2 pt-8">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800 ${darkStacked ? "border-white/15 bg-white/5 text-slate-200" : "border-slate-200 bg-white/80 text-ink-800"}`}
              >
                <TechIcon id={tech} className="size-3.5" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
          <Button
            href="/contact"
            variant={darkStacked ? "primary" : "secondary"}
            className="mt-7"
          >
            Discuss this service
          </Button>
        </div>
      )}
    </article>
  );

  if (marquee || stacked) return card;
  return <Reveal className="h-full">{card}</Reveal>;
}

export default ServiceCard;
