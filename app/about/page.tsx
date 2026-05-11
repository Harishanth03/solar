import Link from "next/link";
import { ArrowRight, CheckCircle2, Lightbulb, Shield, Users } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Practical Solar Expertise",
    description:
      "Over the past year, we have focused on building smart, reliable, and efficient solar solutions for everyday needs.",
  },
  {
    icon: Shield,
    title: "Quality First",
    description:
      "Every project is planned with safety, long-term performance, and clean workmanship at the center.",
  },
  {
    icon: Users,
    title: "Customer-Centered Approach",
    description:
      "We listen first, guide clearly, and deliver systems that match each customer's goals and budget.",
  },
];

const values = [
  "Transparent communication from consultation to completion",
  "Reliable support before, during, and after installation",
  "Energy solutions designed for long-term savings",
  "Simple and stress-free service for homeowners and businesses",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white" style={{ fontFamily: "var(--font-inter)" }}>
      <section className="relative min-h-[45vh] flex items-center justify-center px-6 pt-28 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium mb-6 uppercase tracking-widest">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-syne)" }}>
            Powering A Smarter{" "}
            <span className="bg-linear-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Solar Future
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We are a growing solar team with overall one year of hands-on
            experience helping homes and businesses move to cleaner, more
            efficient energy solutions.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-8 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>
                <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                  {item.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-6 md:px-8 lg:px-12 pb-20">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-center" style={{ fontFamily: "var(--font-syne)" }}>
            What We Stand For
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-8">
            In our first year, we have built our reputation on trust, consistency, and practical outcomes that make clean energy easier to adopt.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-start gap-3 bg-black/20 border border-white/10 rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50"
            >
              Talk to Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
