import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative mt-10 border-t border-slate-800/50 bg-slate-950/70 backdrop-blur-2xl"
    >
      {/* 🔥 Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-0 left-1/3 h-40 w-40 bg-blue-600/20 blur-2xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-44 w-44 bg-purple-500/20 blur-2xl rounded-full animate-pulse delay-700" />
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">

        {/* LEFT SIDE – BRAND */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white font-bold shadow-lg shadow-blue-600/40 overflow-hidden">
            FS
            {/* Gloss highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-30 mix-blend-overlay" />
          </div>
          <p className="text-slate-400">
            © {new Date().getFullYear()} Fardeen Shahi • iOS Developer
          </p>
        </div>

        {/* RIGHT SIDE – SOCIAL LINKS */}
        <div className="flex items-center gap-5 text-sm font-medium">

          {/* LINKEDIN */}
          <motion.a
            href="https://www.linkedin.com/in/syedfardeen777"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.15,
              color: "#60a5fa",
              textShadow: "0 0 6px rgba(96,165,250,0.8)",
            }}
            transition={{ type: "spring", stiffness: 250 }}
            className="transition-colors"
          >
            LinkedIn
          </motion.a>

          {/* DOT */}
          <span className="h-1 w-1 rounded-full bg-slate-600" />

          {/* APP STORE */}
          <motion.a
            href="https://apps.apple.com/us/app/workon/id1545136439"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.15,
              color: "#34d399",
              textShadow: "0 0 6px rgba(52,211,153,0.8)",
            }}
            transition={{ type: "spring", stiffness: 250 }}
            className="transition-colors"
          >
            WorkOn on App Store
          </motion.a>
        </div>
      </div>

      {/* BOTTOM GLOW LINE */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
    </motion.footer>
  );
};

export default Footer;
