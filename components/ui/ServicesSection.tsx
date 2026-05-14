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

const services = [
  {
    icon: Home,
    title: "Installation résidentielle",
    description:
      "Transformez votre maison en centrale solaire. Nos experts conçoivent un système adapté à votre toit et à vos besoins énergétiques.",
    gradient: "from-orange-500/20 to-amber-400/5",
    border: "hover:border-orange-500/50",
    glow: "bg-orange-500/10",
  },
  {
    icon: Building2,
    title: "Installation commerciale",
    description:
      "Réduisez vos coûts d’exploitation grâce à des installations solaires à grande échelle conçues pour les entreprises et les installations industrielles.",
    gradient: "from-sky-500/20 to-blue-400/5",
    border: "hover:border-sky-500/50",
    glow: "bg-sky-500/10",
  },
  {
    icon: Wrench,
    title: "Entretien et réparations",
    description:
      "Maintenez vos panneaux à leur rendement optimal grâce à un entretien planifié et à des interventions de réparation rapides.",
    gradient: "from-emerald-500/20 to-green-400/5",
    border: "hover:border-emerald-500/50",
    glow: "bg-emerald-500/10",
  },
  {
    icon: BarChart3,
    title: "Audit énergétique",
    description:
      "Obtenez une analyse complète et gratuite de votre consommation d’énergie et découvrez combien vous pourriez économiser avec le solaire.",
    gradient: "from-violet-500/20 to-purple-400/5",
    border: "hover:border-violet-500/50",
    glow: "bg-violet-500/10",
  },
  {
    icon: Battery,
    title: "Stockage par batteries",
    description:
      "Stockez l’énergie solaire produite le jour pour l’utiliser la nuit ou lors de pannes de courant.",
    gradient: "from-amber-500/20 to-yellow-400/5",
    border: "hover:border-amber-500/50",
    glow: "bg-amber-500/10",
  },
  {
    icon: Zap,
    title: "Raccordement au réseau",
    description:
      "Nous gérons tous les permis, inspections et raccordements au réseau du début à la fin — sans tracas.",
    gradient: "from-rose-500/20 to-pink-400/5",
    border: "hover:border-rose-500/50",
    glow: "bg-rose-500/10",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.06,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px", amount: 0.12 });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 md:py-32 px-6 md:px-8 lg:px-12 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-sky-500/5 blur-3xl" />
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
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium mb-5 tracking-widest uppercase">
            <Zap className="w-3 h-3" />
            Nos services
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Des solutions solaires{" "}
            <span className="bg-linear-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              sur mesure
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            De l’audit énergétique à la mise en service, nous vous accompagnons à chaque étape vers une
            énergie propre, abordable et durable.
          </p>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-orange-500/60 rounded-full" />
            <div className="h-1 w-8 rounded-full bg-linear-to-r from-orange-500 to-amber-400" />
            <div className="h-px w-12 bg-linear-to-l from-transparent to-orange-500/60 rounded-full" />
          </div>
        </motion.div>

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
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 flex flex-col gap-5 transition-all duration-300 ${service.border} hover:bg-white/8 cursor-pointer overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 rounded-2xl ${service.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
                />

                <div
                  className={`absolute top-0 left-6 right-6 h-px bg-linear-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div
                  className={`relative z-10 w-14 h-14 rounded-xl bg-linear-to-br ${service.gradient} border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>

                <h3 className="relative z-10 text-lg font-bold text-white leading-snug">
                  {service.title}
                </h3>

                <p className="relative z-10 text-slate-400 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                <span className="relative z-10 inline-flex items-center gap-1.5 text-orange-400 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            );
          })}
        </motion.div>

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
            Voir tous les services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
