"use client";

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-deep py-10 text-platinum/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.15em] md:flex-row lg:px-10">
        <p className="font-display text-lg tracking-[0.3em] text-cream">
          FNZ<span className="text-gold"> EVENT</span>
        </p>
        <p>{t.footer.tagline}</p>
      </div>
    </footer>
  );
}
