"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Eye, ShieldCheck, Scale, MousePointerClick, Cpu, Terminal } from "lucide-react";
import AnimatedText from "./AnimatedText";

const PHILOSOPHIES = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-yellow-400" />,
    title: "Good Laboratory Practice (GLP)",
    desc: "Adhering to strict GLP and data-integrity protocols across all routine testing, instrumentation logs, and laboratory standards.",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    icon: <Eye className="w-6 h-6 text-blue-400" />,
    title: "Chromatographic Precision",
    desc: "Rigorous attention to peak resolution, retention times, and system suitability in both HPLC (Waters e2695) and GC (Shimadzu 2030).",
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    icon: <Layers className="w-6 h-6 text-emerald-400" />,
    title: "Formulation QC",
    desc: "Mastery of physical and chemical quality control: dissolution testing, friability, disintegration, and tablet hardness.",
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    icon: <Scale className="w-6 h-6 text-purple-400" />,
    title: "Data Integrity & Rigor",
    desc: "Audit-ready documentation, precise dilution formulas, and accurate percentage assay calculations using Microsoft Excel.",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    icon: <Zap className="w-6 h-6 text-red-400" />,
    title: "Pharmacopoeial Standards",
    desc: "Aligning analytical procedures with official monographs (USP, BP, IP) and regulated pharmaceutical quality systems.",
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    icon: <Cpu className="w-6 h-6 text-orange-400" />,
    title: "Method Validation",
    desc: "Studying advanced analytical method development, validation parameters, and spectroscopic techniques at Queen's University Belfast.",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    icon: <Zap className="w-6 h-6 text-teal-400" />,
    title: "Continuous Learning",
    desc: "Over 12 months in commercial pharma environments, consistently mastering new instruments and testing protocols.",
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    icon: <Terminal className="w-6 h-6 text-emerald-300" />,
    title: "R&D to Manufacturing",
    desc: "Connecting formulation research and laboratory-scale synthesis with full-scale pharmaceutical quality and production.",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    icon: <MousePointerClick className="w-6 h-6 text-indigo-400" />,
    title: "Communicator & Ambassador",
    desc: "Bridging scientific excellence with confident interpersonal communication as a Queen's Global Student Ambassador.",
    colSpan: "md:col-span-1 lg:col-span-1"
  }
];

export default function Philosophy() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              <AnimatedText text="My approach to" delay={0.2} />{" "}
              <AnimatedText 
                text="Quality Systems." 
                delay={0.6} 
                animateBy="word" 
                itemClassName="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
              />
            </h2>
            <div className="h-px bg-gradient-to-r from-white/20 to-transparent w-32 hidden md:block" />
          </div>
          <div className="text-white/50 text-xl font-light max-w-2xl">
            <AnimatedText 
              text="I focus on analytical precision, rigorous Good Laboratory Practice (GLP), and data integrity. Committed to delivering accurate pharmaceutical testing and developing high-standard quality systems." 
              delay={1.2}
              stagger={0.01}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {PHILOSOPHIES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card p-8 rounded-[2rem] border border-white/5 glass-card-hover group relative overflow-hidden ${item.colSpan}`}
            >
              {/* Dynamic Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-px bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] z-0 transition-opacity duration-700" style={{ maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)', maskComposite: 'exclude', padding: '1px' }} />

              <div className="relative z-10 h-full flex flex-col justify-between gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-out shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm font-light">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
