import { experience } from "@/data/experience";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title mt-3 max-w-2xl">
            Twelve years of shipping software into production.
          </h2>
        </Reveal>

        <ol className="mt-12 space-y-0">
          {experience.map((job, index) => (
            <Reveal key={`${job.company}-${job.period}`} delay={index * 0.05}>
              <li className="relative grid gap-4 border-t border-ink/10 py-10 md:grid-cols-[220px_1fr] md:gap-10">
                <div>
                  <p className="text-sm font-medium text-teal">{job.period}</p>
                  <p className="mt-2 text-sm text-slate">{job.location}</p>
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-tight text-ink">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-base font-medium text-ink/80">
                    {job.company}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="relative pl-4 text-[0.95rem] leading-relaxed text-slate before:absolute before:top-[0.65em] before:left-0 before:h-1 before:w-1 before:rounded-sm before:bg-teal"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
