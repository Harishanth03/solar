"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Building2,
  Wrench,
  BarChart3,
  Battery,
  Zap,
  ChevronRight,
  CheckCircle2,
  Clock,
  MapPin,
  Shield,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { messages } from "@/lib/i18n";

// ── Icons Mapping ───────────────────────────────────────────────────────────
const serviceIcons = [Home, Building2, Wrench, BarChart3, Battery, Zap];
const whyUsIcons = [Shield, CheckCircle2, MapPin, Clock];

// ── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: (i as number) * 0.1 },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// ── Page ────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const { locale } = useLanguage();
  const currentMessages = messages[locale];

  const services = serviceIcons.map((Icon, idx) => ({
    icon: Icon,
    title: currentMessages.servicesSection.items[idx].title,
    description: currentMessages.servicesSection.items[idx].description,
  }));

  const steps = currentMessages.servicesPage.processSteps;

  const whyUs = whyUsIcons.map((Icon, idx) => ({
    icon: Icon,
    label: currentMessages.servicesPage.whyUs[idx].label,
    description: currentMessages.servicesPage.whyUs[idx].description,
  }));

  return (
    <main className="min-h-screen text-white" style={{ fontFamily: "var(--font-inter)" }}>

      {/* ── 1. HERO ── */}
      <section className="relative min-h-[45vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Breadcrumb */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-2 text-xs text-white/40 mb-5"
        >
          <Link href="/" className="hover:text-orange-400 transition-colors">
            {currentMessages.servicesPage.breadcrumbHome}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/60">{currentMessages.servicesPage.breadcrumbCurrent}</span>
        </motion.div>

        {/* Badge */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium mb-5 tracking-widest uppercase"
        >
          {currentMessages.servicesPage.badge}
        </motion.span>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-4"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {currentMessages.servicesPage.titlePart1}
          <span className="bg-linear-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
            {currentMessages.servicesPage.titlePart2}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="text-slate-400 max-w-xl text-base sm:text-lg leading-relaxed"
        >
          {currentMessages.servicesPage.subtitle}
        </motion.p>
      </section>

      {/* ── 2. SERVICES GRID ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {currentMessages.servicesPage.gridTitle}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-linear-to-r from-orange-500 to-amber-400" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Link */}
                <span className="text-orange-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                  {currentMessages.servicesPage.gridLink} <ChevronRight className="w-4 h-4" />
                </span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── 3. HOW IT WORKS ── */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {currentMessages.servicesPage.processTitle}
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
              {currentMessages.servicesPage.processSubtitle}
            </p>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-linear-to-r from-orange-500 to-amber-400" />
          </motion.div>

          {/* Steps */}
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="relative flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 flex-1"
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-1/2 w-full h-px border-t-2 border-dashed border-orange-500/30 z-0" />
                )}

                {/* Connector line (mobile) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-[19px] top-10 h-full w-px border-l-2 border-dashed border-orange-500/30 z-0" />
                )}

                {/* Number circle */}
                <div className="relative z-10 shrink-0 w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-linear-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <span
                    className="text-white font-bold text-xs lg:text-sm"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <div className="lg:text-center lg:mt-4 lg:px-4">
                  <h4
                    className="text-white font-bold text-sm lg:text-base"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-xs lg:text-sm mt-1 leading-relaxed max-w-[180px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US ── */}
      <section className="py-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {currentMessages.servicesPage.whyTitle}
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-linear-to-r from-orange-500 to-amber-400" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-orange-500/40 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-orange-500/20 to-amber-400/10 border border-orange-500/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-orange-400" />
                  </div>
                  <h4
                    className="text-white font-bold text-base"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {item.label}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. CTA BANNER ── */}
      <section className="py-16 px-6 md:px-8 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-orange-500/20 p-10 sm:p-14 text-center"
        >
          {/* Glow blobs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <h2
            className="relative text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {currentMessages.servicesPage.ctaTitlePart1}
            <span className="bg-linear-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              {currentMessages.servicesPage.ctaTitlePart2}
            </span>
          </h2>
          <p className="relative text-slate-400 mb-8 text-base sm:text-lg max-w-xl mx-auto">
            {currentMessages.servicesPage.ctaSubtitle}
          </p>

          <div className="relative flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50"
            >
              {currentMessages.servicesPage.ctaButton1}
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              {currentMessages.servicesPage.ctaButton2}
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}