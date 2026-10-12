import { ArrowUpRight, ExternalLink, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.5rem] bg-ink px-6 py-12 text-mist md:px-12 md:py-16">
            <div className="contact-glow" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <p className="text-sm font-medium tracking-wide text-teal-soft uppercase">
                Contact
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                Let&apos;s build the next system together.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-mist/75 md:text-lg">
                {profile.contactIntro}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="btn btn-on-dark"
                >
                  <Mail size={17} />
                  {profile.email}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost-on-dark"
                >
                  <ExternalLink size={17} />
                  LinkedIn
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="mt-6 inline-flex items-center gap-2 text-sm text-mist/70 transition-colors hover:text-mist"
              >
                <Phone size={15} />
                {profile.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
