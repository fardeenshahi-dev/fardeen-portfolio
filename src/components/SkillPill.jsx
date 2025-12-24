import React from "react";
import { motion } from "framer-motion";

const SkillPill = ({ label, level, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.06,
        boxShadow: "0 0 18px rgba(59,130,246,0.4)",
        y: -2,
      }}
      className="relative flex items-center justify-between rounded-full px-4 py-2
      text-xs text-slate-200 bg-slate-900/50 backdrop-blur-xl border border-slate-700/60
      shadow-inner shadow-slate-900/70 transition-all cursor-default overflow-hidden"
    >
      {/* Floating shine */}
      <motion.div
        initial={{ x: -80 }}
        whileHover={{ x: 130 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 h-full w-12 bg-white/10 blur-md opacity-20 pointer-events-none"
      />

      {/* Label */}
      <span className="font-medium tracking-wide">{label}</span>

      {/* Level Badge */}
      {level && (
        <span
          className="rounded-full bg-slate-800/90 px-2 py-0.5 text-[10px] 
        text-slate-400 border border-slate-700/60"
        >
          {level}
        </span>
      )}
    </motion.div>
  );
};

export default SkillPill;
