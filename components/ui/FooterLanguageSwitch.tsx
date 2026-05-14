"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { localeLabels, type Locale } from "@/lib/i18n";

const locales: Locale[] = ["fr", "en"];

export default function FooterLanguageSwitch() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="lg:pt-1">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sky-500/25 bg-linear-to-br from-sky-500/15 to-[#38BDF8]/10 text-sky-300 shadow-inner shadow-black/20">
          <Globe className="h-4 w-4" aria-hidden />
        </span>
        <div>
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#38BDF8]/90"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {t("footer.language")}
          </p>
        </div>
      </div>

      <div
        className="relative inline-flex w-full max-w-[14.5rem] rounded-2xl border border-white/[0.09] bg-black/25 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        role="group"
        aria-label={t("footer.language")}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.45]"
          style={{
            background:
              "radial-gradient(120% 80% at 20% 0%, rgba(249,115,22,0.12), transparent 55%), radial-gradient(100% 100% at 100% 100%, rgba(56,189,248,0.08), transparent 50%)",
          }}
          aria-hidden
        />

        {locales.map((code) => {
          const active = locale === code;
          return (
            <button
              key={code}
              type="button"
              onClick={() => setLocale(code)}
              aria-pressed={active}
              className="relative z-10 flex-1 rounded-xl py-2.5 text-center text-sm font-semibold outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-orange-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1e]"
            >
              {active ? (
                <motion.span
                  layoutId="footer-lang-pill"
                  className="absolute inset-0 rounded-xl bg-linear-to-r from-[#F97316] via-[#FB923C] to-[#FDBA74] shadow-[0_4px_24px_rgba(249,115,22,0.35)]"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              ) : null}
              <span
                className={`relative z-10 block ${active ? "text-white" : "text-white/45 hover:text-white/75"}`}
              >
                {localeLabels[code]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
