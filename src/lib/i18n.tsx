"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "tr";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      contact: "Contact",
      planJourney: "Plan a Journey",
    },
    hero: {
      eyebrow: "Türkiye · Bespoke Travel",
      titleLine1: "Journeys worthy of",
      titleLine2: "the stories you'll tell",
      subtitle:
        "From the balloons of Cappadocia to the turquoise coast, we craft private, thoughtfully designed itineraries across Türkiye.",
      cta: "Begin Planning",
      scroll: "Scroll",
    },
    experiences: {
      eyebrow: "What we curate",
      title: "Signature experiences",
      cards: [
        {
          tag: "Istanbul",
          title: "Two Continents, One City",
          text: "Private Bosphorus sailings, Hagia Sophia at quiet hours, and the hidden artisans of the old bazaar.",
        },
        {
          tag: "Cappadocia",
          title: "Dawn Above the Valleys",
          text: "Sunrise balloon flights, cave suites, and dinners carved into the volcanic stone.",
        },
        {
          tag: "Turquoise Coast",
          title: "Sail the Lycian Shore",
          text: "Private gulet charters along Antalya and Fethiye, with secluded coves all your own.",
        },
      ],
    },
    about: {
      eyebrow: "About FNZ Event",
      titlePre: "Travel designed with",
      titleEm: "intention",
      p1: "FNZ Event is a Turkish travel house built on a simple belief: the finest journeys are the ones designed around you. We are not a booking site — we are a small team of local specialists who know the country intimately.",
      p2: "Every itinerary is private, every detail considered, from the guide who meets you at arrivals to the table reserved for your last evening. We handle the logistics so you keep only the memories.",
      stats: [
        { value: "12+", label: "Years guiding" },
        { value: "40", label: "Destinations" },
        { value: "100%", label: "Private trips" },
      ],
    },
    aboutPage: {
      kicker: "About FNZ Event",
      title: "About Us",
      whoTitle: "Who We Are?",
      paragraphs: [
        "FNZ Event is a Turkish travel house dedicated to designing private, meaningful journeys across Türkiye. We partner with discerning travellers who want more than a checklist of sights — they want a country revealed through the people who know it best.",
        "Built on more than a decade of guiding, our team blends deep local knowledge with an obsessive attention to detail. From the guide who meets you at arrivals to the quiet table reserved for your final evening, every moment is considered and every itinerary is entirely your own.",
        "We are not a booking platform. We are a small, senior team of specialists who craft each trip by hand, handle the logistics end to end, and stay reachable throughout your travels — so you keep only the memories.",
      ],
      missionTitle: "Our Promise",
      missionText:
        "Thoughtful design, complete privacy, and genuine care at every step — journeys worthy of the stories you'll tell.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's design your journey",
      subtitle:
        "Tell us where you'd like to go. We'll reply within one business day with first ideas.",
      name: "Full name",
      email: "Email address",
      destination: "Where would you like to travel?",
      message: "Tell us about your trip",
      send: "Send Enquiry",
      success: "Thank you — we'll be in touch shortly.",
      location: "Istanbul, Türkiye",
    },
    contactPage: {
      kicker: "Get in touch",
      title: "Contact",
    },
    footer: {
      tagline: "© 2026 FNZ Event · Crafted in Türkiye",
    },
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      contact: "İletişim",
      planJourney: "Yolculuk Planla",
    },
    hero: {
      eyebrow: "Türkiye · Kişiye Özel Seyahat",
      titleLine1: "Anlatacağınız hikâyelere",
      titleLine2: "layık yolculuklar",
      subtitle:
        "Kapadokya'nın balonlarından turkuaz kıyılara kadar, Türkiye genelinde özenle tasarlanmış, size özel rotalar hazırlıyoruz.",
      cta: "Planlamaya Başla",
      scroll: "Kaydır",
    },
    experiences: {
      eyebrow: "Neler sunuyoruz",
      title: "İmza deneyimler",
      cards: [
        {
          tag: "İstanbul",
          title: "İki Kıta, Tek Şehir",
          text: "Özel Boğaz turları, sakin saatlerde Ayasofya ve Kapalı Çarşı'nın gizli ustaları.",
        },
        {
          tag: "Kapadokya",
          title: "Vadilerin Üzerinde Şafak",
          text: "Gün doğumu balon turları, mağara süitleri ve volkanik kayalara oyulmuş akşam yemekleri.",
        },
        {
          tag: "Turkuaz Kıyı",
          title: "Likya Kıyısında Yelken",
          text: "Antalya ve Fethiye boyunca özel gulet kiralama ve yalnızca size ait ıssız koylar.",
        },
      ],
    },
    about: {
      eyebrow: "FNZ Event Hakkında",
      titlePre: "İncelikle tasarlanmış",
      titleEm: "seyahatler",
      p1: "FNZ Event, basit bir inanç üzerine kurulu bir Türk seyahat evidir: en güzel yolculuklar, size göre tasarlananlardır. Bir rezervasyon sitesi değiliz — ülkeyi yakından tanıyan küçük bir yerel uzman ekibiyiz.",
      p2: "Her rota size özeldir, her ayrıntı düşünülmüştür; sizi karşılayan rehberden son akşamınız için ayrılan masaya kadar. Lojistiği biz üstleniriz, siz yalnızca anıları saklarsınız.",
      stats: [
        { value: "12+", label: "Yıllık rehberlik" },
        { value: "40", label: "Destinasyon" },
        { value: "100%", label: "Özel geziler" },
      ],
    },
    aboutPage: {
      kicker: "FNZ Event Hakkında",
      title: "Hakkımızda",
      whoTitle: "Biz Kimiz?",
      paragraphs: [
        "FNZ Event, Türkiye genelinde size özel, anlamlı yolculuklar tasarlamaya adanmış bir Türk seyahat evidir. Gezilecek yerlerin bir listesinden fazlasını isteyen, ülkeyi en iyi tanıyan insanlar aracılığıyla keşfetmek isteyen seçkin gezginlerle çalışıyoruz.",
        "On yılı aşkın rehberlik deneyimi üzerine kurulu ekibimiz, derin yerel bilgiyi titiz bir ayrıntı tutkusuyla birleştirir. Sizi karşılayan rehberden son akşamınız için ayrılan sakin masaya kadar her an düşünülmüştür ve her rota tamamen size özeldir.",
        "Bir rezervasyon platformu değiliz. Her geziyi elle hazırlayan, lojistiği baştan sona üstlenen ve seyahatiniz boyunca ulaşılabilir kalan küçük ve deneyimli bir uzman ekibiyiz — böylece geriye yalnızca anılar kalır.",
      ],
      missionTitle: "Sözümüz",
      missionText:
        "Her adımda özenli tasarım, tam mahremiyet ve gerçek bir ilgi — anlatacağınız hikâyelere layık yolculuklar.",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Yolculuğunuzu birlikte tasarlayalım",
      subtitle:
        "Nereye gitmek istediğinizi bize anlatın. Bir iş günü içinde ilk fikirlerimizle size dönüş yapalım.",
      name: "Ad Soyad",
      email: "E-posta adresi",
      destination: "Nereye seyahat etmek istersiniz?",
      message: "Seyahatinizden bahsedin",
      send: "Talep Gönder",
      success: "Teşekkürler — kısa süre içinde sizinle iletişime geçeceğiz.",
      location: "İstanbul, Türkiye",
    },
    contactPage: {
      kicker: "Bize ulaşın",
      title: "İletişim",
    },
    footer: {
      tagline: "© 2026 FNZ Event · Türkiye'de özenle hazırlandı",
    },
  },
} as const;

export type Dictionary = (typeof translations)["en"];

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "fnz-lang";
const DEFAULT_LANG: Lang = "en";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "en" || stored === "tr") {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang] as Dictionary }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
