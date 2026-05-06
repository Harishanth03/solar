"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type HeroSlide = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
};

const slides: HeroSlide[] = [
  {
    id: 1,
    title: "Power Your Home With Clean Solar Energy",
    subtitle:
      "Reduce electricity bills and switch to a smarter energy future with high-performance solar panels.",
    image: "/images/hero/hero-1.jpg",
    primaryButton: { label: "Get Free Quote", href: "/devis" },
    secondaryButton: { label: "View Services", href: "/services" },
  },
  {
    id: 2,
    title: "Reliable Solar Systems For Every Roof",
    subtitle:
      "From design to installation, we build long-lasting systems tailored to your home and business needs.",
    image: "/images/hero/hero-2.jpg",
    primaryButton: { label: "Start Your Project", href: "/contact" },
    secondaryButton: { label: "Our Projects", href: "/projets" },
  },
  {
    id: 3,
    title: "Save More. Live Greener. Shine Brighter.",
    subtitle:
      "Join hundreds of families choosing solar power for lower costs, better comfort, and a cleaner tomorrow.",
    image: "/images/hero/hero-3.jpg",
    primaryButton: { label: "Book Consultation", href: "/contact" },
    secondaryButton: { label: "About Us", href: "/a-propos" },
  },
];

const AUTOPLAY_MS = 5000;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!isActive}
          >
            <div
              className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-12 pt-20">
                <div className="max-w-2xl">
                  <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-white/90 backdrop-blur-sm">
                    Trusted Solar Experts
                  </p>
                  <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-base text-white/85 md:text-lg">
                    {slide.subtitle}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href={slide.primaryButton.href}
                      className="rounded-full bg-linear-to-r from-[#F97316] to-[#FB923C] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/35"
                    >
                      {slide.primaryButton.label}
                    </Link>
                    <Link
                      href={slide.secondaryButton.href}
                      className="rounded-full border border-white/35 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20"
                    >
                      {slide.secondaryButton.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-9 bg-white" : "w-2.5 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
