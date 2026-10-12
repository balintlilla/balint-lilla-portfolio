"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-16 md:pt-[4.25rem]"
    >
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="hero-scrim" aria-hidden="true" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-end px-5 pb-12 pt-24 md:min-h-[calc(100svh-4.25rem)] md:justify-center md:px-8 md:pb-20 md:pt-10">
        <div className="max-w-2xl">
          <motion.p
            className="mb-4 text-sm font-medium tracking-wide text-teal-soft uppercase"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {profile.title} · {profile.location}
          </motion.p>

          <motion.h1
            className="font-display text-[clamp(3rem,9vw,6rem)] leading-[0.92] tracking-tight text-mist"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {profile.displayName}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-lg font-medium leading-snug text-mist/95 md:text-xl"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {profile.heroHeadline}
          </motion.p>

          <motion.p
            className="mt-3 max-w-lg text-base leading-relaxed text-mist/75 md:text-[1.05rem]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
          >
            {profile.heroSupport}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            <a href="#work" className="btn btn-on-dark">
              View selected work
              <ArrowDownRight size={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost-on-dark">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
