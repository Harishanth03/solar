export type Locale = "fr" | "en";

export const defaultLocale: Locale = "fr";

export const localeLabels: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

type MessageTree = {
  nav: {
    home: string;
    services: string;
    subventions: string;
    about: string;
    contact: string;
    quote: string;
  };
  footer: {
    tagline: string;
    explore: string;
    home: string;
    services: string;
    subventions: string;
    about: string;
    contact: string;
    rights: string;
    language: string;
    climate: string;
  };
};

export const messages: Record<Locale, MessageTree> = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      subventions: "Subventions",
      about: "À propos",
      contact: "Contact",
      quote: "Soumission",
    },
    footer: {
      tagline:
        "Solutions solaires pour particuliers et entreprises au Canada — performance, clarté et accompagnement de bout en bout.",
      explore: "Navigation",
      home: "Accueil",
      services: "Services",
      subventions: "Subventions",
      about: "À propos",
      contact: "Contact",
      rights: "Tous droits réservés.",
      language: "Langue",
      climate: "Conçu pour le climat canadien.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      subventions: "Grants",
      about: "About",
      contact: "Contact",
      quote: "Get a Quote",
    },
    footer: {
      tagline:
        "Solar solutions for homes and businesses across Canada — performance, transparency, and end-to-end support.",
      explore: "Explore",
      home: "Home",
      services: "Services",
      subventions: "Grants",
      about: "About",
      contact: "Contact",
      rights: "All rights reserved.",
      language: "Language",
      climate: "Built for the Canadian climate.",
    },
  },
};

function getSection<T extends Record<string, unknown>>(
  obj: T,
  parts: string[],
): string | undefined {
  if (parts.length === 0) return undefined;
  const [head, ...rest] = parts;
  const next = obj[head];
  if (rest.length === 0) {
    return typeof next === "string" ? next : undefined;
  }
  if (next && typeof next === "object") {
    return getSection(next as Record<string, unknown>, rest);
  }
  return undefined;
}

export function translate(locale: Locale, path: string): string {
  const parts = path.split(".");
  const value = getSection(
    messages[locale] as unknown as Record<string, unknown>,
    parts,
  );
  return value ?? path;
}
