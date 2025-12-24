import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{
        scale: 1.04,
        rotateX: 6,
        rotateY: -6,
        boxShadow:
          "0 25px 60px rgba(59,130,246,0.25), 0 15px 40px rgba(0,0,0,0.5)",
      }}
      className="relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-br 
      from-blue-600/40 via-indigo-500/30 to-sky-500/30 shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      {/* Inner Glass Layer */}
      <div className="glass-panel rounded-3xl p-5 h-full relative overflow-hidden">

        {/* Floating Shine Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.3, x: 200 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute -top-10 -left-20 h-32 w-40 
          bg-white/20 blur-2xl rotate-12 rounded-full"
        />

        {/* Card Top Section */}
        <div className="space-y-3 z-10 relative">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-slate-50">
              {project.title}
            </h3>

            {project.badge && (
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] 
              font-semibold uppercase tracking-wide text-blue-300 shadow shadow-blue-500/20">
                {project.badge}
              </span>
            )}
          </div>

          <p className="text-sm text-slate-400 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px] 
                font-medium text-slate-300 ring-1 ring-slate-700/80 hover:ring-blue-400 
                transition-all hover:text-blue-300"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Divider Glow Line */}
        <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        {/* Links Section */}
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {project.links?.map((link, idx) => (
            <motion.a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              whileHover={{
                scale: 1.08,
                color: "#60a5fa",
                textShadow: "0 0 6px rgba(96,165,250,0.9)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 
              transition"
            >
              {link.label} →
            </motion.a>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
