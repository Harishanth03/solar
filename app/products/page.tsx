"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, TrendingUp, ChevronRight } from "lucide-react";
import Link from "next/link";

// Mock data
const projectsData = [
  {
    id: 1,
    title: "Tremblay Residence",
    location: "Laval, QC",
    category: "Residential",
    size: "10 kW",
    savings: "$1,800/year",
    quote: "Our electricity bills dropped by 85%. Absolutely incredible!",
    image:
      "https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Dubois Warehouse",
    location: "Montreal, QC",
    category: "Commercial",
    size: "75 kW",
    savings: "$12,000/year",
    quote: "ROI reached in 8 years. Best investment we ever made.",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80",
  },
  {
    id: 3,
    title: "Hébert Farm",
    location: "Quebec City, QC",
    category: "Industrial",
    size: "150 kW",
    savings: "$28,000/year",
    quote: "The entire installation was done in just 4 days.",
    image:
      "https://plus.unsplash.com/premium_photo-1678743133488-3e3400aafee2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Martin Residence",
    location: "Sherbrooke, QC",
    category: "Residential",
    size: "8 kW",
    savings: "$1,400/year",
    quote: "Professional, fast, and incredibly efficient team.",
    image:
      "https://images.unsplash.com/photo-1660330589257-813305a4a383?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Soleil Regional Office",
    location: "Longueuil, QC",
    category: "Commercial",
    size: "45 kW",
    savings: "$8,500/year",
    quote: "Perfectly integrated with our existing rooftop structure.",
    image:
      "https://plus.unsplash.com/premium_photo-1682148024043-79f4f7bfc84d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Gagnon Residence",
    location: "Gatineau, QC",
    category: "Residential",
    size: "12 kW",
    savings: "$2,100/year",
    quote: "I recommend Solar-Star to every single one of my neighbors!",
    image:
      "https://images.unsplash.com/photo-1762958266463-6af778b56beb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const categories = ["All", "Residential", "Commercial", "Industrial"];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter(
    (p) => activeFilter === "All" || p.category === activeFilter,
  );

  return (
    <main className="relative w-full text-white font-inter">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[45vh] flex items-center justify-center pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-medium text-sm mb-6"
          >
            Our Products
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-syne mb-6"
          >
            Products That Speak{" "}
            <span className="bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              For Themselves
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            Real installations, real savings, real Canadian families and
            businesses making the switch.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-slate-500 mb-12 font-medium"
          >
            <span className="hover:text-white cursor-pointer transition-colors">
              Home
            </span>{" "}
            <span className="mx-2">&gt;</span>{" "}
            <span className="text-orange-400">Products</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-lg">
              <span className="font-bold text-white">250+</span>{" "}
              <span className="text-slate-400">Products Completed</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-lg">
              <span className="font-bold text-white">2.4 MW</span>{" "}
              <span className="text-slate-400">Installed</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-lg">
              <span className="font-bold text-white">40+</span>{" "}
              <span className="text-slate-400">Cities Served</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-lg">
              <span className="font-bold text-white">98%</span>{" "}
              <span className="text-slate-400">Satisfaction Rate</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTER BAR */}
      <section className="py-8 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                    : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJECTS GRID */}
      <section className="py-12 px-4 relative z-10 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(idx * 0.1, 0.4),
                  }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group hover:border-orange-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col"
                >
                  <div className="h-48 relative shrink-0 transition-all duration-500 group-hover:brightness-110 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/10 text-xs font-semibold px-3 py-1 rounded-full text-white z-10">
                      {project.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full text-white shadow-lg z-10">
                      {project.size}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-3">
                      <MapPin size={16} className="text-orange-400" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="font-syne font-bold text-2xl text-white mb-4 group-hover:text-orange-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-orange-400 font-bold mb-6 bg-orange-500/10 w-fit px-3 py-1.5 rounded-lg border border-orange-500/20">
                      <TrendingUp size={18} />
                      <span>{project.savings}</span>
                    </div>
                    <div className="mt-auto">
                      <p className="italic text-slate-300 text-sm leading-relaxed mb-6">
                        &ldquo;{project.quote}&rdquo;
                      </p>
                      <button className="text-orange-400 font-semibold flex items-center gap-2 group-hover:text-orange-300 transition-colors w-fit">
                        View Product{" "}
                        <ChevronRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURED PROJECT */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white">
              Product Spotlight
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-linear-to-r from-orange-500 to-amber-400"></div>
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
                src="https://images.unsplash.com/photo-1619253860919-b7255e1bab47?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              <h3 className="font-syne font-bold text-3xl md:text-4xl text-white mb-3">
                Beaumont Industrial Complex
              </h3>
              <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-6">
                <MapPin size={16} className="text-sky-400" />
                <span>Saint-Jean-sur-Richelieu, QC</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-8">
                A large-scale commercial rooftop solar installation completed
                for a leading manufacturing facility. This state-of-the-art
                system is designed to offset their massive energy consumption
                and significantly reduce operational costs.
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
                  &ldquo;The transformation of our energy footprint has been
                  remarkable. Solar-Star delivered perfectly on schedule.&rdquo;
                </p>
              </div>

              <button className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50 transition-all duration-300 w-fit flex items-center gap-2 group">
                View Full Case Study{" "}
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. ANIMATED STATS BANNER */}
      <AnimatedStatsSection />

      {/* 6. CTA BANNER */}
      <section className="py-24 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

          <div className="relative z-10">
            <h2 className="font-syne font-bold text-3xl sm:text-5xl text-white mb-6">
              Your Product Could Be Next{" "}
              <span className="inline-block animate-pulse">☀️</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join over 250 families and businesses across Canada who trust
              Solar-Star for clean, affordable energy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50 transition-all duration-300">
                Request a Free Quote
              </button>
              <Link href="/services" className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-block">
                View Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function AnimatedStatsSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative p-px rounded-2xl bg-linear-to-r from-orange-500/30 via-white/10 to-sky-400/30 overflow-hidden shadow-2xl">
          <div
            ref={ref}
            className="w-full bg-[#0a0f1e]/80 backdrop-blur-xl rounded-2xl p-10 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-white/10">
              <StatCounter
                end={2.4}
                suffix=" MW+"
                label="Total Power Installed"
                inView={inView}
                isFloat
              />
              <StatCounter
                end={250}
                suffix="+"
                label="Products Completed"
                inView={inView}
              />
              <StatCounter
                end={580}
                suffix=" T"
                label="CO₂ Avoided Per Year"
                inView={inView}
              />
              <StatCounter
                end={12}
                suffix=" Years"
                label="Of Experience"
                inView={inView}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCounter({
  end,
  suffix,
  label,
  inView,
  isFloat,
}: {
  end: number;
  suffix: string;
  label: string;
  inView: boolean;
  isFloat?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const duration = 2000; // 2 seconds animation
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // easeOutQuart
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(end * ease);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it reaches exact end
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, end]);

  const displayCount = isFloat ? count.toFixed(1) : Math.floor(count);

  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="text-4xl md:text-5xl font-bold font-syne text-white mb-3 tracking-tight">
        {displayCount}
        {suffix}
      </div>
      <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
