import { skills } from "@/data/skills";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="section-eyebrow">Technical skills</p>
          <h2 className="section-title mt-3 max-w-2xl">
            A stack built for AI-powered products and durable platforms.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <div>
                <h3 className="border-b border-ink/10 pb-3 text-sm font-semibold tracking-wide text-ink uppercase">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-slate">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
