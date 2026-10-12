import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="section-eyebrow">Selected work</p>
          <h2 className="section-title mt-3 max-w-2xl">
            Case studies in AI systems, platforms, and product interfaces.
          </h2>
          <p className="section-copy mt-4 max-w-2xl">
            Capability-led studies drawn from production engineering practice.
            Each can be swapped for a named product narrative when details are
            client-safe.
          </p>
        </Reveal>

        <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <li className="group py-8 md:py-10">
                <article className="grid gap-5 md:grid-cols-[140px_1fr_auto] md:items-start md:gap-8">
                  <p className="text-sm font-medium tracking-wide text-teal uppercase">
                    {project.tag}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate">
                      {project.summary}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/80">
                      <span className="font-semibold text-ink">Outcome:</span>{" "}
                      {project.outcome}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <li key={item} className="skill-chip">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs text-slate/80">{project.note}</p>
                  </div>
                  <div className="hidden text-teal transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:block">
                    <ArrowUpRight size={22} aria-hidden="true" />
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
