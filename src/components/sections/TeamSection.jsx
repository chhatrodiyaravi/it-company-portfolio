import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import SocialIcon from "../common/SocialIcon";

function TeamSection({ team }) {
  return (
    <section className="py-24 sm:py-28 bg-white border-t border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="The people"
          title="Small enough to stay close."
          description="A senior core team brings direct accountability and craft into every engagement."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                {member.image ? (
                  <img
                    src={member.image.src}
                    alt={member.image.alt || member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="grid h-full place-items-center bg-ink-950 text-4xl font-semibold text-brand-300">
                    {member.initials}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="mt-6 flex items-start justify-between">
                <div>
                  <h2 className="font-display text-xl font-semibold text-ink-950">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-brand-700">
                    {member.role}
                  </p>
                </div>
                {member.social && (
                  <div className="flex items-center gap-1.5">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="grid size-8 place-items-center rounded-lg border border-slate-200 text-ink-500 transition-colors hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700"
                      >
                        <SocialIcon id="linkedin" className="size-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} GitHub`}
                        className="grid size-8 place-items-center rounded-lg border border-slate-200 text-ink-500 transition-colors hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700"
                      >
                        <SocialIcon id="github" className="size-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <p className="mt-3.5 text-sm leading-6 text-ink-700">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TeamSection;
