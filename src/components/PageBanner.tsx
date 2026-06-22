/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

type PageBannerProps = {
  kicker: string;
  title: string;
  image: string;
  alt: string;
};

export default function PageBanner({
  kicker,
  title,
  image,
  alt,
}: PageBannerProps) {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative flex min-h-[56vh] items-center justify-center overflow-hidden pt-32 pb-16 text-center">
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-navy-deep/50" />

        <div className="relative z-10 px-6">
          <p className="mb-5 text-[12px] uppercase tracking-ultra text-gold md:text-sm">
            {kicker}
          </p>
          <h1 className="font-display text-5xl text-cream md:text-6xl">
            {title}
          </h1>
          <div className="gold-rule mx-auto mt-8 w-24" />
        </div>
      </section>

      <div className="border-b border-navy/10 bg-cream">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-navy/50 lg:px-10">
          <Link href="/" className="transition-colors hover:text-gold-dark">
            {t.nav.home}
          </Link>
          <span className="text-gold">/</span>
          <span className="text-gold-dark">{title}</span>
        </div>
      </div>
    </>
  );
}
