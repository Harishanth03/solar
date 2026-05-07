"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Home,
  Building2,
  Wrench,
  BarChart3,
  Battery,
  Zap,
  ArrowRight,
} from "lucide-react";

// ── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Home,
    title: "Installation Résidentielle",
    description:
      "Transformez votre maison en centrale solaire. Nos experts conçoivent un système adapté à votre toiture et vos besoins énergétiques.",
    gradient: "from-orange-500/20 to-amber-400/5",
    border: "hover:border-orange-500/50",
    glow: "bg-orange-500/10",
  },
  {
    icon: Building2,
    title: "Installation Commerciale",
    description:
      "Réduisez vos coûts d'exploitation avec des installations solaires à grande échelle, conçues pour les entreprises et industries.",
    gradient: "from-sky-500/20 to-blue-400/5",
    border: "hover:border-sky-500/50",
    glow: "bg-sky-500/10",
  },
  {
    icon: Wrench,
    title: "Maintenance & Réparation",
    description:
      "Gardez vos panneaux à leur rendement optimal grâce à nos services d'entretien régulier et de réparation rapide.",
    gradient: "from-emerald-500/20 to-green-400/5",
    border: "hover:border-emerald-500/50",
    glow: "bg-emerald-500/10",
  },
  {
    icon: BarChart3,
    title: "Audit Énergétique",
    description:
      "Obtenez une analyse complète et gratuite de votre consommation d'énergie pour maximiser vos économies solaires.",
    gradient: "from-violet-500/20 to-purple-400/5",
    border: "hover:border-violet-500/50",
    glow: "bg-violet-500/10",
  },
  {
    icon: Battery,
    title: "Stockage par Batterie",
    description:
      "Stockez l'énergie solaire produite le jour pour l'utiliser la nuit ou lors des pannes de courant.",
    gradient: "from-amber-500/20 to-yellow-400/5",
    border: "hover:border-amber-500/50",
    glow: "bg-amber-500/10",
  },
  {
    icon: Zap,
    title: "Raccordement au Réseau",
    description:
      "Nous gérons tous les permis, inspections et raccordements au réseau pour vous, de A à Z.",
    gradient: "from-rose-500/20 to-pink-400/5",
    border: "hover:border-rose-500/50",
    glow: "bg-rose-500/10",
  },
];

// ── Animation variants ────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 md:py-32 px-6 md:px-8 lg:px-12 overflow-hidden"
    >
      {/* ── Background ambient glows ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-sky-500/5 blur-3xl" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ── Section header ── */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium mb-5 tracking-widest uppercase">
            <Zap className="w-3 h-3" />
            Nos Services
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Des Solutions{" "}
            <span className="bg-linear-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Sur Mesure
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            De l'audit énergétique à l'activation, nous vous accompagnons à
            chaque étape vers une énergie propre et rentable.
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-orange-500/60 rounded-full" />
            <div className="h-1 w-8 rounded-full bg-linear-to-r from-orange-500 to-amber-400" />
            <div className="h-px w-12 bg-linear-to-l from-transparent to-orange-500/60 rounded-full" />
          </div>
        </motion.div>

        {/* ── Services grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 flex flex-col gap-5 transition-all duration-300 ${service.border} hover:bg-white/8 hover:-translate-y-1 cursor-pointer overflow-hidden`}
              >
                {/* Card inner glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl ${service.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
                />

                {/* Gradient top-edge highlight */}
                <div
                  className={`absolute top-0 left-6 right-6 h-px bg-linear-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`relative z-10 w-14 h-14 rounded-xl bg-linear-to-br ${service.gradient} border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-lg font-bold text-white leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-slate-400 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* CTA link */}
                <span className="relative z-10 inline-flex items-center gap-1.5 text-orange-400 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-14 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-orange-500 to-amber-400 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
          >
            Voir tous nos services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
