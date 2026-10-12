import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <p className="section-eyebrow">About</p>
            <h2 className="section-title mt-3">
              Senior Full Stack AI Engineer based in Budapest.
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {profile.focus.map((item) => (
                <li key={item} className="skill-chip skill-chip-strong">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-5 text-base leading-relaxed text-slate md:text-[1.05rem]">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-10 grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold tracking-wide text-teal uppercase">
                  Education
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">
                  {profile.education.degree}
                  <br />
                  <span className="text-slate">
                    {profile.education.school}
                    <br />
                    {profile.education.period}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-teal uppercase">
                  Languages
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">
                  {profile.language.name}
                  <br />
                  <span className="text-slate">{profile.language.level}</span>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
