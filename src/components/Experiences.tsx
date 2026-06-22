/* eslint-disable @next/next/no-img-element */
"use client";

import { useLanguage } from "@/lib/i18n";
import Reveal from "./Reveal";

const IMAGES = [
  "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
];

export default function Experiences() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-ultra text-gold-dark">
            {t.experiences.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-5xl">
            {t.experiences.title}
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {t.experiences.cards.map((card, i) => (
            <Reveal
              key={card.tag}
              delay={i * 0.12}
              className="group zoom overflow-hidden bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={IMAGES[i]}
                  alt={card.tag}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8">
                <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-gold-dark">
                  {card.tag}
                </p>
                <h3 className="mb-3 font-display text-2xl">{card.title}</h3>
                <p className="text-sm font-light leading-relaxed text-navy/60">
                  {card.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
