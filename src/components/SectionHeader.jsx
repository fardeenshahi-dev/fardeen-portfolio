import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ eyebrow, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative space-y-3 pb-6"
    >
      {/* Floating Glow Circle Behind Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full bg-blue-600/30 blur-2xl"
      />

      {/* Eyebrow Text */}
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400/90"
        >
          {eyebrow}
        </motion.p>
      )}

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        whileHover={{
          scale: 1.02,
          textShadow: "0 0 12px rgba(59,130,246,0.7)",
        }}
        className="relative inline-block text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight"
      >
        {title}

        {/* Gradient underline */}
        <motion.span
          layoutId="header-underline"
          className="absolute -bottom-2 left-0 h-[3px] w-20 rounded-full 
          bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_12px_rgba(59,130,246,0.65)]"
        />
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="max-w-2xl text-sm text-slate-400 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
