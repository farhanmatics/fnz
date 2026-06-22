"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "home", label: t.nav.home, href: "/" },
    { id: "about", label: t.nav.about, href: "/about" },
    { id: "contact", label: t.nav.contact, href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;
  const overHero = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || !isHome ? "bg-cream/95 shadow-sm backdrop-blur" : ""
      }`}
    >
      <div className="mx-auto flex h-32 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="relative flex items-center"
          aria-label="FNZ Event"
        >
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 h-24 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-2xl transition-opacity duration-500 ${
              overHero ? "opacity-80" : "opacity-0"
            }`}
          />
          <Image
            src="/assets/fnz-logo.png"
            alt="FNZ Event"
            width={500}
            height={500}
            priority
            className="h-28 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-12 text-[13px] font-medium uppercase tracking-[0.18em] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`navlink transition-colors duration-500 ${
                overHero ? "text-cream" : "text-navy"
              } ${isActive(item.href) ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <LanguageSwitcher onDark={overHero} />
          <Link
            href="/contact"
            className="btn-gold border border-gold px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] text-gold transition-colors duration-500 hover:bg-gold hover:text-navy"
          >
            {t.nav.planJourney}
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher onDark={overHero} />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={`text-2xl transition-colors duration-500 ${
              overHero ? "text-cream" : "text-navy"
            }`}
          >
            &#9776;
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="space-y-4 border-t border-gold/20 bg-cream/95 px-6 py-6 text-sm uppercase tracking-[0.18em] backdrop-blur md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
