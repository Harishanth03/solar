"use client";

import { motion } from "framer-motion";
import { MapPin, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";

export default function ProductShowcase() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-8 lg:px-12 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium mb-5 tracking-widest uppercase">
            <Zap className="w-3 h-3" />
            Product Spotlight
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Featured{" "}
            <span className="bg-linear-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Product
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-6">
            Explore one of our most impressive large-scale solar installations, showcasing our capability and commitment to excellence.
          </p>
          <div className="mx-auto flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-orange-500/60 rounded-full" />
            <div className="h-1 w-8 rounded-full bg-linear-to-r from-orange-500 to-amber-400" />
            <div className="h-px w-12 bg-linear-to-l from-transparent to-orange-500/60 rounded-full" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-72 lg:h-auto lg:w-1/2 shrink-0 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1619253860919-b7255e1bab47?q=80&w=1171&auto=format&fit=crop"
              alt="Beaumont Industrial Complex"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 lg:p-12 flex flex-col justify-center"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-bold text-xs w-fit mb-6 uppercase tracking-wider">
              Featured Product
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Beaumont Industrial Complex
            </h3>
            <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-6">
              <MapPin size={16} className="text-sky-400" />
              <span>Saint-Jean-sur-Richelieu, QC</span>
            </div>
            <p className="text-slate-300 leading-relaxed mb-8">
              A large-scale commercial rooftop solar installation completed for a leading manufacturing facility. This state-of-the-art system is designed to offset their massive energy consumption and significantly reduce operational costs.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-black/20 border border-white/5 p-5 rounded-xl hover:bg-black/30 transition-colors">
                <div className="text-2xl font-bold text-white mb-1">
                  320 kW
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">
                  Installed
                </div>
              </div>
              <div className="bg-black/20 border border-white/5 p-5 rounded-xl hover:bg-black/30 transition-colors">
                <div className="text-2xl font-bold text-white mb-1">58 T</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">
                  CO₂ Avoided/yr
                </div>
              </div>
              <div className="bg-black/20 border border-white/5 p-5 rounded-xl hover:bg-black/30 transition-colors">
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  $54,000
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">
                  Saved/yr
                </div>
              </div>
              <div className="bg-black/20 border border-white/5 p-5 rounded-xl hover:bg-black/30 transition-colors">
                <div className="text-2xl font-bold text-sky-400 mb-1">
                  7 Years
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">
                  ROI Time
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5 mb-8 bg-white/5 p-4 rounded-xl border border-white/5">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-lg">
                MB
              </div>
              <p className="italic text-slate-300 text-sm">
                &ldquo;The transformation of our energy footprint has been remarkable. Solar-Star delivered perfectly on schedule.&rdquo;
              </p>
            </div>

            <Link href="/services" className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50 transition-all duration-300 w-fit flex items-center gap-2 group">
              Voir nos services{" "}
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
