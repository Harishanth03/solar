"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  User,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Nous rendre visite",
    value: "4391 Avenue Eliot, Laval, QC H7W 5L5, Canada",
    accent: "from-orange-500/20 to-amber-400/5",
    iconColor: "text-orange-400",
  },
  {
    icon: Phone,
    label: "Nous appeler",
    value: "+1 514 885 8466",
    accent: "from-sky-500/20 to-blue-400/5",
    iconColor: "text-sky-400",
  },
  {
    icon: Mail,
    label: "Nous écrire",
    value: "info@solarstarenergy.ca",
    accent: "from-emerald-500/20 to-green-400/5",
    iconColor: "text-emerald-400",
  },
  {
    icon: Clock,
    label: "Heures d’ouverture",
    value: "24 h / 7 j",
    accent: "from-violet-500/20 to-purple-400/5",
    iconColor: "text-violet-400",
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px", amount: 0.1 });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !data.success) {
        setErrorMessage(
          data.error ||
            "Impossible d’envoyer votre message pour le moment. Veuillez réessayer.",
        );
        return;
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", phone: "", message: "" });
    } catch {
      setErrorMessage(
        "Impossible d’envoyer votre message pour le moment. Veuillez réessayer.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 px-6 md:px-8 lg:px-12 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-125 w-125 rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-100 w-100 rounded-full bg-sky-500/5 blur-3xl" />
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
            <MessageSquare className="w-3 h-3" />
            Contactez-nous
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Lancez votre{" "}
            <span className="bg-linear-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              projet solaire
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Une question ou prêt à passer au solaire ? Écrivez à notre équipe : nous vous répondons
            sous 24 heures.
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
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          <motion.div
            variants={containerVariants}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex items-center gap-4 transition-all duration-300 hover:border-orange-500/40 hover:bg-white/8 cursor-default overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-2xl bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                  <div
                    className={`relative z-10 w-12 h-12 rounded-xl bg-linear-to-br ${info.accent} border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-5 h-5 ${info.iconColor}`} />
                  </div>

                  <div className="relative z-10">
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-white font-semibold text-sm">{info.value}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              variants={itemVariants}
              className="mt-2 rounded-2xl bg-linear-to-br from-orange-500/10 to-amber-400/5 border border-orange-500/20 p-5 flex items-start gap-3"
            >
              <Sparkles className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm mb-1">
                  Garantie de réponse rapide
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Notre équipe répond à chaque demande sous 24 heures. Pour les urgences, appelez-nous
                  directement.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-sky-500/8 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-xs text-slate-400 uppercase tracking-widest flex items-center gap-1.5"
                    >
                      <User className="w-3 h-3" />
                      Nom complet
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/25 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-xs text-slate-400 uppercase tracking-widest flex items-center gap-1.5"
                    >
                      <Mail className="w-3 h-3" />
                      Courriel
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="vous@exemple.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/25 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-phone"
                    className="text-xs text-slate-400 uppercase tracking-widest flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3" />
                    Téléphone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="5148858466"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/25 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs text-slate-400 uppercase tracking-widest flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3 h-3" />
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Parlez-nous de votre projet solaire…"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/25 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-amber-400 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Send className="w-4 h-4" />
                      Envoi en cours…
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Message envoyé !
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer le message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
                {errorMessage ? (
                  <p className="text-sm text-red-400">{errorMessage}</p>
                ) : null}

                <p className="text-center text-xs text-slate-600">
                  Nous respectons votre vie privée. Vos informations ne sont jamais partagées avec des
                  tiers.
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
