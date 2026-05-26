"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Coins,
  Calendar,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

// ── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function SubventionsPage() {
  const { locale } = useLanguage();
  const isFr = locale === "fr";

  // Localized Strings
  const content = {
    breadcrumbHome: isFr ? "Accueil" : "Home",
    breadcrumbCurrent: isFr ? "Subventions" : "Grants",
    badge: isFr ? "Aide Financière Hydro-Québec" : "Hydro-Québec Financial Aid",

    // Core Highlight (Client requirements)
    highlightSectionTitle: isFr ? "Le Programme Hydro-Québec" : "The Hydro-Québec Program",
    highlightText: isFr
      ? "Hydro‑Québec accorde une aide financière d'un montant de 1 000 $ par kilowatt installé, jusqu'à concurrence de 40 % du coût total de l'achat et de l'installation de panneaux solaires lorsque toutes les exigences du programme sont remplies.\n\nLe montant de l'aide financière est déterminé par la date à laquelle les panneaux solaires sont installés."
      : "Hydro‑Québec provides financial assistance in the amount of $1,000 per installed kilowatt, up to 40% of the total cost to purchase and install solar panels when all Program requirements are met.\n\nThe amount of financial assistance is determined by the date the solar panels are installed.",
    
    dateHighlightTitle: isFr ? "Date d'installation déterminante" : "Critical Installation Date Rule",
    dateHighlightDesc: isFr
      ? "Le montant exact de l'aide financière finale est dicté par le cadre réglementaire en vigueur à la date d'installation des panneaux."
      : "The final grant payout is strictly governed by the program rules in effect on the calendar date the panels are installed."
  };

  return (
    <main className="min-h-[85vh] text-white bg-[#050812] relative overflow-hidden flex flex-col justify-center py-20" style={{ fontFamily: "var(--font-inter)" }}>
      
      {/* ── BACKGROUND GLOWS ── */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── HEADER BLOCK ── */}
      <section className="relative px-6 max-w-7xl mx-auto flex flex-col items-center justify-center text-center mb-8">
        {/* Breadcrumb */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="flex items-center gap-2 text-xs text-white/40 mb-6 bg-white/5 border border-white/5 px-4 py-1.5 rounded-full backdrop-blur-md"
        >
          <Link href="/" className="hover:text-orange-400 transition-colors">
            {content.breadcrumbHome}
          </Link>
          <ChevronRight className="w-3 h-3 text-white/20" />
          <span className="text-white/70">{content.breadcrumbCurrent}</span>
        </motion.div>

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/25 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-2"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>{content.badge}</span>
        </motion.div>
      </section>

      {/* ── SPOTLIGHT CLIENT COPY SECTION ── */}
      <section className="px-6 max-w-6xl mx-auto w-full">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="show"
          className="relative rounded-3xl p-8 md:p-12 border border-white/10 bg-linear-to-b from-white/10 to-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl"
        >
          {/* Decorative glowing gradient border & background grids */}
          <div className="absolute inset-0 bg-radial-at-t from-orange-500/15 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Spotlight description text */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 text-orange-400 text-sm font-bold uppercase tracking-wider mb-4">
                <Coins className="w-5 h-5" />
                <span>{content.highlightSectionTitle}</span>
              </div>
              <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed mb-6 whitespace-pre-line" style={{ fontFamily: "var(--font-syne)" }}>
                &ldquo;{content.highlightText.split("\n\n")[0]}&rdquo;
              </blockquote>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                {content.highlightText.split("\n\n")[1]}
              </p>
            </div>

            {/* Accent date info card */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 text-orange-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                    {content.dateHighlightTitle}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {content.dateHighlightDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
