import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <main id="contact" className="relative flex-1 bg-slate-950 overflow-hidden">

      {/* 🔥 Animated Background Lights */}
      <div className="absolute inset-0 -z-10 opacity-70 pointer-events-none">
        <div className="absolute top-20 left-1/4 h-72 w-72 bg-blue-600/25 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-1/4 h-80 w-80 bg-purple-500/25 blur-3xl rounded-full animate-pulse delay-500" />
        <div className="absolute top-1/2 left-1/3 h-96 w-96 bg-sky-500/10 blur-3xl rounded-full animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-16 sm:px-6 sm:py-24">

        {/* ULTRA HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build something exceptional"
            description="Available for full-time iOS roles, SwiftUI product builds, or modernising existing apps. Fastest response: WhatsApp or Email."
          />
        </motion.div>

        {/* GLASS CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-8 shadow-xl shadow-blue-500/10 border border-slate-800/60 backdrop-blur-2xl space-y-10"
        >

          {/* Contact Info Grid */}
          <div className="grid gap-6 sm:grid-cols-2">

            {/* Email */}
            <div className="space-y-1 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Email
              </p>
              <a
                href="mailto:fardeenshahi786@gmail.com"
                className="text-sm font-medium text-slate-100 hover:text-blue-400 transition"
              >
                fardeenshahi786@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="space-y-1 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Phone / WhatsApp
              </p>
              <a
                href="https://wa.me/917061629261"
                target="_blank"
                className="text-sm font-medium text-green-400 hover:text-green-300 transition"
              >
                +91 70616 29261
              </a>
            </div>

            {/* LinkedIn */}
            <div className="space-y-1 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/syedfardeen777"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-100 hover:text-blue-400 transition"
              >
                linkedin.com/in/syedfardeen777
              </a>
            </div>

            {/* Location */}
            <div className="space-y-1 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Location
              </p>
              <p className="text-sm font-medium text-slate-100">
                Bhopal, India · Open to relocation
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-400 leading-relaxed">
            Share your project idea, job role, tech stack, and timeline. I reply
            quickly and enjoy collaborating with SwiftUI-first teams building modern products.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-4">

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/917061629261?text=Hi%20Fardeen,%20I'd%20like%20to%20discuss%20a%20role."
              target="_blank"
              whileHover={{ scale: 1.06, boxShadow: "0 0 18px rgba(16,185,129,0.6)" }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-green-500 text-white text-sm font-semibold 
                shadow-md shadow-green-500/40 hover:bg-green-600 transition"
            >
              WhatsApp Me
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:fardeenshahi786@gmail.com?subject=Hiring%20Inquiry"
              whileHover={{ scale: 1.06, boxShadow: "0 0 18px rgba(59,130,246,0.6)" }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold 
                shadow-md shadow-blue-600/40 hover:bg-blue-700 transition"
            >
              Email Me
            </motion.a>
          </div>
        </motion.div>

        {/* FINAL CTA BANNER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-slate-800/60 bg-slate-900/60 backdrop-blur-xl p-8 text-center shadow-lg shadow-blue-500/10"
        >
          <h2 className="text-xl font-semibold text-slate-100">
            Ready to build something amazing?
          </h2>

          <p className="mt-2 text-slate-400 text-sm max-w-md mx-auto">
            Whether it’s a new SwiftUI product or a modern app redesign,  
            I bring speed, quality, and clean architecture.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://wa.me/917061629261"
              className="rounded-full bg-green-500 px-6 py-2 text-xs font-semibold text-white shadow hover:bg-green-600"
            >
              Start on WhatsApp →
            </a>

            <a
              href="mailto:fardeenshahi786@gmail.com"
              className="rounded-full bg-blue-600 px-6 py-2 text-xs font-semibold text-white shadow hover:bg-blue-700"
            >
              Start by Email →
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
};

export default Contact;
