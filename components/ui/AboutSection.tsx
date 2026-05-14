"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Lightbulb, Shield, Users } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Une expertise solaire concrète",
    description:
      "Au cours de la dernière année, nous avons mis l’accent sur des solutions solaires intelligentes, fiables et efficaces pour les besoins du quotidien.",
  },
  {
    icon: Shield,
    title: "La qualité avant tout",
    description:
      "Chaque projet est planifié avec la sécurité, la performance à long terme et un travail soigné au centre de nos priorités.",
  },
  {
    icon: Users,
    title: "Une approche centrée sur le client",
    description:
      "Nous écoutons d’abord, guidons clairement et livrons des systèmes alignés sur les objectifs et le budget de chaque client.",
  },
];

const values = [
  "Communication transparente de la consultation à la livraison",
  "Un accompagnement fiable avant, pendant et après l’installation",
  "Des solutions énergétiques pensées pour des économies durables",
  "Un service simple et sans stress pour les particuliers et les entreprises",
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

type AboutSectionProps = {
  /** Moins d’espace en haut lorsque la section est sur la page d’accueil sous d’autres blocs */
  compactHeader?: boolean;
  /** Page « À propos » seule : titre principal en h1 pour l’accessibilité et le référencement */
  standaloneTitle?: boolean;
};

export default function AboutSection({
  compactHeader,
  standaloneTitle,
}: AboutSectionProps) {
  const topRef = useRef<HTMLElement>(null);
  const highlightsRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const topInView = useInView(topRef, { once: true, margin: "-100px", amount: 0.2 });
  const highlightsInView = useInView(highlightsRef, { once: true, margin: "-80px", amount: 0.12 });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px", amount: 0.12 });

  const TitleTag = standaloneTitle ? "h1" : "h2";

  return (
    <>
      <section
        ref={topRef}
        className={`relative flex items-center justify-center px-6 text-center overflow-hidden ${
          compactHeader ? "py-20 md:py-24" : "min-h-[45vh] pt-28 pb-16"
        }`}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={topInView ? "show" : "hidden"}
          className="relative max-w-3xl"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium mb-6 uppercase tracking-widest">
            À propos
          </span>
          <TitleTag
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Bâtir un avenir solaire{" "}
            <span className="bg-linear-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              plus intelligent
            </span>
          </TitleTag>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Nous sommes une équipe solaire en croissance avec environ un an d’expérience sur le terrain,
            qui aide les foyers et les entreprises à adopter des solutions énergétiques plus propres et plus efficaces.
          </p>
        </motion.div>
      </section>

      <section ref={highlightsRef} className="px-6 md:px-8 lg:px-12 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={highlightsInView ? "show" : "hidden"}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section ref={valuesRef} className="px-6 md:px-8 lg:px-12 pb-20">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={valuesInView ? "show" : "hidden"}
          className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12"
        >
          <h3
            className="text-3xl sm:text-4xl font-bold mb-5 text-center"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Nos engagements
          </h3>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-8">
            Dès notre première année, nous avons bâti notre réputation sur la confiance, la constance et des
            résultats concrets qui facilitent l’adoption de l’énergie propre.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "show" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
          >
            {values.map((value) => (
              <motion.div
                key={value}
                variants={itemVariants}
                className="flex items-start gap-3 bg-black/20 border border-white/10 rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50"
            >
              Parler à notre équipe
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
