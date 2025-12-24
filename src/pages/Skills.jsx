import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import SkillPill from "../components/SkillPill.jsx";
import { motion } from "framer-motion";
import {
  primarySkills,
  secondarySkills,
  webSkills,
} from "../data/skills.js";

const Skills = () => {
  return (
    <main className="relative flex-1 bg-slate-950 overflow-hidden">

      {/* 🔥 Animated Background Lights */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-70">
        <div className="absolute top-1/3 left-1/4 h-64 w-64 bg-blue-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute top-1/4 right-1/4 h-72 w-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-10 left-1/3 h-80 w-80 bg-sky-500/10 blur-3xl rounded-full animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-12 sm:px-6 sm:py-20">

        {/* ULTRA HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            eyebrow="Skills"
            title="Crafting polished, scalable iOS experiences with SwiftUI excellence."
            description="My stack blends SwiftUI, MVVM, Firebase, async workflows, and reusable UI engineering — delivering fluid, modern app experiences."
          />
        </motion.div>

        {/* 3D GRID CARDS */}
        <div className="grid gap-10 lg:grid-cols-3">

          {/* iOS CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.04,
              rotateX: 4,
              rotateY: -4,
            }}
            className="glass-panel p-6 rounded-3xl shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 
            border border-slate-800/70 backdrop-blur-2xl transition-all"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              iOS – Core Strengths
            </h3>

            <div className="mt-4 space-y-2">
              {primarySkills.map((s, index) => (
                <SkillPill key={s.label} {...s} index={index} />
              ))}
            </div>

            {/* Glow underline */}
            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
          </motion.div>

          {/* TOOLING CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            whileHover={{
              scale: 1.04,
              rotateX: -4,
              rotateY: 4,
            }}
            className="glass-panel p-6 rounded-3xl shadow-xl shadow-purple-500/10 hover:shadow-purple-500/20 
            border border-slate-800/70 backdrop-blur-2xl transition-all"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
              Tooling & Architecture
            </h3>

            <div className="mt-4 space-y-2">
              {secondarySkills.map((s, index) => (
                <SkillPill key={s.label} {...s} index={index} />
              ))}
            </div>

            {/* Glow underline */}
            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.5)]" />
          </motion.div>

          {/* WEB & UI CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
            whileHover={{
              scale: 1.05,
              rotateX: 3,
              rotateY: 3,
            }}
            className="glass-panel p-6 rounded-3xl shadow-xl shadow-sky-500/10 hover:shadow-sky-500/20 
            border border-slate-800/70 backdrop-blur-2xl transition-all"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
              Web & UI
            </h3>

            <div className="mt-4 space-y-2">
              {webSkills.map((s, index) => (
                <SkillPill key={s.label} {...s} index={index} />
              ))}
            </div>

            {/* Glow underline */}
            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
          </motion.div>
        </div>

        {/* Bottom Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center text-slate-400 text-sm max-w-xl mx-auto leading-relaxed pt-6"
        >
          I specialize in building **fluid**, **modern**, and **production-grade iOS apps** —
          blending design precision with scalable architecture.
        </motion.p>
      </div>

      {/* Floating Animation (Global) */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-14px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }
        `}
      </style>
    </main>
  );
};

export default Skills;
