"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "bg-white border border-navy/10 px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors duration-300";

  return (
    <section id="contact" className="bg-cream py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-ultra text-gold-dark">
            {t.contact.eyebrow}
          </p>
          <h2 className="mb-6 font-display text-4xl md:text-5xl">
            {t.contact.title}
          </h2>
          <div className="gold-rule mx-auto mb-8 w-24" />
          <p className="mb-12 font-light text-navy/60">{t.contact.subtitle}</p>
        </Reveal>

        <Reveal>
          {sent ? (
            <div className="border border-gold/40 bg-white px-6 py-12">
              <p className="font-display text-2xl text-navy">
                {t.contact.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 text-left">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder={t.contact.name}
                  className={inputClass}
                />
                <input
                  type="email"
                  required
                  placeholder={t.contact.email}
                  className={inputClass}
                />
              </div>
              <input
                type="text"
                placeholder={t.contact.destination}
                className={inputClass}
              />
              <textarea
                rows={4}
                placeholder={t.contact.message}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="btn-gold mt-2 bg-navy px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors duration-500 hover:bg-navy-deep"
              >
                {t.contact.send}
              </button>
            </form>
          )}
        </Reveal>

        <Reveal className="mt-16 flex flex-col justify-center gap-10 text-sm text-navy/60 md:flex-row">
          <span>hello@fnzevent.com</span>
          <span className="hidden text-gold md:inline">·</span>
          <span>+90 212 000 00 00</span>
          <span className="hidden text-gold md:inline">·</span>
          <span>{t.contact.location}</span>
        </Reveal>
      </div>
    </section>
  );
}
