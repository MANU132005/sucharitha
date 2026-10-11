"use client";

import { motion } from "framer-motion";
import { Cloud, ShieldCheck, Zap, Server, Database, Activity, Cpu, Globe } from "lucide-react";

const CLOUD_METRICS = [
  { label: "HPLC System", value: "Waters e2695 & Empower 3", icon: <ShieldCheck className="w-5 h-5 text-blue-400" /> },
  { label: "GC System", value: "Shimadzu 2030 & LabSolutions", icon: <Server className="w-5 h-5 text-indigo-400" /> },
  { label: "Compliance", value: "GLP & GMP Standards", icon: <Cpu className="w-5 h-5 text-purple-400" /> },
  { label: "QC Suite", value: "8+ Testing Instruments", icon: <Zap className="w-5 h-5 text-yellow-400" /> }
];

export default function CloudAI() {
  return (
    <section id="cloud-ai" className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Analytical & <span className="text-white/30">Quality Systems</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-white/20 to-transparent w-full max-w-[200px]" />
          </div>
          <p className="text-white/50 max-w-2xl text-xl font-light">
            Operating regulated analytical quality-control instrumentation. Focused on chromatographic data integrity, pharmacopoeial method compliance, and Good Laboratory Practice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cloud Architecture Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 glass-card p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Instrumentation Architecture</h3>
                  <p className="text-white/40 text-sm font-mono uppercase tracking-widest">GLP / GMP Laboratory Environment</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-12 bg-blue-500/50 rounded-full mt-1" />
                    <div>
                      <h4 className="text-white font-medium mb-2">Chromatographic Suite</h4>
                      <p className="text-white/50 text-sm leading-relaxed">Operating Waters Alliance e2695 (PDA detector) and Shimadzu Nexis GC-2030 (FID) for assay testing and volatile quantification.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-12 bg-indigo-500/50 rounded-full mt-1" />
                    <div>
                      <h4 className="text-white font-medium mb-2">Formulation QC Testing</h4>
                      <p className="text-white/50 text-sm leading-relaxed">Conducting dissolution testing (Electrolab Trust-E), Karl Fischer titrations, friability, disintegration, and tablet hardness.</p>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-square md:aspect-auto rounded-3xl border border-white/10 bg-[#020203]/50 p-6 flex items-center justify-center">
                  {/* Dashboard UI Simulation */}
                  <div className="w-full space-y-4">
                    {[
                      { name: "Waters e2695 HPLC", status: "Baseline Calibrated" },
                      { name: "Shimadzu GC-2030", status: "LabSolutions Ready" },
                      { name: "Electrolab Dissolution", status: "USP Compliant" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-emerald-500' : 'bg-blue-500'} animate-pulse`} />
                          <span className="text-xs font-mono text-white/80">{item.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/40">{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Telemetry Cards */}
          <div className="grid gap-6">
            {CLOUD_METRICS.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-6 rounded-[2rem] border border-white/5 flex items-center gap-5 hover:bg-white/[0.02] transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#030305] border border-white/10 flex items-center justify-center">
                  {metric.icon}
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">{metric.label}</p>
                  <p className="text-white font-bold tracking-tight">{metric.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
