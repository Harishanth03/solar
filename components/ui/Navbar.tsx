"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Menu, X, Sun } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { name: t("nav.home"), href: "/" },
      { name: t("nav.services"), href: "/services" },
      { name: t("nav.about"), href: "/about" },
      { name: t("nav.contact"), href: "/contact" },
    ],
    [t],
  );

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${
            isScrolled
              ? "py-3 bg-[rgba(10,15,30,0.4)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)]"
              : "py-5 bg-transparent"
          }
        `}
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <Link href="/" className="group relative flex items-center gap-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-r from-[#F97316] to-[#38BDF8] rounded-full blur-sm opacity-40 group-hover:opacity-70 transition duration-500"></div>
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-[#F97316]/20 to-[#38BDF8]/20 backdrop-blur-sm border border-white/15">
                  <Sun className="w-5 h-5 text-[#F97316]" />
                </div>
              </div>
              <span className="text-xl font-semibold tracking-tight bg-linear-to-r from-white to-white/80 bg-clip-text text-transparent">
                Solar<span className="text-[#F97316]">Star</span>{" "}
                <span className="text-white/90">Énergie</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-linear-to-r from-[#F97316] to-[#FB923C] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/35"
              >
                {t("nav.quote")}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/20 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden transition-all duration-500 ease-out
          ${
            isMobileMenuOpen
              ? "opacity-100 visible backdrop-blur-md bg-black/60"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`
            absolute top-20 left-4 right-4 p-6 rounded-2xl
            bg-linear-to-b from-[rgba(20,25,45,0.9)] to-[rgba(10,15,30,0.95)]
            backdrop-blur-xl border border-white/15 shadow-2xl
            transition-all duration-500 ease-out
            ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-8 opacity-0"
            }
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-center font-medium"
                style={{
                  transitionDelay: `${idx * 50}ms`,
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent my-3"></div>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 text-center px-4 py-3 rounded-full bg-linear-to-r from-[#F97316] to-[#FB923C] text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/35"
            >
              {t("nav.quote")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
