"use client";

import { motion } from "framer-motion";
import { BookOpen, Terminal, Cpu, Cloud, ArrowRight } from "lucide-react";

const INSIGHTS = [
  {
    title: "Optimizing Peak Resolution on Waters e2695",
    category: "Chromatography",
    date: "September 2026",
    readTime: "5 min read",
    icon: <Cpu className="w-5 h-5 text-blue-400" />,
    summary: "Practical techniques for resolving co-eluting peaks, maintaining mobile phase degassing, and optimizing flow rates for photodiode array (PDA) detection.",
    link: "#"
  },
  {
    title: "Data Integrity & GLP in Modern Quality Control",
    category: "Quality Systems",
    date: "June 2026",
    readTime: "7 min read",
    icon: <Cloud className="w-5 h-5 text-emerald-400" />,
    summary: "Key principles of maintaining uncompromised raw data integrity, standard operating procedure (SOP) compliance, and audit readiness in pharmaceutical testing.",
    link: "#"
  },
  {
    title: "The Pharmacy Graduate Journey to Queen's Belfast",
    category: "Academic Evolution",
    date: "October 2026",
    readTime: "4 min read",
    icon: <Terminal className="w-5 h-5 text-purple-400" />,
    summary: "Reflections on transitioning from undergraduate pharmacy at JNTU into advanced pharmaceutical analysis and international student representation at QUB.",
    link: "#"
  }
];

export default function Insights() {
  return (
    <section id="insights" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Scientific <span className="text-white/30">Insights</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-white/20 to-transparent w-full max-w-[200px]" />
          </div>
          <p className="text-white/50 max-w-2xl text-xl font-light">
            An analytical journal documenting thoughts on chromatographic method validation, laboratory data integrity, and pharmaceutical quality assurance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {INSIGHTS.map((insight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-card p-8 rounded-[2rem] border border-white/5 hover:border-white/10 hover:bg-[#08080a] transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {insight.icon}
                  </div>
                  <div className="text-white/40 text-xs font-mono uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">
                    {insight.category}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-blue-400 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed mb-8">
                  {insight.summary}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-auto border-t border-white/5 pt-6">
                <div className="text-white/40 text-xs font-mono uppercase tracking-wider">
                  {insight.readTime}
                </div>
                <a href={insight.link} className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors group/link">
                  Read Log <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
