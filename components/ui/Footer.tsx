"use client";

import Link from "next/link";
import { Sun } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import FooterLanguageSwitch from "@/components/ui/FooterLanguageSwitch";

const linkClass =
  "text-sm text-white/65 hover:text-white transition-colors duration-200";

export default function Footer() {
  const { t, locale } = useLanguage();

  const navItems = [
    { href: "/", label: t("footer.home") },
    { href: "/services", label: t("footer.services") },
    { href: "/about", label: t("footer.about") },
    { href: "/contact", label: t("footer.contact") },
  ] as const;

  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/[0.08] bg-linear-to-b from-transparent to-[rgba(5,8,18,0.85)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F97316]/35 to-transparent"
        aria-hidden
      />
      <div className="container mx-auto px-6 md:px-8 lg:px-12 pt-14 pb-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-linear-to-r from-[#F97316] to-[#38BDF8] opacity-35 blur-md transition group-hover:opacity-55" />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-linear-to-br from-[#F97316]/25 to-[#38BDF8]/15 backdrop-blur-sm">
                  <Sun className="h-5 w-5 text-[#F97316]" aria-hidden />
                </div>
              </div>
              <span
                className="text-lg font-semibold tracking-tight text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Solar<span className="text-[#F97316]">Star</span>{" "}
                <span className="text-white">Énergie</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="lg:col-span-4">
            <h2
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#38BDF8]/90"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {t("footer.explore")}
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8 lg:col-span-3 lg:mt-0 lg:border-l lg:border-t-0 lg:border-white/[0.06] lg:pt-0 lg:pl-10">
            <FooterLanguageSwitch />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {year} Solar Star Énergie. {t("footer.rights")}
          </p>
          <p className="text-xs text-white/30" lang={locale}>
            {t("footer.climate")}
          </p>
        </div>
      </div>
    </footer>
  );
}
