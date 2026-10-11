"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Blocks } from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";

const PROJECTS = [
  {
    id: "01",
    title: "Anti-Inflammatory Study (Capsicum annuum)",
    timeline: "Final-Year Research",
    description: "Investigating the anti-inflammatory activity of Cayenne pepper (Capsicum annuum) leaf and stem extracts through plant extraction, experimental screening, and animal model evaluation.",
    tech: ["Capsicum annuum", "Phytochemical Screening", "Animal Studies (Mice)", "Pharmacological Data Analysis", "In-Vivo Testing"],
    role: "Principal Student Researcher",
    image: "/viaagoo.png",
    color: "from-blue-600/20 to-cyan-600/20",
    borderGlow: "group-hover:shadow-[0_0_50px_-12px_rgba(6,182,212,0.5)]",
    deepDive: [
      { title: "Research Objective", content: "Investigated potential anti-inflammatory properties of Cayenne pepper (Capsicum annuum) leaf and stem extracts to assess their pharmacological relevance." },
      { title: "Experimental Methodology", content: "Prepared leaf and stem extracts, performed phytochemical screening, and conducted laboratory animal studies on mice models according to academic research standards." },
      { title: "Analytical Evaluation", content: "Analyzed resulting pharmacological response data and observed potential reduction in inflammation markers under controlled laboratory conditions." },
      { title: "Skills Acquired", content: "Mastered plant extract preparation, systematic experimental screening, in-vivo animal study procedures, and quantitative data processing." },
      { title: "Future Scope", content: "Further isolation of active bioflavonoids and chromatographic quantification (HPLC-MS) of capsaicinoids." }
    ]
  },
  {
    id: "02",
    title: "Formulation Quality Control & Testing",
    timeline: "Mar 2026 – Sep 2026",
    description: "Industrial formulation quality control at Rainbow Pharma Training Lab, executing comprehensive physical and chemical testing on diverse pharmaceutical dosage forms.",
    tech: ["Dissolution (Electrolab)", "Karl Fischer Titration", "Tablet Hardness", "Friability", "Disintegration", "GLP Standards"],
    role: "Industrial Trainee, Formulation QC",
    image: "/auticure.png",
    color: "from-purple-600/20 to-indigo-600/20",
    borderGlow: "group-hover:shadow-[0_0_50px_-12px_rgba(139,92,246,0.5)]",
    deepDive: [
      { title: "Industrial Setting", content: "Completed 6-month hands-on industrial training in formulation quality control within a regulated pharmaceutical laboratory." },
      { title: "Testing Protocols", content: "Performed routine physical and chemical testing on tablets and capsules: dissolution testing (Electrolab Trust-E), disintegration, friability, and hardness testing." },
      { title: "Moisture & Assay", content: "Executed Karl Fischer titrations for moisture determination, accurate weighing, and percentage assay calculations." },
      { title: "Standards & Integrity", content: "Maintained rigorous data integrity, audit-ready batch records, and compliance with Good Laboratory Practice (GLP)." },
      { title: "Key Competency", content: "Built deep intuition for regulated QC laboratory standards, troubleshooting instrument deviations, and recording verified test findings." }
    ]
  },
  {
    id: "03",
    title: "HPLC Instrumental Analysis",
    timeline: "Aug 2025 – Feb 2026",
    description: "Six-month commercial pharmaceutical analysis internship at Sri Krishna Pharmaceuticals Limited, operating Waters Alliance e2695 HPLC systems with Empower 3 software.",
    tech: ["Waters Alliance e2695", "Empower 3 Software", "PDA Detector", "System Suitability", "Assay Testing"],
    role: "Intern, Pharmaceutical Analysis",
    image: "/drowsiness.png",
    color: "from-red-600/20 to-orange-600/20",
    borderGlow: "group-hover:shadow-[0_0_50px_-12px_rgba(239,68,68,0.5)]",
    deepDive: [
      { title: "Commercial Exposure", content: "Conducted routine pharmaceutical testing within a commercial high-volume manufacturing laboratory at Sri Krishna Pharmaceuticals." },
      { title: "Instrument Mastery", content: "Operated the Waters Alliance e2695 HPLC system using Empower 3 chromatography data software and photodiode array (PDA) detectors." },
      { title: "Analytical Workflow", content: "Performed sample weighing, mobile phase preparation, degassing, dilution calculations, and chromatographic peak integration." },
      { title: "Industry Recognition", content: "Commended by the organization for diligence, discipline, accurate documentation, and exemplary professional conduct." },
      { title: "Curriculum Integration", content: "Transformed pharmacy coursework into validated industrial laboratory competence and strict standard operating procedure (SOP) execution." }
    ]
  },
  {
    id: "04",
    title: "GC Volatiles & Formulation R&D",
    timeline: "May 2024 – Present",
    description: "Chromatographic volatile analysis using Shimadzu Nexis GC-2030 (LabSolutions) and hands-on formulation research bridging lab-scale formulations to production.",
    tech: ["Shimadzu Nexis GC-2030", "LabSolutions", "FID Detector", "Formulation R&D", "GMP Documentation"],
    role: "Formulation R&D Intern",
    image: "/taxpal.png",
    color: "from-emerald-600/20 to-teal-600/20",
    borderGlow: "group-hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)]",
    deepDive: [
      { title: "GC Instrumentation", content: "Trained on Shimadzu Nexis GC-2030 system equipped with flame ionization detector (FID) and LabSolutions software for volatile analysis." },
      { title: "Formulation R&D Placement", content: "Supported pre-formulation trials and prototype batches during a 30-day FRD internship at Sri Krishna Pharmaceuticals." },
      { title: "Scale-up Understanding", content: "Learned how laboratory-scale formulation prototypes feed into manufacturing batches and quality control specifications." },
      { title: "Analytical Rigor", content: "Carried out concentration and dilution calculations, ensuring formula stoichiometry and stability adherence." },
      { title: "Quality Connection", content: "Gained direct insight into how formulation development directly dictates analytical method parameters and release testing." }
    ]
  }
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-16" />
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Research & <span className="text-white/30">Case Studies</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-2xl text-xl font-light">
            A showcase of pharmaceutical research, industrial QC placements, and chromatographic analyses built on Good Laboratory Practice and data integrity.
          </p>
        </motion.div>

        <div className="space-y-20">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={cn("group relative rounded-[3rem] bg-[#0a0a0e] border border-white/5 overflow-hidden transition-all duration-700", project.borderGlow)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row">
                {/* Visual Side */}
                <div className="w-full lg:w-1/2 relative aspect-video lg:aspect-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40 mix-blend-overlay z-10", project.color)} />
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent z-10" />
                  
                  <div className="absolute top-8 left-8 z-20">
                    <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/50 uppercase tracking-widest">
                      {project.timeline}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative z-10">
                  <div className="space-y-8">
                    <div>
                      <div className="text-white/30 font-mono text-[10px] tracking-[0.3em] uppercase mb-4">Project {project.id} — {project.role}</div>
                      <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-6">{project.title}</h3>
                      <p className="text-white/60 text-lg leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-4 py-2 rounded-xl text-xs font-medium bg-white/5 text-white/40 border border-white/5 backdrop-blur-md hover:text-white hover:border-white/20 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6">
                      <button 
                        onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                        className="group/btn flex items-center gap-4 text-white font-mono text-xs uppercase tracking-[0.2em] hover:text-blue-400 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-blue-400 group-hover/btn:bg-blue-400/10 transition-all">
                          {expandedId === project.id ? <Blocks className="w-4 h-4 rotate-45" /> : <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />}
                        </div>
                        {expandedId === project.id ? "Close Case Study" : "View Case Study"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study Accordion */}
              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden bg-[#050508]/60 backdrop-blur-md border-t border-white/5 will-change-[height,opacity]"
                  >
                    <div className="p-10 lg:p-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                      {project.deepDive.map((item, idx) => (
                        <div key={idx} className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            <h4 className="text-[10px] text-white/30 font-mono uppercase tracking-[0.3em]">{item.title}</h4>
                          </div>
                          <p className="text-white/50 text-sm leading-relaxed font-light">{item.content}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
