import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <main className="relative flex-1 bg-slate-950 overflow-hidden">

      {/* 🔥 Background Glow Lights */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-60">
        <div className="absolute top-20 left-1/3 h-72 w-72 bg-blue-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-1/4 h-80 w-80 bg-purple-500/20 blur-3xl rounded-full animate-pulse delay-700" />
        <div className="absolute top-1/2 right-1/3 h-96 w-96 bg-sky-500/10 blur-3xl rounded-full animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-14 sm:px-6 sm:py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            eyebrow="Projects"
            title="Apps & websites I’ve crafted with precision"
            description="Production-ready SwiftUI apps, Firebase integrations, and smooth UI/UX implementations. Each project reflects my approach to beautiful, reliable architecture."
          />
        </motion.div>

        {/* Projects Grid — 3D Tilt, Glow, Hover Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.06,
                rotateX: 8,
                rotateY: -8,
                boxShadow:
                  "0 20px 60px rgba(0,150,255,0.25), 0 10px 30px rgba(0,0,0,0.4)",
              }}
              className="rounded-3xl transition-transform duration-500"
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center text-slate-400 text-sm max-w-xl mx-auto leading-relaxed pt-10"
        >
          My focus is always: smooth UX, clean architecture, reusable components,
          and Firebase-powered production workflows.
        </motion.p>
      </div>

      {/* FLOAT ANIMATION */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-14px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
    </main>
  );
};

export default Projects;
