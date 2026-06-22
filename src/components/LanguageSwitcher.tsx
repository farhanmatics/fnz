"use client";

import { useLanguage, type Lang } from "@/lib/i18n";

function FlagTR() {
  return (
    <svg viewBox="0 0 30 20" className="h-full w-full" aria-hidden="true">
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="11.5" cy="10" r="5" fill="#fff" />
      <circle cx="13" cy="10" r="4" fill="#E30A17" />
      <path
        fill="#fff"
        d="M17.7 10l3.1-1-1.9 2.6V8.4l1.9 2.6z"
        transform="translate(-0.3 0) scale(1.05)"
      />
    </svg>
  );
}

function FlagGB() {
  return (
    <svg viewBox="0 0 60 30" className="h-full w-full" aria-hidden="true">
      <clipPath id="gb-clip">
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath="url(#gb-clip)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 60,30 M60,0 0,30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0,0 60,30 M60,0 0,30"
          stroke="#C8102E"
          strokeWidth="4"
          clipPath="url(#gb-clip)"
        />
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

const FLAGS: Record<Lang, { node: React.ReactNode; label: string }> = {
  tr: { node: <FlagTR />, label: "TR" },
  en: { node: <FlagGB />, label: "EN" },
};

export default function LanguageSwitcher({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const { lang, setLang } = useLanguage();
  const order: Lang[] = ["en", "tr"];

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {order.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={`Switch to ${FLAGS[code].label}`}
            className={`group flex items-center gap-1.5 px-1.5 py-1 transition-opacity duration-300 ${
              active ? "opacity-100" : "opacity-45 hover:opacity-80"
            }`}
          >
            <span
              className={`h-4 w-6 overflow-hidden rounded-[2px] ring-1 transition-all duration-300 ${
                active ? "ring-gold" : "ring-transparent"
              }`}
            >
              {FLAGS[code].node}
            </span>
            <span
              className={`text-[11px] tracking-[0.18em] transition-colors duration-500 ${
                active ? "text-gold" : onDark ? "text-cream" : "text-navy"
              }`}
            >
              {FLAGS[code].label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
