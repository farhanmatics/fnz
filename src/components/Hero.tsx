/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden text-center"
    >
      <img
        src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=2000&q=80"
        alt="Cappadocia at dawn"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy-deep/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-navy-deep/40" />

      <div className="relative z-10 max-w-3xl px-6">
        <p
          className="hero-line mb-6 text-[12px] uppercase tracking-ultra text-gold md:text-sm"
          style={{ animationDelay: ".1s" }}
        >
          {t.hero.eyebrow}
        </p>
        <h1
          className="hero-line mb-6 font-display text-5xl leading-tight text-cream md:text-7xl"
          style={{ animationDelay: ".35s" }}
        >
          {t.hero.titleLine1}
          <br />
          <span className="italic text-gold">{t.hero.titleLine2}</span>
        </h1>
        <div
          className="hero-line gold-rule mx-auto mb-8 w-24"
          style={{ animationDelay: ".55s" }}
        />
        <p
          className="hero-line mx-auto mb-10 max-w-xl text-base font-light text-platinum md:text-lg"
          style={{ animationDelay: ".7s" }}
        >
          {t.hero.subtitle}
        </p>
        <Link
          href="/contact"
          className="hero-line btn-gold inline-block bg-gold px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-navy transition-colors duration-500 hover:bg-gold-dark"
          style={{ animationDelay: ".9s" }}
        >
          {t.hero.cta}
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse text-xs uppercase tracking-[0.3em] text-gold">
        {t.hero.scroll}
      </div>
    </section>
  );
}
