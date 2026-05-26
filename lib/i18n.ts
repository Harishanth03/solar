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
  hero: {
    badge: string;
    slides: {
      title: string;
      subtitle: string;
      primary: string;
      secondary: string;
    }[];
    ariaLabel: string;
  };
  servicesSection: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
    more: string;
    button: string;
  };
  aboutSection: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    highlights: {
      title: string;
      description: string;
    }[];
    commitmentsTitle: string;
    commitmentsSubtitle: string;
    commitments: string[];
    button: string;
  };
  contactSection: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    info: {
      visit: string;
      call: string;
      write: string;
    };
    guaranteeTitle: string;
    guaranteeDesc: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      sending: string;
      sent: string;
      send: string;
      error: string;
      privacy: string;
    };
  };
  servicesPage: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    gridTitle: string;
    gridLink: string;
    processTitle: string;
    processSubtitle: string;
    processSteps: {
      number: string;
      title: string;
      description: string;
    }[];
    whyTitle: string;
    whyUs: {
      label: string;
      description: string;
    }[];
    ctaTitlePart1: string;
    ctaTitlePart2: string;
    ctaSubtitle: string;
    ctaButton1: string;
    ctaButton2: string;
  };
  productShowcase: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    featuredBadge: string;
    projectTitle: string;
    description: string;
    specInstalledLabel: string;
    specAvoidedLabel: string;
    specSavedLabel: string;
    specRoiLabel: string;
    specRoiValue: string;
    testimonial: string;
    button: string;
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
    hero: {
      badge: "Experts en solaire de confiance",
      slides: [
        {
          title: "Alimentez votre maison avec une énergie solaire propre",
          subtitle:
            "Réduisez vos factures d’électricité et passez à un avenir énergétique plus intelligent grâce à des panneaux solaires haute performance.",
          primary: "Soumission",
          secondary: "Voir les services",
        },
        {
          title: "Des systèmes solaires fiables pour chaque toit",
          subtitle:
            "De la conception à l’installation, nous réalisons des systèmes durables adaptés aux besoins de votre maison et de votre entreprise.",
          primary: "Démarrer votre projet",
          secondary: "Nos services",
        },
        {
          title: "Économisez plus. Vivez au vert. Rayonnez plus fort.",
          subtitle:
            "Rejoignez des centaines de familles qui choisissent l’énergie solaire pour réduire leurs coûts, améliorer leur confort et bâtir un avenir plus propre.",
          primary: "Réserver une consultation",
          secondary: "À propos",
        },
      ],
      ariaLabel: "Aller à la diapositive",
    },
    servicesSection: {
      badge: "Nos services",
      titlePart1: "Des solutions solaires ",
      titlePart2: "sur mesure",
      subtitle: "De l’audit énergétique à la mise en service, nous vous accompagnons à chaque étape vers une énergie propre, abordable et durable.",
      items: [
        {
          title: "Installation résidentielle",
          description: "Transformez votre maison en centrale solaire. Nos experts conçoivent un système adapté à votre toit et à vos besoins énergétiques."
        },
        {
          title: "Installation commerciale",
          description: "Réduisez vos coûts d’exploitation grâce à des installations solaires à grande échelle conçues pour les entreprises et les installations industrielles."
        },
        {
          title: "Entretien et réparations",
          description: "Maintenez vos panneaux à leur rendement optimal grâce à un entretien planifié et à des interventions de réparation rapides."
        },
        {
          title: "Audit énergétique",
          description: "Obtenez une analyse complète et gratuite de votre consommation d’énergie et découvrez combien vous pourriez économiser avec le solaire."
        },
        {
          title: "Stockage par batteries",
          description: "Stockez l’énergie solaire produite le jour pour l’utiliser la nuit ou lors de pannes de courant."
        },
        {
          title: "Raccordement au réseau",
          description: "Nous gérons tous les permis, inspections et raccordements au réseau du début à la fin — sans tracas."
        }
      ],
      more: "En savoir plus",
      button: "Voir tous les services"
    },
    aboutSection: {
      badge: "À propos",
      titlePart1: "Bâtir un avenir solaire ",
      titlePart2: "plus intelligent",
      subtitle: "Nous sommes une équipe solaire en croissance avec environ un an d’expérience sur le terrain, qui aide les foyers et les entreprises à adopter des solutions énergétiques plus propres et plus efficaces.",
      highlights: [
        {
          title: "Une expertise solaire concrète",
          description: "Au cours de la dernière année, nous avons mis l’accent sur des solutions solaires intelligentes, fiables et efficaces pour les besoins du quotidien."
        },
        {
          title: "La qualité avant tout",
          description: "Chaque projet est planifié avec la sécurité, la performance à long terme et un travail soigné au centre de nos priorités."
        },
        {
          title: "Une approche centrée sur le client",
          description: "We listen first, guide clearly, and deliver systems aligned with each client's goals and budget."
        }
      ],
      commitmentsTitle: "Nos engagements",
      commitmentsSubtitle: "Dès notre première année, nous avons bâti notre réputation sur la confiance, la constance et des résultats concrets qui facilitent l’adoption de l’énergie propre.",
      commitments: [
        "Communication transparente de la consultation à la livraison",
        "Un accompagnement fiable avant, pendant et après l’installation",
        "Des solutions énergétiques pensées pour des économies durables",
        "Un service simple et sans stress pour les particuliers et les entreprises"
      ],
      button: "Parler à notre équipe"
    },
    contactSection: {
      badge: "Contactez-nous",
      titlePart1: "Lancez votre ",
      titlePart2: "projet solaire",
      subtitle: "Une question ou prêt à passer au solaire ? Écrivez à notre équipe : nous vous répondons sous 24 heures.",
      info: {
        visit: "Nous rendre visite",
        call: "Nous appeler",
        write: "Nous écrire"
      },
      guaranteeTitle: "Garantie de réponse rapide",
      guaranteeDesc: "Notre équipe répond à chaque demande sous 24 heures. Pour les urgences, appelez-nous directement.",
      form: {
        name: "Nom complet",
        namePlaceholder: "Jean Dupont",
        email: "Courriel",
        emailPlaceholder: "vous@exemple.com",
        phone: "Téléphone",
        phonePlaceholder: "5148858466",
        message: "Message",
        messagePlaceholder: "Parlez-nous de votre projet solaire…",
        sending: "Envoi en cours…",
        sent: "Message envoyé !",
        send: "Envoyer le message",
        error: "Impossible d’envoyer votre message pour le moment. Veuillez réessayer.",
        privacy: "Nous respectons votre vie privée. Vos informations ne sont jamais partagées avec des tiers."
      }
    },
    servicesPage: {
      breadcrumbHome: "Accueil",
      breadcrumbCurrent: "Services",
      badge: "Nos services",
      titlePart1: "Des solutions solaires ",
      titlePart2: "pensées pour vous",
      subtitle: "De l’audit énergétique à la mise en service, nous vous guidons à chaque étape vers une énergie propre, fiable et abordable.",
      gridTitle: "Ce que nous offrons",
      gridLink: "En savoir plus",
      processTitle: "Comment ça fonctionne",
      processSubtitle: "Un processus simple et transparent — du premier appel à votre première facture d’énergie réduite.",
      processSteps: [
        {
          number: "01",
          title: "Consultation gratuite",
          description: "Échangez avec nos experts pour définir vos besoins et vos objectifs énergétiques."
        },
        {
          number: "02",
          title: "Visite technique",
          description: "Une visite pour évaluer votre toit, l’ombrage et le potentiel solaire."
        },
        {
          number: "03",
          title: "Proposition sur mesure",
          description: "Recevez une soumission détaillée avec un retour sur investissement estimé."
        },
        {
          number: "04",
          title: "Installation",
          description: "Notre équipe certifiée installe votre système en 3 à 5 jours ouvrables."
        },
        {
          number: "05",
          title: "Mise en service et suivi",
          description: "Mise en service, formation et surveillance continue de la production."
        }
      ],
      whyTitle: "Pourquoi nous choisir",
      whyUs: [
        {
          label: "Certifié RBQ",
          description: "Entrepreneurs licenciés par la Régie du bâtiment du Québec."
        },
        {
          label: "Garantie 10 ans",
          description: "Garantie complète sur la main-d’œuvre et tout l’équipement installé."
        },
        {
          label: "Équipe locale au Québec",
          description: "Une équipe qui connaît le climat et les programmes d’aide régionaux."
        },
        {
          label: "Installation en 3 à 5 jours",
          description: "De la première visite à la mise en service, en moins d’une semaine."
        }
      ],
      ctaTitlePart1: "Prêt à passer à ",
      ctaTitlePart2: "l’énergie solaire ?",
      ctaSubtitle: "Obtenez votre soumission gratuite dès aujourd’hui et découvrez combien vous pourriez économiser chaque année avec le solaire.",
      ctaButton1: "Demander une soumission",
      ctaButton2: "Nous contacter"
    },
    productShowcase: {
      badge: "Product Spotlight",
      titlePart1: "Featured ",
      titlePart2: "Product",
      subtitle: "Explore one of our most impressive large-scale solar installations, showcasing our capability and commitment to excellence.",
      featuredBadge: "Featured Product",
      projectTitle: "Beaumont Industrial Complex",
      description: "A large-scale commercial rooftop solar installation completed for a leading manufacturing facility. This state-of-the-art system is designed to offset their massive energy consumption and significantly reduce operational costs.",
      specInstalledLabel: "Installed",
      specAvoidedLabel: "CO₂ Avoided/yr",
      specSavedLabel: "Saved/yr",
      specRoiLabel: "ROI Time",
      specRoiValue: "7 Years",
      testimonial: "The transformation of our energy footprint has been remarkable. Solar-Star delivered perfectly on schedule.",
      button: "Voir nos services"
    }
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
    hero: {
      badge: "Trusted Solar Experts",
      slides: [
        {
          title: "Power Your Home with Clean Solar Energy",
          subtitle:
            "Reduce your electricity bills and transition to a smarter energy future with high-performance solar panels.",
          primary: "Get a Quote",
          secondary: "View Services",
        },
        {
          title: "Reliable Solar Systems for Every Roof",
          subtitle:
            "From design to installation, we build sustainable systems tailored to the needs of your home and business.",
          primary: "Start Your Project",
          secondary: "Our Services",
        },
        {
          title: "Save More. Live Green. Shine Brighter.",
          subtitle:
            "Join hundreds of families choosing solar to lower costs, enhance comfort, and build a cleaner future.",
          primary: "Book a Consultation",
          secondary: "About Us",
        },
      ],
      ariaLabel: "Go to slide",
    },
    servicesSection: {
      badge: "Our Services",
      titlePart1: "Tailored ",
      titlePart2: "Solar Solutions",
      subtitle: "From energy audits to commissioning, we support you at every step towards clean, affordable, and sustainable energy.",
      items: [
        {
          title: "Residential Installation",
          description: "Transform your home into a solar power plant. Our experts design a system tailored to your roof and precise energy needs."
        },
        {
          title: "Commercial Installation",
          description: "Reduce your operating costs with large-scale solar installations designed for businesses and industrial facilities of all sizes."
        },
        {
          title: "Maintenance & Repairs",
          description: "Keep your panels operating at peak performance with regular maintenance and rapid-response repair services."
        },
        {
          title: "Energy Audit",
          description: "Get a complete, free analysis of your energy consumption and find out exactly how much you could save with solar."
        },
        {
          title: "Battery Storage",
          description: "Store solar energy produced during the day to use at night or when the grid is down."
        },
        {
          title: "Grid Connection",
          description: "We manage all permits, inspections, and grid connections for you — completely hassle-free."
        }
      ],
      more: "Learn more",
      button: "View All Services"
    },
    aboutSection: {
      badge: "About Us",
      titlePart1: "Building a ",
      titlePart2: "Smarter Solar Future",
      subtitle: "We are a growing solar team with about a year of hands-on experience, helping homes and businesses adopt cleaner, more efficient energy solutions.",
      highlights: [
        {
          title: "Practical Solar Expertise",
          description: "Over the past year, we have focused on smart, reliable, and efficient solar solutions for everyday needs."
        },
        {
          title: "Quality First",
          description: "Every project is planned with safety, long-term performance, and quality workmanship at the center of our priorities."
        },
        {
          title: "Client-Centric Approach",
          description: "We listen first, guide clearly, and deliver systems aligned with each client's goals and budget."
        }
      ],
      commitmentsTitle: "Our Commitments",
      commitmentsSubtitle: "From our very first year, we have built our reputation on trust, consistency, and concrete results that make adopting clean energy easy.",
      commitments: [
        "Transparent communication from consultation to delivery",
        "Reliable support before, during, and after installation",
        "Energy solutions designed for long-term savings",
        "Simple and stress-free service for homeowners and businesses"
      ],
      button: "Talk to Our Team"
    },
    contactSection: {
      badge: "Contact Us",
      titlePart1: "Start Your ",
      titlePart2: "Solar Project",
      subtitle: "Have a question or ready to switch to solar? Write to our team: we reply within 24 hours.",
      info: {
        visit: "Visit Us",
        call: "Call Us",
        write: "Email Us"
      },
      guaranteeTitle: "Fast Response Guarantee",
      guaranteeDesc: "Our team responds to every inquiry within 24 hours. For emergencies, call us directly.",
      form: {
        name: "Full Name",
        namePlaceholder: "John Doe",
        email: "Email Address",
        emailPlaceholder: "you@example.com",
        phone: "Phone Number",
        phonePlaceholder: "5148858466",
        message: "Message",
        messagePlaceholder: "Tell us about your solar project...",
        sending: "Sending...",
        sent: "Message sent!",
        send: "Send Message",
        error: "Unable to send your message right now. Please try again.",
        privacy: "We respect your privacy. Your information is never shared with third parties."
      }
    },
    servicesPage: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Services",
      badge: "Our Services",
      titlePart1: "Solar Solutions ",
      titlePart2: "Designed for You",
      subtitle: "From energy audits to commissioning, we guide you through every step toward clean, reliable, and affordable energy.",
      gridTitle: "What We Offer",
      gridLink: "Learn more",
      processTitle: "How It Works",
      processSubtitle: "A simple and transparent process — from the first call to your first reduced energy bill.",
      processSteps: [
        {
          number: "01",
          title: "Free Consultation",
          description: "Discuss with our experts to define your energy needs and goals."
        },
        {
          number: "02",
          title: "Technical Site Visit",
          description: "A visit to evaluate your roof, shading, and solar potential."
        },
        {
          number: "03",
          title: "Custom Proposal",
          description: "Receive a detailed quote with an estimated return on investment."
        },
        {
          number: "04",
          title: "Installation",
          description: "Our certified team installs your system in 3 to 5 business days."
        },
        {
          number: "05",
          title: "Commissioning & Support",
          description: "System startup, training, and continuous production monitoring."
        }
      ],
      whyTitle: "Why Choose Us",
      whyUs: [
        {
          label: "RBQ Certified",
          description: "Licensed contractors by the Régie du bâtiment du Québec."
        },
        {
          label: "10-Year Warranty",
          description: "Full warranty on both labor and all installed equipment."
        },
        {
          label: "Local Quebec Team",
          description: "A team that knows the local climate and regional support programs."
        },
        {
          label: "3-5 Day Installation",
          description: "From the first visit to commissioning, in less than a week."
        }
      ],
      ctaTitlePart1: "Ready to Switch to ",
      ctaTitlePart2: "Solar Energy?",
      ctaSubtitle: "Get your free quote today and find out how much you could save each year with solar.",
      ctaButton1: "Request a Quote",
      ctaButton2: "Contact Us"
    },
    productShowcase: {
      badge: "Product Spotlight",
      titlePart1: "Featured ",
      titlePart2: "Product",
      subtitle: "Explore one of our most impressive large-scale solar installations, showcasing our capability and commitment to excellence.",
      featuredBadge: "Featured Product",
      projectTitle: "Beaumont Industrial Complex",
      description: "A large-scale commercial rooftop solar installation completed for a leading manufacturing facility. This state-of-the-art system is designed to offset their massive energy consumption and significantly reduce operational costs.",
      specInstalledLabel: "Installed",
      specAvoidedLabel: "CO₂ Avoided/yr",
      specSavedLabel: "Saved/yr",
      specRoiLabel: "ROI Time",
      specRoiValue: "7 Years",
      testimonial: "The transformation of our energy footprint has been remarkable. Solar-Star delivered perfectly on schedule.",
      button: "View Our Services"
    }
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
