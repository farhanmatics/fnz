"use client";

import { useLanguage } from "@/lib/i18n";
import PageBanner from "./PageBanner";
import Contact from "./Contact";

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <main>
      <PageBanner
        kicker={t.contactPage.kicker}
        title={t.contactPage.title}
        image="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=2000&q=80"
        alt="Istanbul"
      />
      <Contact />
    </main>
  );
}
