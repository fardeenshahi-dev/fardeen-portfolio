import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

const Home = () => {
  const highlight = projects[0];

  return (
    <main className="relative flex-1 bg-slate-950 scroll-smooth">

      {/* 🔥 Ultra Pro Max Background Lights */}
      <div className="absolute inset-0 -z-10 opacity-70 pointer-events-none">
        <div className="absolute top-0 left-1/3 h-72 w-72 bg-blue-600/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 h-80 w-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/4 h-96 w-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Spotlight */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.09),transparent_65%)]" />

      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 text-center lg:text-left">

        {/* Hiring Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full bg-green-500/20 text-green-300 border border-green-500/40 backdrop-blur-xl text-xs font-semibold animate-pulse"
        >
          ✓ Available for Hiring — iOS Developer (SwiftUI)
        </motion.div>

        {/* Intro Eyebrow */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-300">
          iOS Developer • SwiftUI • MVVM • Firebase
        </p>

        {/* MAIN Heading */}
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-xl">
          Crafting Stunning{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-300 bg-clip-text text-transparent">
            iOS Experiences
          </span>
          <br />
          with SwiftUI Precision.
        </h1>

        {/* 🧑‍💻 Personalized Line (Your Name) */}
        <p className="mt-4 text-lg text-slate-300 font-semibold">
          I’m <span className="text-blue-400">Fardeen Shahi</span>, an iOS Developer passionate about creating clean, modern Apple-quality apps.
        </p>

        {/* Description */}
        <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-slate-300 text-[15px] leading-relaxed">
          I design and build production-ready SwiftUI apps with MVVM architecture, smooth animations,
          Firebase-powered features like OTP login, Firestore integration, profile onboarding, and
          modular clean UI components.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">

          {/* WhatsApp — Glow */}
          <a
            href="https://wa.me/917061629261?text=Hi%20Fardeen,%20I%20am%20interested%20in%20hiring%20you%20for%20an%20iOS%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl font-semibold text-white bg-green-500 shadow-lg shadow-green-600/40 
            hover:bg-green-600 hover:shadow-green-600/50 transition transform hover:scale-105"
          >
            WhatsApp Me
          </a>

          {/* Email — Pulse */}
          <a
            href="mailto:fardeenshahi786@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Fardeen,%0AI’d%20like%20to%20discuss%20a%20job%20opportunity."
            className="px-8 py-3 rounded-xl font-semibold text-white bg-blue-600 shadow-lg shadow-blue-600/40 
            animate-pulse hover:animate-none hover:bg-blue-700 transition transform hover:scale-105"
          >
            Email Me
          </a>
        </div>

        {/* Floating Skill Tags */}
        <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3 text-xs">
          <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-slate-200">
            SwiftUI Specialist
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-slate-200">
            MVVM Expert
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-slate-200">
            Firebase Pro
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-slate-200">
            Async/Await Mastery
          </span>
        </div>
      </section>

      {/* FLOATING iPHONE MOCKUP */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute right-6 bottom-6 lg:right-24 lg:bottom-10 hidden lg:block"
      >
        <img
          src="/iphone-mockup.png"
          alt="WorkOn App UI"
          className="w-[260px] drop-shadow-[0_25px_45px_rgba(0,0,0,0.5)] animate-float"
        />
      </motion.div>

      {/* FLOAT ANIMATION */}
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        `}
      </style>

      {/* PROJECTS SECTION */}
      <section id="projects" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 space-y-6">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects"
          description="A snapshot of the apps and websites I’ve built using SwiftUI, MVVM, Firebase, and modern UI systems."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

    </main>
  );
};

export default Home;
