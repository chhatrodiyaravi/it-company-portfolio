import { Star, Quote } from "lucide-react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";

function TestimonialsSection({ testimonials, intro }) {
  return (
    <section className="border-y border-slate-200 bg-slate-50/50 py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            {intro.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            {intro.title}
          </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.id} className="h-full">
              <figure className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-xl hover:shadow-ink-950/5 motion-reduce:transform-none motion-reduce:transition-none sm:p-7">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <Quote className="size-6 text-brand-200" />
                  </div>
                  <blockquote className="mt-6 text-base font-normal leading-7 text-ink-800">
                    “{testimonial.quote}”
                  </blockquote>
                </div>

                <figcaption className="mt-8 flex items-center gap-3.5 border-t border-slate-100 pt-5">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      loading="lazy"
                      className="size-11 rounded-full object-cover ring-2 ring-brand-100"
                    />
                  ) : (
                    <div className="grid size-11 place-items-center rounded-full bg-brand-100 text-sm font-semibold text-brand-800">
                      {testimonial.author.slice(0, 2)}
                    </div>
                  )}
                  <div>
                    <p className="font-display text-sm font-semibold text-ink-950">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-ink-500">
                      {testimonial.role}
                      {testimonial.company && (
                        <span className="font-medium text-brand-700">
                          {" "}
                          · {testimonial.company}
                        </span>
                      )}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
