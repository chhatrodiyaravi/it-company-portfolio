import { Clock, MapPin, Briefcase, ArrowRight } from "lucide-react";

function JobCard({ job }) {
  return (
    <article className="group flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between mb-4">
      <div>
        <h2 className="font-display text-2xl font-semibold text-ink-950 transition-colors group-hover:text-brand-700">
          {job.title}
        </h2>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-medium text-ink-600">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
            <Clock className="size-3.5 text-brand-600" />
            {job.type}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
            <MapPin className="size-3.5 text-brand-600" />
            {job.location}
          </span>
          {job.experience && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
              <Briefcase className="size-3.5 text-brand-600" />
              {job.experience}
            </span>
          )}
        </div>
        <p className="mt-4 max-w-xl text-sm leading-6 text-ink-700">{job.summary}</p>
      </div>
      <a
        href={`mailto:careers@northstardigital.example?subject=Application: ${job.title}`}
        className="group/btn inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-ink-950 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-700 hover:shadow-lg"
      >
        <span>Apply now</span>
        <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
      </a>
    </article>
  );
}

export default JobCard;
