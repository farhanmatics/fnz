/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-navy py-28 text-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal className="zoom overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1100&q=80"
            alt="Turkish lanterns"
            className="h-[520px] w-full object-cover"
          />
        </Reveal>

        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-ultra text-gold">
            {t.about.eyebrow}
          </p>
          <h2 className="mb-6 font-display text-4xl leading-snug md:text-5xl">
            {t.about.titlePre}{" "}
            <span className="italic text-gold">{t.about.titleEm}</span>
          </h2>
          <div className="gold-rule mb-8 w-20" />
          <p className="mb-5 font-light leading-relaxed text-platinum/90">
            {t.about.p1}
          </p>
          <p className="mb-10 font-light leading-relaxed text-platinum/90">
            {t.about.p2}
          </p>
          <div className="grid grid-cols-3 gap-6">
            {t.about.stats.map((stat) => (
              <div key={stat.label}>
                <p className="mb-1 font-display text-4xl text-gold">
                  {stat.value}
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-platinum/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="navlink mt-10 inline-block text-[12px] uppercase tracking-[0.25em] text-gold"
          >
            {t.nav.about}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
