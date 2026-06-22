"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import Reveal from "./Reveal";
import PageBanner from "./PageBanner";

export default function AboutContent() {
  const { t } = useLanguage();
  const a = t.aboutPage;

  return (
    <main>
      <PageBanner
        kicker={a.kicker}
        title={a.title}
        image="https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=2000&q=80"
        alt="Turkish lanterns"
      />

      {/* who we are */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <h2 className="mb-8 font-display text-4xl md:text-5xl">
              {a.whoTitle}
            </h2>
            <div className="gold-rule mb-10 w-20" />
            <div className="space-y-6">
              {a.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base font-light leading-relaxed text-navy/70 md:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* stats */}
      <section className="bg-navy py-20 text-cream">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6 px-6 text-center lg:px-10">
          {t.about.stats.map((stat) => (
            <Reveal key={stat.label}>
              <p className="mb-1 font-display text-4xl text-gold md:text-5xl">
                {stat.value}
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-platinum/70">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* promise */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-ultra text-gold-dark">
              {a.missionTitle}
            </p>
            <p className="font-display text-2xl leading-snug text-navy md:text-3xl">
              {a.missionText}
            </p>
            <div className="gold-rule mx-auto mt-10 w-24" />
            <Link
              href="/contact"
              className="btn-gold mt-10 inline-block bg-navy px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors duration-500 hover:bg-navy-deep"
            >
              {t.nav.planJourney}
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
