"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-8 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-10">
              The Pharmaceutical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Evolution.</span>
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-3xl">
              <p>
                My foundation in pharmaceutical science was built during my Bachelor of Pharmacy (B.Pharmacy) at JNTU, graduating with a CGPA of 8.2/10. Driven by curiosity about how molecular chemistry translates into safe commercial therapeutics, I focused on formulation chemistry, analytical testing, and quality control systems.
              </p>
              <p>
                Across more than 12 months of intensive laboratory experience—including placements at Sri Krishna Pharmaceuticals and Rainbow Pharma Training Lab—I developed hands-on mastery over eight analytical quality-control instruments. This includes operating Waters Alliance e2695 HPLC (Empower 3), Shimadzu Nexis GC-2030 (LabSolutions), Electrolab Trust-E dissolution testing, and Karl Fischer titration under strict Good Laboratory Practice (GLP) and data-integrity standards.
              </p>
              <p>
                Currently pursuing an MSc in Pharmaceutical Analysis at Queen's University Belfast in the United Kingdom, I am deepening my expertise in analytical method development, validation, chromatographic separation, and regulatory compliance. Alongside my research, I serve as a Queen's Global Student Ambassador, sharing academic experiences with prospective students globally.
              </p>
              <p className="text-white/40 italic text-base md:text-lg">
                "Pharmaceutical analysis is the bedrock of patient safety—where uncompromising GLP compliance, analytical precision, and data integrity ensure therapeutic excellence."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
